"use client";

import { supabase } from "@/lib/supabaseClient";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";

// Helper component for SVG icons
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
  dashboard: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
  users:
    "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  products:
    "M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z",
  orders: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z",
  settings:
    "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",
  logout:
    "M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",
  search:
    "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
  notification:
    "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
  menu: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
  close:
    "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
  revenue:
    "M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 3h2.21l3.58 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20.21 4H5.21l-.94-2H1v2z",
  arrowUp: "M7 14l5-5 5 5z",
  arrowDown: "M7 10l5 5 5 5z",
  plus: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
  view: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
  edit: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
  delete:
    "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
  x: "M6 6l12 12M6 18L18 6",
  upload: "M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z",
  banner:
    "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 7h14v2H5V7zm0 4h14v2H5v-2zm0 4h14v2H5v-2z",
  close:
    "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
};

// Header component
const Header = ({ toggleSidebar }) => {
  return (
    <header className="admin-header bg-white shadow-sm rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-gray-600 mr-4 lg:hidden"
        >
          <Icon path={ICONS.menu} />
        </button>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon path={ICONS.search} className="w-5 h-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="admin-search-input pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-600 hover:text-indigo-600">
          <Icon path={ICONS.notification} />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </button>
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40/6366f1/ffffff?text=A"
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full border-2 border-indigo-200"
          />
          <div className="hidden md:block ml-3">
            <p className="font-semibold text-sm text-gray-800">Admin User</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default function Events() {
  const [events, setEvents] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    description: "",
    start_at: "",
    end_at: "",
    location: "",
    registration_link: "",
    status: "inactive",
    speaker: "",
    topics: "",
  });
  const [editStatus, setEditStatus] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const fetchEvents = async () => {
    const { data, error } = await supabase.from("events").select("*");
    if (error) {
      console.error("Error fetching events:", error);
    } else {
      setEvents(data || []);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleView = (event) => {
    setSelectedEvent(event);
    setIsViewModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const { data, error } = await supabase
        .from("events")
        .delete()
        .eq("id", id);
      if (error) {
        console.error("Error deleting event:", error);
      } else {
        fetchEvents();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setEditFormData({
      name: event.name,
      description: event.description || "",
      start_at: event.start_at
        ? new Date(event.start_at).toISOString().slice(0, 16)
        : "",
      end_at: event.end_at
        ? new Date(event.end_at).toISOString().slice(0, 16)
        : "",
      location: event.location || "",
      registration_link: event.registration_link || "",
      status: event.status || "inactive",
      speaker: event.speaker || "",
      topics: event.topics || "",
    });
    setIsEditModalOpen(true);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditStatus({ message: "Updating event...", type: "info" });

    try {
      const { data, error } = await supabase
        .from("events")
        .update({
          name: editFormData.name,
          description: editFormData.description,
          start_at: editFormData.start_at
            ? new Date(editFormData.start_at).toISOString()
            : null,
          end_at: editFormData.end_at
            ? new Date(editFormData.end_at).toISOString()
            : null,
          location: editFormData.location,
          registration_link: editFormData.registration_link,
          status: editFormData.status,
          speaker: editFormData.speaker,
          topics: editFormData.topics,
          updated_at: new Date().toISOString(),
        })
        .eq("id", selectedEvent.id)
        .select();

      if (error) throw error;

      console.log("✅ Event updated:", data);
      setEditStatus({
        message: "Event updated successfully!",
        type: "success",
      });
      fetchEvents();

      setTimeout(() => {
        setIsEditModalOpen(false);
        setSelectedEvent(null);
        setEditStatus(null);
      }, 2000);
    } catch (err) {
      console.error("❌ Error updating event:", err);
      setEditStatus({ message: `Error: ${err.message}`, type: "error" });
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="admin-dashboard-container bg-gray-100 font-sans min-h-screen">
      <AdminSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="admin-main-content lg:ml-64 p-4 md:p-6 transition-all duration-300 ease-in-out">
        <div className="">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Events</h2>

          <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Events
                  </h1>
                  <p className="mt-1 text-sm text-gray-500">
                    Manage, edit, and create new events.
                  </p>
                </div>
                <a
                  href="/admin/events/create"
                  className="mt-4 sm:mt-0 flex items-center justify-center bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
                >
                  <Icon path={ICONS.plus} className="w-5 h-5 mr-2" />
                  Create New Event
                </a>
              </div>

              {/* Blog Table Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 min-w-[200px]">
                          Event Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Location
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Speaker
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Topics
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Start Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          End Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((event) => (
                        <tr
                          key={event.id}
                          className="bg-white hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {event.name}
                          </td>
                          <td className="px-6 py-4">
                            {event.location || "-"}
                          </td>
                          <td className="px-6 py-4">
                            {event.speaker || "-"}
                          </td>
                          <td className="px-6 py-4">
                            {event.topics || "-"}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${event.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                                }`}
                            >
                              {event.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {event.start_at ? formatDate(event.start_at) : "-"}
                          </td>
                          <td className="px-6 py-4">
                            {event.end_at ? formatDate(event.end_at) : "-"}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center space-x-3">
                              <button
                                onClick={() => handleView(event)}
                                className="text-gray-500 hover:text-blue-600"
                                title="View"
                              >
                                <Icon path={ICONS.view} />
                              </button>
                              <button
                                onClick={() => handleEdit(event)}
                                className="text-gray-500 hover:text-green-600"
                                title="Edit"
                              >
                                <Icon path={ICONS.edit} />
                              </button>
                              <button
                                onClick={() => handleDelete(event.id)}
                                className="text-gray-500 hover:text-red-600"
                                title="Delete"
                              >
                                <Icon path={ICONS.delete} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        {isEditModalOpen && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    Edit Event
                  </h2>
                  <button
                    onClick={() => setIsEditModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Icon path={ICONS.x} className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleEditSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="edit_name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Event Name
                    </label>
                    <input
                      type="text"
                      id="edit_name"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditFormChange}
                      required
                      className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="edit_description"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Description
                    </label>
                    <textarea
                      id="edit_description"
                      name="description"
                      value={editFormData.description}
                      onChange={handleEditFormChange}
                      rows="3"
                      className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="edit_location"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="edit_location"
                      name="location"
                      value={editFormData.location}
                      onChange={handleEditFormChange}
                      className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Event location"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="edit_speaker"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Speaker
                      </label>
                      <input
                        type="text"
                        id="edit_speaker"
                        name="speaker"
                        value={editFormData.speaker}
                        onChange={handleEditFormChange}
                        className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Event speaker"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="edit_topics"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Topics
                      </label>
                      <input
                        type="text"
                        id="edit_topics"
                        name="topics"
                        value={editFormData.topics}
                        onChange={handleEditFormChange}
                        className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Event topics"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="edit_start_at"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Start Date
                      </label>
                      <input
                        type="datetime-local"
                        id="edit_start_at"
                        name="start_at"
                        value={editFormData.start_at}
                        onChange={handleEditFormChange}
                        className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="edit_end_at"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        End Date
                      </label>
                      <input
                        type="datetime-local"
                        id="edit_end_at"
                        name="end_at"
                        value={editFormData.end_at}
                        onChange={handleEditFormChange}
                        className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="edit_registration_link"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Registration Link
                      </label>
                      <input
                        type="url"
                        id="edit_registration_link"
                        name="registration_link"
                        value={editFormData.registration_link}
                        onChange={handleEditFormChange}
                        className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="https://"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="edit_status"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Status
                      </label>
                      <select
                        id="edit_status"
                        name="status"
                        value={editFormData.status}
                        onChange={handleEditFormChange}
                        className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="inactive">Inactive</option>
                        <option value="active">Active</option>
                      </select>
                    </div>
                  </div>

                  {editStatus && (
                    <div
                      className={`p-4 rounded-md text-sm ${editStatus.type === "active"
                        ? "bg-green-100 text-green-800"
                        : editStatus.type === "error"
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                        }`}
                    >
                      {editStatus.message}
                    </div>
                  )}

                  <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => setIsEditModalOpen(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      Update Event
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* View Modal */}
        {isViewModalOpen && selectedEvent && (
          <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    Event Details
                  </h2>
                  <button
                    onClick={() => setIsViewModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Icon path={ICONS.x} className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {selectedEvent.name}
                    </h3>
                    <div className="mt-2">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${selectedEvent.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                          }`}
                      >
                        {selectedEvent.status}
                      </span>
                    </div>
                  </div>

                  {selectedEvent.description && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Description:
                      </h4>
                      <p className="text-gray-800 bg-gray-50 p-4 rounded-lg">
                        {selectedEvent.description}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        Start Date:
                      </h4>
                      <p className="text-gray-800">
                        {selectedEvent.start_at
                          ? formatDate(selectedEvent.start_at)
                          : "Not set"}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        End Date:
                      </h4>
                      <p className="text-gray-800">
                        {selectedEvent.end_at
                          ? formatDate(selectedEvent.end_at)
                          : "Not set"}
                      </p>
                    </div>
                  </div>

                  {selectedEvent.location && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        Location:
                      </h4>
                      <p className="text-gray-800">{selectedEvent.location}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        Speaker:
                      </h4>
                      <p className="text-gray-800">
                        {selectedEvent.speaker || "Not set"}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        Topics:
                      </h4>
                      <p className="text-gray-800">
                        {selectedEvent.topics || "Not set"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">
                      Updated:
                    </h4>
                    <p className="text-gray-800">
                      {formatDate(selectedEvent.updated_at)}
                    </p>
                  </div>

                  {selectedEvent.registration_link && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        Registration Link:
                      </h4>
                      <a
                        href={selectedEvent.registration_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 underline"
                      >
                        {selectedEvent.registration_link}
                      </a>
                    </div>
                  )}

                  <div className="text-sm text-gray-500">
                    <p>Created: {formatDate(selectedEvent.created_at)}</p>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-gray-200">
                    <button
                      onClick={() => setIsViewModalOpen(false)}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
