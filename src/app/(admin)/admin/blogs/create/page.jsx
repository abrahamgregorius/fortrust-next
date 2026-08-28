"use client";
import { supabase } from '@/lib/supabaseClient';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RichTextEditor from '@/components/admin/RichTextEditor';

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
    category: "M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.86L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5S15.01 22 17.5 22s4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM6.5 13C4.01 13 2 15.01 2 17.5S4.01 22 6.5 22s4.5-2.01 4.5-4.5S8.99 13 6.5 13zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
};

const uploadFile = async (file, filePath) => {
    const { data, error } = await supabase.storage.from('public-assets').upload(filePath, file);
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

export default function CreateBlogPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        designation: '',
        category_id: '',
        tag: [],
        content: '',
        youtube_url: '',
        slug: '',
    });
    const [tagsInput, setTagsInput] = useState('');
    const [categories, setCategories] = useState([]);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            const { data, error } = await supabase.from('categories').select('id, name').order('name');
            if (error) console.error('❌ Error fetching categories:', error);
            else setCategories(data || []);
        };
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const updated = { ...prev, [name]: value };
            if (name === 'title') {
                updated.slug = slugify(value);
            }
            return updated;
        });
    };

    const handleImageUpload = async (file) => {
        const slug = formData.slug || `temp-${Date.now()}`;
        const ext = file.name.split('.').pop();
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        const filePath = `blogs/${slug}/${Date.now()}-${safeName}`;
        const { data: publicUrlData } = supabase.storage.from('public-assets').getPublicUrl(filePath);
        await uploadFile(file, filePath);
        return publicUrlData.publicUrl;
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setImages(prev => [...prev, ...newFiles]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus({ message: 'Submitting post...', type: 'info' });

        try {
            const blogPost = {
                ...formData,
                created_at: new Date().toISOString(),
            };

            const { data, error: insertError } = await supabase
                .from('blogs')
                .insert([blogPost])
                .select();

            if (insertError) throw insertError;

            setSubmissionStatus({ message: 'Blog post submitted successfully!', type: 'success' });

            setTimeout(() => {
                router.push('/admin/blogs');
            }, 1500);
        } catch (err) {
            console.error('❌ Error submitting post:', err);
            setSubmissionStatus({ message: `Error: ${err.message}`, type: 'error' });
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <a href="/admin/blogs" className="flex items-center text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
                        <Icon path={ICONS.back} className="w-6 h-6 mr-2" />
                        Back to Blog List
                    </a>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-md space-y-6">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Create New Blog Post</h1>
                        <p className="mt-1 text-sm text-gray-500">Fill out the details below to publish a new article.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <Icon path={ICONS.user} />
                                </span>
                                <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} required className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g., John Doe" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                            <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g., Senior Developer" />
                        </div>

                        <div>
                            <label htmlFor="category_id" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <Icon path={ICONS.category} />
                                </span>
                                <select id="category_id" name="category_id" value={formData.category_id} onChange={handleChange} className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <option value="">Select a category</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">Tags <span className="text-gray-400 font-normal">(SEO)</span></label>
                            <input
                                type="text"
                                id="tags"
                                name="tag"
                                value={tagsInput}
                                onChange={(e) => {
                                    setTagsInput(e.target.value);
                                    const tags = e.target.value.split(',').map(t => t.trim()).filter(t => t);
                                    setFormData(prev => ({ ...prev, tag: tags }));
                                }}
                                className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="study abroad, scholarship, usa (comma-separated)"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your blog post title" />
                    </div>

                    <div>
                        <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                        <input type="text" id="slug" name="slug" value={formData.slug} onChange={handleChange} className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="auto-generated-from-title" />
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                        <RichTextEditor
                            content={formData.content}
                            onChange={(html) => setFormData(prev => ({ ...prev, content: html }))}
                            onImageUpload={handleImageUpload}
                            placeholder="Start writing your blog post..."
                        />
                    </div>

                    <div>
                        <label htmlFor="youtube_url" className="block text-sm font-medium text-gray-700 mb-1">YouTube URL</label>
                        <input type="text" id="youtube_url" name="youtube_url" value={formData.youtube_url} onChange={handleChange} className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your YouTube video URL" />
                    </div>

                    {submissionStatus && (
                        <div className={`p-4 rounded-md text-sm ${submissionStatus.type === 'success'
                            ? 'bg-green-100 text-green-800'
                            : submissionStatus.type === 'error'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                            {submissionStatus.message}
                        </div>
                    )}

                    <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                        <a href="/blog" className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors">Cancel</a>
                        <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">Save Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
