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

// Icon paths
const ICONS = {
  back: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
  user: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  location: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  link: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",
  arrowUp: "M7 14l5-5 5 5z",
  arrowDown: "M7 10l5 5 5-5z",
  upload: "M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z",
  close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
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
    start_at: "",
    end_at: "",
    location: "",
    registration_link: "",
    status: "pending",
    speaker: "",
    topics: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus({ message: "Submitting event...", type: "info" });

    try {
      let imageUrl = null;

      // Upload image if file is selected
      if (imageFile) {
        const filePath = `events/${Date.now()}-${imageFile.name}`;
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
        start_at: formData.start_at
          ? new Date(formData.start_at).toISOString()
          : null,
        end_at: formData.end_at
          ? new Date(formData.end_at).toISOString()
          : null,
        location: formData.location,
        registration_link: formData.registration_link || null,
        status: formData.status,
        speaker: formData.speaker,
        topics: formData.topics,
        image_url: imageUrl,
        created_at: new Date().toISOString(),
      };

      const { data, error: insertError } = await supabase
        .from("events")
        .insert([eventData])
        .select();

      if (insertError) throw insertError;

      setSubmissionStatus({
        message: "Event submitted successfully!",
        type: "success",
      });

      setTimeout(() => {
        setFormData({
          name: "",
          description: "",
          start_at: "",
          end_at: "",
          location: "",
          registration_link: "",
          status: "pending",
          speaker: "",
          topics: "",
        });
        setImageFile(null);
        setImagePreview(null);
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
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="inactive">Inactive</option>
                <option value="active">Active</option>
              </select>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="speaker"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Speaker
              </label>
              <input
                type="text"
                id="speaker"
                name="speaker"
                value={formData.speaker}
                onChange={handleChange}
                className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Mr./Ms./Mrs."
              />
            </div>
            <div>
              <label
                htmlFor="topics"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Topics (comma separated)
              </label>
              <input
                type="text"
                id="topics"
                name="topics"
                value={formData.topics}
                onChange={handleChange}
                className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Education,..."
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Icon path={ICONS.location} />
              </span>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Event location"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="start_at"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Start date of event
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Icon path={ICONS.arrowUp} />
                </span>
                <input
                  type="datetime-local"
                  id="start_at"
                  name="start_at"
                  value={formData.start_at}
                  onChange={handleChange}
                  className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="end_at"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                End date of event
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Icon path={ICONS.arrowDown} />
                </span>
                <input
                  type="datetime-local"
                  id="end_at"
                  name="end_at"
                  value={formData.end_at}
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Image
            </label>
            <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Event preview"
                      className="mx-auto h-32 w-auto object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 transform translate-x-2 -translate-y-2"
                    >
                      <Icon path={ICONS.close} className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
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
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </>
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
              href="/admin/events"
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
