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
  arrowUp: "M7 14l5-5 5 5z",
  arrowDown: "M7 10l5 5 5-5z",
  link: "M7 17q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h3q.425 0 .713.288T11 8t-.288.713T10 9H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h3q.425 0 .713.288T11 16t-.288.713T10 17zm2-4q-.425 0-.712-.288T8 12t.288-.712T9 11h6q.425 0 .713.288T16 12t-.288.713T15 13zm5 4q-.425 0-.712-.288T13 16t.288-.712T14 15h3q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-3q-.425 0-.712-.288T13 8t.288-.712T14 7h3q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"
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

export default function CreateEventsPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    start_date: "",
    end_date: "",
    registration_link: "",
    status: "pending",
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
    setSubmissionStatus({ message: "Submitting event...", type: "info" });

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

      const eventData = {
        name: formData.name,
        description: formData.description,
        start_date: formData.start_date ? new Date(formData.start_date).toISOString() : null,
        end_date: formData.end_date ? new Date(formData.end_date).toISOString() : null,
        registration_link: formData.registration_link || null,
        status: formData.status || "draft",
        image_url: imageUrl || null,
        created_at: new Date().toISOString(),
      };

      const { data, error: insertError } = await supabase
        .from("events")
        .insert([eventData])
        .select();

      if (insertError) throw insertError;

      setSubmissionStatus({ message: "Event submitted successfully!", type: "success" });

      setTimeout(() => {
        setFormData({
          name: "",
          description: "",
          start_date: "",
          end_date: "",
          registration_link: "",
          status: "draft",
        });
        setImageFile(null);
        setSubmissionStatus(null);
      }, 2000);
    } catch (err) {
      console.error("❌ Error submitting event:", err);
      setSubmissionStatus({ message: `Error: ${err.message}`, type: "error" });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <a
            href="/admin/events"
            className="flex items-center text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Icon path={ICONS.back} className="w-6 h-6 mr-2" />
            Back to Events List
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-md space-y-6"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Create New Event
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Fill out the details below to add a new event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Event Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Icon path={ICONS.user} />
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Event title"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Icon path={ICONS.institution} />
                </span>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="pl-3 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Short description of the event"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="start_date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Start date
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Icon path={ICONS.arrowUp} />
                </span>
                <input
                  type="datetime-local"
                  id="start_date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleChange}
                  className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="end_date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                End date
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Icon path={ICONS.arrowDown} />
                </span>
                <input
                  type="datetime-local"
                  id="end_date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleChange}
                  className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="registration_link"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Registration Link
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Icon path={ICONS.link} />
              </span>
              <input
                type="url"
                id="registration_link"
                name="registration_link"
                value={formData.registration_link}
                onChange={handleChange}
                className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://"
              />
            </div>
          </div>

          {/* extra controls: status and image upload */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Event Image (optional)
              </label>
              <div className="flex items-center space-x-4">
                <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} />
                {imageFile && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{imageFile.name}</span>
                    <button type="button" onClick={handleRemoveImage} className="text-sm text-red-600">Remove</button>
                  </div>
                )}
              </div>
            </div>
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
              href="/admin/event"
              className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </a>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
            >
              Save Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
