"use client"

import { supabase } from '@/lib/supabaseClient';
import { redirect, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Helper component for SVG icons
const Icon = ({ path, className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d={path} />
    </svg>
);

// Icon paths
const ICONS = {
    dashboard: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
    users: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    products: "M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z",
    orders: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z",
    settings: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",
    logout: "M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",
    search: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    notification: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
    menu: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
    close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
    revenue: "M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 3h2.21l3.58 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20.21 4H5.21l-.94-2H1v2z",
    arrowUp: "M7 14l5-5 5 5z",
    arrowDown: "M7 10l5 5 5 5z",
    plus: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    view: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
    edit: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
    delete: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
};

// Sidebar component
const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const pathname = usePathname()

    const menuItems = [
        { href: "/admin", icon: ICONS.dashboard, name: 'Dashboard' },
        { href: "/admin/blogs", icon: ICONS.orders, name: 'Blog' },
        { href: "/admin/testimonials", icon: ICONS.users, name: 'Testimonials' },
        { href: "/admin/settings", icon: ICONS.settings, name: 'Settings' },
    ];

    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`admin-sidebar-overlay fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
                onClick={toggleSidebar}
            ></div>

            <aside className={`admin-sidebar fixed top-0 left-0 h-full bg-gray-800 text-gray-100 w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 flex flex-col`}>
                <div className="admin-sidebar-header p-4 flex items-center justify-between border-b border-gray-700">
                    <h1 className="text-2xl font-bold text-white">Fortrust Admin</h1>
                    <button onClick={toggleSidebar} className="lg:hidden text-gray-300 hover:text-white">
                        <Icon path={ICONS.close} />
                    </button>
                </div>
                <nav className="admin-sidebar-nav mt-6 flex-grow">
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index} className="px-4 py-2">
                                <a href={item.href || "#"} className={`flex items-center p-2 rounded-lg transition-colors ${item.href === pathname ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
                                    <Icon path={item.icon} className="w-5 h-5 mr-3" />
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="admin-sidebar-footer p-4 border-t border-gray-700">
                    <a href="#" className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white">
                        <Icon path={ICONS.logout} className="w-5 h-5 mr-3" />
                        <span>Logout</span>
                    </a>
                </div>
            </aside>
        </>
    );
};

// Header component
const Header = ({ toggleSidebar }) => {
    return (
        <header className="admin-header bg-white shadow-sm rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="text-gray-600 mr-4 lg:hidden">
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


export default function App() {
    const [blogs, setBlogs] = useState([]);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    const fetchBlogs = async () => {
        const { data, error } = await supabase.from("blogs").select("*");
        if (error) {
            console.error("Error fetching blogs:", error);
        } else {
            setBlogs(data || []);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const handleView = (id) => {
        redirect(`/blog/${id}`)
    }

    const handleDelete = async (id) => {
        try {
            const { data, error } = await supabase.from("blogs").delete().eq("id", id);
            if (error) {
                console.error("Error fetching blogs:", error);
            } else {
                fetchBlogs()
            }

        } catch (error) {
            console.error(error)
        }
    }

    const handleEdit = (id) => {
        redirect(`/admin/blogs/edit/${id}`)
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div className="admin-dashboard-container bg-gray-100 font-sans min-h-screen">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="admin-main-content lg:ml-64 p-4 md:p-6 transition-all duration-300 ease-in-out">
                <div className="">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Blogs</h2>

                    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
                        <div className="max-w-7xl mx-auto">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Blog Posts</h1>
                                    <p className="mt-1 text-sm text-gray-500">Manage, edit, and create new articles.</p>
                                </div>
                                <a
                                    href="/admin/blogs/create"
                                    className="mt-4 sm:mt-0 flex items-center justify-center bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
                                >
                                    <Icon path={ICONS.plus} className="w-5 h-5 mr-2" />
                                    Create New Post
                                </a>
                            </div>

                            {/* Blog Table Card */}
                            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 min-w-[250px]">Title</th>
                                                <th scope="col" className="px-6 py-3">Author</th>
                                                <th scope="col" className="px-6 py-3">Category</th>
                                                <th scope="col" className="px-6 py-3">Date Created</th>
                                                <th scope="col" className="px-6 py-3 text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {blogs.map((blog) => (
                                                <tr key={blog.id} className="bg-white hover:bg-gray-50 transition-colors duration-200">
                                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{blog.title}</td>
                                                    <td className="px-6 py-4">{blog.author}</td>
                                                    <td className="px-6 py-4">
                                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">{blog.category}</span>
                                                    </td>
                                                    <td className="px-6 py-4">{formatDate(blog.created_at)}</td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center justify-center space-x-3">
                                                            <button onClick={() => handleView(blog.id)} className="text-gray-500 hover:text-blue-600" title="View">
                                                                <Icon path={ICONS.view} />
                                                            </button>
                                                            <button onClick={() => handleEdit(blog.id)} className="text-gray-500 hover:text-green-600" title="Edit">
                                                                <Icon path={ICONS.edit} />
                                                            </button>
                                                            <button onClick={() => handleDelete(blog.id)} className="text-gray-500 hover:text-red-600" title="Delete">
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
            </main>
        </div>
    );
}
