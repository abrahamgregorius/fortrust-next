"use client";
import { supabase } from "@/lib/supabaseClient";
import React, { useState } from "react";

const Icon = ({ path, className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d={path} />
  </svg>
);

const ICONS = {
  back: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
  upload: "M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z",
  close:
    "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
  user: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  institution:
    "M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z",
};

const uploadFile = async (file, filePath) => {
  const { data, error } = await supabase.storage
    .from("public-assets")
    .upload(filePath, file);
  if (error) {
    console.error(error);
    return null;
  }
  return data;
};

export default function CreateTestimonialPage() {
  const [formData, setFormData] = useState({
    person_name: "",
    person_institution: "",
    testimonial: "",
    display_order: 0,
  });
  const [imageFile, setImageFile] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus({ message: "Submitting testimonial...", type: "info" });

    try {
      let imageUrl = "";

      // Upload image if file is selected
      if (imageFile) {
        const filePath = `testimonials/${Date.now()}-${imageFile.name}`;
        const uploadResult = await uploadFile(imageFile, filePath);

        if (uploadResult) {
          const { data: publicUrlData } = supabase.storage
            .from("public-assets")
            .getPublicUrl(filePath);
          imageUrl = publicUrlData.publicUrl;
        } else {
          throw new Error("Failed to upload image");
        }
      }

      const testimonialData = {
        person_name: formData.person_name,
        person_institution: formData.person_institution,
        testimonial: formData.testimonial,
        image_url: imageUrl,
        display_order: formData.display_order,
        created_at: new Date().toISOString(),
      };

      const { data, error: insertError } = await supabase
        .from("testimonials")
        .insert([testimonialData])
        .select();

      if (insertError) throw insertError;

      setSubmissionStatus({
        message: "Testimonial submitted successfully!",
        type: "success",
      });

      setTimeout(() => {
        setFormData({
          person_name: "",
          person_institution: "",
          testimonial: "",
          display_order: 0,
        });
        setImageFile(null);
        setSubmissionStatus(null);
      }, 3000);
    } catch (err) {
      console.error("❌ Error submitting testimonial:", err);
      setSubmissionStatus({ message: `Error: ${err.message}`, type: "error" });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <a
            href="/admin/testimonials"
            className="flex items-center text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Icon path={ICONS.back} className="w-6 h-6 mr-2" />
            Back to Testimonials List
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-md space-y-6"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Create New Testimonial
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Fill out the details below to add a new testimonial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="person_name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Person Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Icon path={ICONS.user} />
                </span>
                <input
                  type="text"
                  id="person_name"
                  name="person_name"
                  value={formData.person_name}
                  onChange={handleChange}
                  required
                  className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g., John Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="person_institution"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Institution
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Icon path={ICONS.institution} />
                </span>
                <input
                  type="text"
                  id="person_institution"
                  name="person_institution"
                  value={formData.person_institution}
                  onChange={handleChange}
                  className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g., Harvard University"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="testimonial"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Testimonial (1-2 sentences)
            </label>
            <textarea
              id="testimonial"
              name="testimonial"
              value={formData.testimonial}
              onChange={handleChange}
              required
              rows="6"
              className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter the testimonial text..."
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="display_order"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Display Order (Default: 0)
            </label>
            <input
              type="number"
              id="display_order"
              name="display_order"
              value={formData.display_order}
              onChange={handleChange}
              className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Icon
                  path={ICONS.upload}
                  className="mx-auto h-12 w-12 text-gray-400"
                />
                <div className="flex justify-center items-center text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    <span>Upload file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      onChange={handleFileChange}
                      className="sr-only"
                      accept="image/*"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            {imageFile && (
              <div className="mt-4">
                <div className="relative group">
                  <img
                    src={URL.createObjectURL(imageFile)}
                    alt="preview"
                    className="h-32 w-32 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                  >
                    <Icon path={ICONS.close} className="w-4 h-4" />
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-600">{imageFile.name}</p>
              </div>
            )}
          </div>

          {submissionStatus && (
            <div
              className={`p-4 rounded-md text-sm ${submissionStatus.type === "success"
                ? "bg-green-100 text-green-800"
                : submissionStatus.type === "error"
                  ? "bg-red-100 text-red-800"
                  : "bg-blue-100 text-blue-800"
                }`}
            >
              {submissionStatus.message}
            </div>
          )}

          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
            <a
              href="/admin/testimonials"
              className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </a>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
            >
              Save Testimonial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


