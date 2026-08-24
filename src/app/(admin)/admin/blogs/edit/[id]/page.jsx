"use client";
import { supabase } from "@/lib/supabaseClient";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/admin/RichTextEditor";

const Icon = ({ path, className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d={path} />
    </svg>
);

const ICONS = {
    back: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
    upload: "M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z",
    close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
    user: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    category: "M12 2l-5.5 9h11L12 2z",
};

// FILE UPLOAD
const uploadFile = async (file, filePath) => {
    const { data, error } = await supabase.storage.from("public-assets").upload(filePath, file);
    if (error) console.error(error);
};

const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        || `temp-${Date.now()}`;
};

// MAIN COMPONENT
export default function EditBlogPage({ params }) {
    const router = useRouter();
    const unwrappedParams = React.use(params);
    const { id } = unwrappedParams;
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        designation: "",
        category_id: "",
        content: "",
        youtube_url: "",
        slug: "",
    });
    const [categories, setCategories] = useState([]);
    const [images, setImages] = useState([]);
    const [existingImages, setExistingImages] = useState([]);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    // FETCH EXISTING BLOG DATA
    useEffect(() => {
        const fetchData = async () => {
            const [{ data: blogData, error: blogError }, { data: catData, error: catError }] = await Promise.all([
                supabase.from("blogs").select("*").eq("id", id).single(),
                supabase.from("categories").select("id, name").order("name"),
            ]);
            if (blogError) {
                console.error("❌ Error fetching blog post:", blogError);
            } else {
                const slugFromTitle = slugify(blogData.title || '');
                setFormData({
                    title: blogData.title,
                    author: blogData.author,
                    designation: blogData.designation || "",
                    category_id: blogData.category_id || "",
                    content: blogData.content,
                    youtube_url: blogData.youtube_url || "",
                    slug: blogData.slug || slugFromTitle,
                });
                setExistingImages(blogData.image_urls || []);
            }
            if (catError) {
                console.error("❌ Error fetching categories:", catError);
            } else {
                setCategories(catData || []);
            }
        };
        fetchData();
    }, [id]);

    // HANDLE INPUT CHANGE
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            const updated = { ...prev, [name]: value };
            if (name === 'title') {
                updated.slug = slugify(value);
            }
            return updated;
        });
    };

    const handleImageUpload = async (file) => {
        const slug = formData.slug || `temp-${Date.now()}`;
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        const filePath = `blogs/${slug}/${Date.now()}-${safeName}`;
        const { data: publicUrlData } = supabase.storage.from('public-assets').getPublicUrl(filePath);
        await uploadFile(file, filePath);
        return publicUrlData.publicUrl;
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setImages((prev) => [...prev, ...newFiles]);
        }
    };

    const handleRemoveImage = (indexToRemove) => {
        setImages((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    const handleRemoveExistingImage = (indexToRemove) => {
        setExistingImages((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    // HANDLE SUBMIT (UPDATE EXISTING POST)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus({ message: "Updating post...", type: "info" });

        try {
            // Only upload new images, preserve existing ones
            const uploadedImageUrls = await Promise.all(
                images.map(async (file) => {
                    const filePath = `blogs/${Date.now()}-${file.name}`;
                    await uploadFile(file, filePath);
                    const { data: publicUrlData } = supabase.storage.from("public-assets").getPublicUrl(filePath);
                    return publicUrlData.publicUrl;
                })
            );

            // Combine existing images with newly uploaded ones
            const allImageUrls = [...existingImages, ...uploadedImageUrls];

            const updatedBlog = {
                ...formData,
                image_urls: allImageUrls,
                slug: formData.slug,
                updated_at: new Date().toISOString(),
            };

            const { data, error: updateError } = await supabase
                .from("blogs")
                .update(updatedBlog)
                .eq("id", id)
                .select();

            if (updateError) throw updateError;

            setSubmissionStatus({ message: "Blog post updated successfully!", type: "success" });

            setTimeout(() => {
                router.push('/admin/blogs');
            }, 1500);
        } catch (err) {
            console.error("❌ Error updating post:", err);
            setSubmissionStatus({ message: `Error: ${err.message}`, type: "error" });
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <a href="/admin/blogs" className="flex items-center text-sm font-medium text-gray-600 hover:text-indigo-600">
                        <Icon path={ICONS.back} className="w-6 h-6 mr-2" />
                        Back to Blog List
                    </a>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-md space-y-6">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Edit Blog Post</h1>
                        <p className="mt-1 text-sm text-gray-500">Update your existing article below.</p>
                    </div>

                    {/* AUTHOR & CATEGORY */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <Icon path={ICONS.user} />
                                </span>
                                <input
                                    type="text"
                                    id="author"
                                    name="author"
                                    value={formData.author}
                                    onChange={handleChange}
                                    required
                                    className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                            <input
                                type="text"
                                id="designation"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="e.g., Senior Developer"
                            />
                        </div>

                        <div>
                            <label htmlFor="category_id" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <Icon path={ICONS.category} />
                                </span>
                                <select
                                    id="category_id"
                                    name="category_id"
                                    value={formData.category_id}
                                    onChange={handleChange}
                                    className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="">Select a category</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* TITLE */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* CONTENT */}
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                        <RichTextEditor
                            content={formData.content}
                            onChange={(html) => setFormData(prev => ({ ...prev, content: html }))}
                            onImageUpload={handleImageUpload}
                            placeholder="Start writing your blog post..."
                        />
                    </div>

                    {/* IMAGE UPLOAD */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Images</label>
                        <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <Icon path={ICONS.upload} className="mx-auto h-12 w-12 text-gray-400" />
                                <div className="flex justify-center items-center text-sm text-gray-600">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                                        <span>Upload files</span>
                                        <input id="file-upload" name="file-upload" type="file" multiple onChange={handleFileChange} className="sr-only" accept="image/*" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>

                        {/* EXISTING IMAGES */}
                        {existingImages.length > 0 && (
                            <div className="mt-4">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Existing Images</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {existingImages.map((imageUrl, index) => (
                                        <div key={`existing-${index}`} className="relative group">
                                            <img src={imageUrl} alt={`existing ${index}`} className="h-24 w-full object-cover rounded-md" />
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveExistingImage(index)}
                                                className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <Icon path={ICONS.close} className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* NEW IMAGES */}
                        {images.length > 0 && (
                            <div className="mt-4">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">New Images</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {images.map((file, index) => (
                                        <div key={`new-${index}`} className="relative group">
                                            <img src={URL.createObjectURL(file)} alt={`preview ${index}`} className="h-24 w-full object-cover rounded-md" />
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveImage(index)}
                                                className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <Icon path={ICONS.close} className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* YOUTUBE URL */}
                    <div>
                        <label htmlFor="youtube_url" className="block text-sm font-medium text-gray-700 mb-1">YouTube URL</label>
                        <input
                            type="text"
                            id="youtube_url"
                            name="youtube_url"
                            value={formData.youtube_url}
                            onChange={handleChange}
                            className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your YouTube video URL"
                        />
                    </div>

                    {/* STATUS */}
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

                    {/* ACTION BUTTONS */}
                    <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                        <a href="/admin/blogs" className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100">
                            Cancel
                        </a>
                        <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
