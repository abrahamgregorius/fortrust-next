"use client";
import { supabase } from '@/lib/supabaseClient';
import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Icon = ({ path, className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d={path} />
    </svg>
);

const MenuBar = ({ editor }) => {
    if (!editor) return null;

    return (
        <div className="flex flex-wrap items-center gap-2 border border-gray-300 rounded-t-lg bg-gray-50 px-2 py-1">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`px-2 py-1 rounded text-sm font-medium ${editor.isActive('bold') ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-200'}`}
                type="button"
            >
                Bold
            </button>

            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`px-2 py-1 rounded text-sm font-medium ${editor.isActive('italic') ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-200'}`}
                type="button"
            >
                Italic
            </button>

            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`px-2 py-1 rounded text-sm font-medium ${editor.isActive('strike') ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-200'}`}
                type="button"
            >
                Strike
            </button>

            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`px-2 py-1 rounded text-sm font-medium ${editor.isActive('paragraph') ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-200'}`}
                type="button"
            >
                Paragraph
            </button>

            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`px-2 py-1 rounded text-sm font-medium ${editor.isActive('heading', { level: 1 }) ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-200'}`}
                type="button"
            >
                H1
            </button>

            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`px-2 py-1 rounded text-sm font-medium ${editor.isActive('heading', { level: 2 }) ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-200'}`}
                type="button"
            >
                H2
            </button>

            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`px-2 py-1 rounded text-sm font-medium ${editor.isActive('heading', { level: 3 }) ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-200'}`}
                type="button"
            >
                H3
            </button>

            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`px-2 py-1 rounded text-sm font-medium ${editor.isActive('bulletList') ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-200'}`}
                type="button"
            >
                • List
            </button>

            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`px-2 py-1 rounded text-sm font-medium ${editor.isActive('orderedList') ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-200'}`}
                type="button"
            >
                1. List
            </button>

            <button
                onClick={() => editor.chain().focus().undo().run()}
                className="px-2 py-1 rounded text-sm text-gray-700 hover:bg-gray-200"
                type="button"
            >
                Undo
            </button>

            <button
                onClick={() => editor.chain().focus().redo().run()}
                className="px-2 py-1 rounded text-sm text-gray-700 hover:bg-gray-200"
                type="button"
            >
                Redo
            </button>
        </div>
    );
};


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
    else console.log('Uploaded:', data);
};

export default function CreateBlogPage() {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        category: '',
        content: '',
        youtube_url: '',
    });
    const [images, setImages] = useState([]);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [StarterKit],
        content: formData.content,
        onUpdate: ({ editor }) => {
            setFormData(prev => ({ ...prev, content: editor.getHTML() }));
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
            },
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setImages(prev => [...prev, ...newFiles]);
        }
    };

    const handleRemoveImage = (indexToRemove) => {
        setImages(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus({ message: 'Submitting post...', type: 'info' });

        try {
            const uploadedImageUrls = await Promise.all(
                images.map(async (file) => {
                    const filePath = `blogs/${Date.now()}-${file.name}`;
                    await uploadFile(file, filePath);
                    const { data: publicUrlData } = supabase
                        .storage
                        .from('public-assets')
                        .getPublicUrl(filePath);
                    return publicUrlData.publicUrl;
                })
            );

            const blogPost = {
                ...formData,
                image_urls: uploadedImageUrls,
                created_at: new Date().toISOString(),
            };

            const { data, error: insertError } = await supabase
                .from('blogs')
                .insert([blogPost])
                .select();

            if (insertError) throw insertError;

            console.log('✅ Blog post submitted:', data);
            setSubmissionStatus({ message: 'Blog post submitted successfully!', type: 'success' });

            setTimeout(() => {
                setFormData({ title: '', author: '', category: '', content: '', youtube_url: '' });
                setImages([]);
                setSubmissionStatus(null);
                editor?.commands.setContent('');
            }, 3000);
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
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <Icon path={ICONS.category} />
                                </span>
                                <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g., Tech, Health" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your blog post title" />
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                        <div className="border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 min-h-[200px]">
                            <MenuBar editor={editor} />
                            <EditorContent 
                                editor={editor} 
                                className="max-w-none p-3 min-h-[200px] [&_.ProseMirror]:outline-none [&_.ProseMirror]:border-none [&_.ProseMirror]:shadow-none [&_.ProseMirror]:ring-0 [&_.ProseMirror]:focus:outline-none [&_.ProseMirror]:focus:ring-0 [&_.ProseMirror]:focus:border-none [&_.ProseMirror_p]:margin-0 [&_.ProseMirror_h1]:margin-top-0 [&_.ProseMirror_h2]:margin-top-0 [&_.ProseMirror_h3]:margin-top-0" 
                            />
                        </div>
                    </div>

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
                        {images.length > 0 && (
                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {images.map((file, index) => (
                                    <div key={index} className="relative group">
                                        <img src={URL.createObjectURL(file)} alt={`preview ${index}`} className="h-24 w-full object-cover rounded-md" />
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveImage(index)}
                                            className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                                        >
                                            <Icon path={ICONS.close} className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
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
