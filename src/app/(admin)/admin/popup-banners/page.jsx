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
    x: "M6 6l12 12M6 18L18 6",
    plus: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    view: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
    edit: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
    delete:
        "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
    banner:
        "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 7h14v2H5V7zm0 4h14v2H5v-2zm0 4h14v2H5v-2z",
    close:
        "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
};

export default function PopupBanners() {
    const [popupBanners, setPopupBanners] = useState([]);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedPopupBanner, setSelectedPopupBanner] = useState(null);
    const [editFormData, setEditFormData] = useState({
        title: "",
        image_url: "",
        link_url: "",
        mobile_image_url: "",
        event_id: "",
        display_order: 0,
        is_active: true,
    });
    const [editStatus, setEditStatus] = useState(null);
    const [events, setEvents] = useState([]);
    const [editImageFile, setEditImageFile] = useState(null);
    const [editImagePreview, setEditImagePreview] = useState(null);
    const [editMobileImageFile, setEditMobileImageFile] = useState(null);
    const [editMobileImagePreview, setEditMobileImagePreview] = useState(null);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

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

    const fetchPopupBanners = async () => {
        const { data, error } = await supabase
            .from("popup_banners")
            .select(
                `
        *,
        events (
          id,
          name
        )
      `
            )
            .order("display_order", "asc");
        if (error) {
            console.error("Error fetching popup banners:", error);
        } else {
            setPopupBanners(data || []);
        }
    };

    const fetchEvents = async () => {
        const { data, error } = await supabase
            .from("events")
            .select("id, name")
            .order("name");
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

    const handleView = (popupBanner) => {
        setSelectedPopupBanner(popupBanner);
        setIsViewModalOpen(true);
    };

    const handleDelete = async (id) => {
        try {
            const { data, error } = await supabase
                .from("popup_banners")
                .delete()
                .eq("id", id);
            if (error) {
                console.error("Error deleting popup banner:", error);
            } else {
                fetchPopupBanners();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (popupBanner) => {
        setSelectedPopupBanner(popupBanner);
        setEditFormData({
            title: popupBanner.title,
            image_url: popupBanner.image_url,
            link_url: popupBanner.link_url || "",
            mobile_image_url: popupBanner.mobile_image_url || "",
            event_id: popupBanner.event_id || "",
            display_order: popupBanner.display_order || 0,
            is_active: popupBanner.is_active !== undefined ? popupBanner.is_active : true,
        });
        setEditImageFile(null);
        setEditImagePreview(null);
        setEditMobileImageFile(null);
        setEditMobileImagePreview(null);
        setIsEditModalOpen(true);
    };

    const handleEditFormChange = (e) => {
        const { name, value, type } = e.target;
        setEditFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? e.target.checked : value,
        }));
    };

    const handleEditFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setEditImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEditMobileFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setEditMobileImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditMobileImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveEditImage = () => {
        setEditImageFile(null);
        setEditImagePreview(null);
    };

    const handleRemoveEditMobileImage = () => {
        setEditMobileImageFile(null);
        setEditMobileImagePreview(null);
    };

    const deleteOldImage = async (imageUrl) => {
        if (!imageUrl) return;

        try {
            // Extract file path from URL
            const urlParts = imageUrl.split("/");
            const fileName = urlParts[urlParts.length - 1];
            const filePath = `popup/${fileName}`;

            const { error } = await supabase.storage
                .from("public-assets")
                .remove([filePath]);

            if (error) {
                console.error("Error deleting old image:", error);
            } else {
                console.log("Old image deleted successfully");
            }
        } catch (error) {
            console.error("Error deleting old image:", error);
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setEditStatus({ message: "Updating popup banner...", type: "info" });

        try {
            let imageUrl = editFormData.image_url;
            let mobileImageUrl = editFormData.mobile_image_url;

            // If new desktop image is uploaded, delete old image and upload new one
            if (editImageFile) {
                // Delete old image if exists
                if (editFormData.image_url) {
                    await deleteOldImage(editFormData.image_url);
                }

                // Upload new image
                const filePath = `popup/${Date.now()}-${editImageFile.name}`;
                await uploadFile(editImageFile, filePath);
                const { data: publicUrlData } = supabase.storage
                    .from("public-assets")
                    .getPublicUrl(filePath);
                imageUrl = publicUrlData.publicUrl;
            }

            // If new mobile image is uploaded, delete old image and upload new one
            if (editMobileImageFile) {
                // Delete old mobile image if exists
                if (editFormData.mobile_image_url) {
                    await deleteOldImage(editFormData.mobile_image_url);
                }

                // Upload new mobile image
                const filePath = `popup/mobile-${Date.now()}-${editMobileImageFile.name}`;
                await uploadFile(editMobileImageFile, filePath);
                const { data: publicUrlData } = supabase.storage
                    .from("public-assets")
                    .getPublicUrl(filePath);
                mobileImageUrl = publicUrlData.publicUrl;
            }

            const { data, error } = await supabase
                .from("popup_banners")
                .update({
                    title: editFormData.title,
                    image_url: imageUrl,
                    link_url: editFormData.link_url || null,
                    mobile_image_url: mobileImageUrl,
                    event_id: editFormData.event_id || null,
                    display_order: editFormData.display_order,
                    is_active: editFormData.is_active,
                    updated_at: new Date().toISOString(),
                })
                .eq("id", selectedPopupBanner.id)
                .select();

            if (error) throw error;

            console.log("✅ Popup banner updated:", data);
            setEditStatus({
                message: "Popup banner updated successfully!",
                type: "success",
            });
            fetchPopupBanners();

            setTimeout(() => {
                setIsEditModalOpen(false);
                setSelectedPopupBanner(null);
                setEditImageFile(null);
                setEditImagePreview(null);
                setEditMobileImageFile(null);
                setEditMobileImagePreview(null);
                setEditStatus(null);
            }, 2000);
        } catch (err) {
            console.error("❌ Error updating popup banner:", err);
            setEditStatus({ message: `Error: ${err.message}`, type: "error" });
        }
    };

    useEffect(() => {
        fetchPopupBanners();
        fetchEvents();
    }, []);

    return (
        <div className="admin-dashboard-container bg-gray-100 font-sans min-h-screen">
            <AdminSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="admin-main-content lg:ml-64 p-4 md:p-6 transition-all duration-300 ease-in-out">
                <div className="">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Popup Banners</h2>

                    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
                        <div className="max-w-7xl mx-auto">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                                        Popup Banners
                                    </h1>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Manage, edit, and create new popup banners.
                                    </p>
                                </div>
                                <a
                                    href="/admin/popup-banners/create"
                                    className="mt-4 sm:mt-0 flex items-center justify-center bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
                                >
                                    <Icon path={ICONS.plus} className="w-5 h-5 mr-2" />
                                    Create New Popup Banner
                                </a>
                            </div>

                            {/* Popup Banners Table Card */}
                            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 min-w-[200px]">
                                                    Title
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Image
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Event
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Order
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Status
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {popupBanners.map((popupBanner) => (
                                                <tr
                                                    key={popupBanner.id}
                                                    className="bg-white hover:bg-gray-50 transition-colors duration-200"
                                                >
                                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        {popupBanner.title}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {popupBanner.image_url && (
                                                            <img
                                                                src={popupBanner.image_url}
                                                                alt={popupBanner.title}
                                                                className="h-16 w-24 object-cover rounded-md"
                                                            />
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {popupBanner.events?.name || "-"}
                                                    </td>
                                                    <td className="px-6 py-4">{popupBanner.display_order}</td>
                                                    <td className="px-6 py-4">
                                                        <span
                                                            className={`px-2 py-1 text-xs font-medium rounded-full ${popupBanner.is_active
                                                                    ? "bg-green-100 text-green-800"
                                                                    : "bg-gray-100 text-gray-800"
                                                                }`}
                                                        >
                                                            {popupBanner.is_active ? "Active" : "Inactive"}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center justify-center space-x-3">
                                                            <button
                                                                onClick={() => handleView(popupBanner)}
                                                                className="text-gray-500 hover:text-blue-600"
                                                                title="View"
                                                            >
                                                                <Icon path={ICONS.view} />
                                                            </button>
                                                            <button
                                                                onClick={() => handleEdit(popupBanner)}
                                                                className="text-gray-500 hover:text-green-600"
                                                                title="Edit"
                                                            >
                                                                <Icon path={ICONS.edit} />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(popupBanner.id)}
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
                                        Edit Popup Banner
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
                                            htmlFor="edit_title"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            id="edit_title"
                                            name="title"
                                            value={editFormData.title}
                                            onChange={handleEditFormChange}
                                            required
                                            className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Popup Banner Image (Desktop: 1920x1080, 16:9 ratio, {'>'}100 DPI)
                                        </label>

                                        {/* Current Image Display */}
                                        {editFormData.image_url && !editImagePreview && (
                                            <div className="mt-2 mb-4">
                                                <div className="relative group">
                                                    <img
                                                        src={editFormData.image_url}
                                                        alt="Current popup banner image"
                                                        className="h-48 w-full object-contain bg-gray-100 rounded-md"
                                                    />
                                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
                                                        <p className="text-white text-sm">Current Image</p>
                                                    </div>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-600">
                                                    Current popup banner image
                                                </p>
                                            </div>
                                        )}

                                        {/* New Image Preview */}
                                        {editImagePreview && (
                                            <div className="mt-2 mb-4">
                                                <div className="relative group">
                                                    <img
                                                        src={editImagePreview}
                                                        alt="New popup banner preview"
                                                        className="h-48 w-full object-contain bg-gray-100 rounded-md"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={handleRemoveEditImage}
                                                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <Icon path={ICONS.close} className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-600">
                                                    New image preview (will replace current image)
                                                </p>
                                            </div>
                                        )}

                                        {/* Upload New Image */}
                                        <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                                <Icon
                                                    path={ICONS.upload}
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                />
                                                <div className="flex justify-center items-center text-sm text-gray-600">
                                                    <label
                                                        htmlFor="edit-file-upload"
                                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        <span>Upload new image</span>
                                                        <input
                                                            id="edit-file-upload"
                                                            name="edit-file-upload"
                                                            type="file"
                                                            onChange={handleEditFileChange}
                                                            className="sr-only"
                                                            accept="image/*"
                                                        />
                                                    </label>
                                                    <p className="pl-1">to replace current</p>
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    PNG, JPG, GIF up to 10MB
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="edit_link_url"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Link URL (Desktop)
                                        </label>
                                        <input
                                            type="url"
                                            id="edit_link_url"
                                            name="link_url"
                                            value={editFormData.link_url}
                                            onChange={handleEditFormChange}
                                            className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="https://"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Mobile Popup Banner Image (Mobile: 584x869, ~2:3 ratio, {'>'}100 DPI)
                                        </label>

                                        {/* Current Mobile Image Display */}
                                        {editFormData.mobile_image_url && !editMobileImagePreview && (
                                            <div className="mt-2 mb-4">
                                                <div className="relative group">
                                                    <img
                                                        src={editFormData.mobile_image_url}
                                                        alt="Current mobile popup banner image"
                                                        className="h-48 w-full object-contain bg-gray-100 rounded-md"
                                                    />
                                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
                                                        <p className="text-white text-sm">Current Mobile Image</p>
                                                    </div>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-600">
                                                    Current mobile popup banner image
                                                </p>
                                            </div>
                                        )}

                                        {/* New Mobile Image Preview */}
                                        {editMobileImagePreview && (
                                            <div className="mt-2 mb-4">
                                                <div className="relative group">
                                                    <img
                                                        src={editMobileImagePreview}
                                                        alt="New mobile popup banner preview"
                                                        className="h-48 w-full object-contain bg-gray-100 rounded-md"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={handleRemoveEditMobileImage}
                                                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <Icon path={ICONS.close} className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-600">
                                                    New mobile image preview (will replace current mobile image)
                                                </p>
                                            </div>
                                        )}

                                        {/* Upload New Mobile Image */}
                                        <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                                <Icon
                                                    path={ICONS.upload}
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                />
                                                <div className="flex justify-center items-center text-sm text-gray-600">
                                                    <label
                                                        htmlFor="edit-mobile-file-upload"
                                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        <span>Upload mobile image</span>
                                                        <input
                                                            id="edit-mobile-file-upload"
                                                            name="edit-mobile-file-upload"
                                                            type="file"
                                                            onChange={handleEditMobileFileChange}
                                                            className="sr-only"
                                                            accept="image/*"
                                                        />
                                                    </label>
                                                    <p className="pl-1">to replace current</p>
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    PNG, JPG, GIF up to 10MB
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                htmlFor="edit_event_id"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Event
                                            </label>
                                            <select
                                                id="edit_event_id"
                                                name="event_id"
                                                value={editFormData.event_id}
                                                onChange={handleEditFormChange}
                                                className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            >
                                                <option value="">Select Event</option>
                                                {events.map((event) => (
                                                    <option key={event.id} value={event.id}>
                                                        {event.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="edit_display_order"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Display Order
                                            </label>
                                            <input
                                                type="number"
                                                id="edit_display_order"
                                                name="display_order"
                                                value={editFormData.display_order}
                                                onChange={handleEditFormChange}
                                                className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="edit_is_active"
                                            name="is_active"
                                            checked={editFormData.is_active}
                                            onChange={handleEditFormChange}
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label
                                            htmlFor="edit_is_active"
                                            className="ml-2 block text-sm text-gray-700"
                                        >
                                            Active
                                        </label>
                                    </div>

                                    {editStatus && (
                                        <div
                                            className={`p-4 rounded-md text-sm ${editStatus.type === "success"
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
                                            Update Popup Banner
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {/* View Modal */}
                {isViewModalOpen && selectedPopupBanner && (
                    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold text-gray-800">
                                        Popup Banner Details
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
                                            {selectedPopupBanner.title}
                                        </h3>
                                        <div className="mt-2">
                                            <span
                                                className={`px-2 py-1 text-xs font-medium rounded-full ${selectedPopupBanner.is_active
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-gray-100 text-gray-800"
                                                    }`}
                                            >
                                                {selectedPopupBanner.is_active ? "Active" : "Inactive"}
                                            </span>
                                        </div>
                                    </div>

                                    {selectedPopupBanner.image_url && (
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-2">
                                                Desktop Popup Banner Image:
                                            </h4>
                                            <img
                                                src={selectedPopupBanner.image_url}
                                                alt={selectedPopupBanner.title}
                                                className="w-full h-48 object-contain bg-gray-100 rounded-lg"
                                            />
                                        </div>
                                    )}

                                    {selectedPopupBanner.mobile_image_url && (
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-2">
                                                Mobile Popup Banner Image:
                                            </h4>
                                            <img
                                                src={selectedPopupBanner.mobile_image_url}
                                                alt={`${selectedPopupBanner.title} mobile`}
                                                className="w-full h-48 object-contain bg-gray-100 rounded-lg"
                                            />
                                        </div>
                                    )}

                                    {selectedPopupBanner.link_url && (
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-1">
                                                Link URL:
                                            </h4>
                                            <a
                                                href={selectedPopupBanner.link_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-indigo-600 hover:text-indigo-800 underline"
                                            >
                                                {selectedPopupBanner.link_url}
                                            </a>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-1">
                                                Event:
                                            </h4>
                                            <p className="text-gray-800">
                                                {selectedPopupBanner.events?.name || "No event linked"}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-1">
                                                Display Order:
                                            </h4>
                                            <p className="text-gray-800">
                                                {selectedPopupBanner.display_order}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-1">
                                                Start Date:
                                            </h4>
                                            <p className="text-gray-800">
                                                {selectedPopupBanner.start_date ? formatDate(selectedPopupBanner.start_date) : "Not set"}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-1">
                                                End Date:
                                            </h4>
                                            <p className="text-gray-800">
                                                {selectedPopupBanner.end_date ? formatDate(selectedPopupBanner.end_date) : "Not set"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-sm text-gray-500">
                                        <p>Created: {formatDate(selectedPopupBanner.created_at)}</p>
                                        <p>Updated: {formatDate(selectedPopupBanner.updated_at)}</p>
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