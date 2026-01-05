"use client"

import React, { useState, useEffect } from 'react';
import AdminSidebar from "@/components/admin/AdminSidebar";
import { supabase } from "@/lib/supabaseClient";
import "../admin.css"
import Link from 'next/link';

// Helper component for SVG icons
const Icon = ({ path, className = "w-6 h-6" }) => (
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
    banner:
        "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 7h14v2H5V7zm0 4h14v2H5v-2zm0 4h14v2H5v-2z",

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
                <div className="flex items-center">
                    <img
                        src="https://placehold.co/40x40/6366f1/ffffff?text=A"
                        alt="Admin Avatar"
                        className="w-10 h-10 rounded-full border-2 border-indigo-200"
                    />
                    <div className="hidden md:block ml-3">
                        <p className="font-semibold text-sm text-gray-800">Fortrust</p>
                        <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

// Stat Card component
const StatCard = ({ icon, title, value, change, changeType, iconBgColor }) => {
    const isPositive = changeType === 'positive';
    return (
        <div className="admin-stat-card bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
            <div className={`rounded-full p-3 ${iconBgColor}`}>
                <Icon path={icon} className="w-6 h-6 text-white" />
            </div>
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
                <div className="flex items-center text-xs mt-1">
                    <Icon path={isPositive ? ICONS.arrowUp : ICONS.arrowDown} className={`w-4 h-4 mr-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`} />
                    <span className={`${isPositive ? 'text-green-500' : 'text-red-500'} font-semibold`}>{change}</span>
                    <span className="text-gray-400 ml-1">vs last month</span>
                </div>
            </div>
        </div>
    );
};

const RecentBlogsTable = ({ recentBlogs }) => {
    if (!recentBlogs || recentBlogs.length === 0) {
        return (
            <div className="admin-table-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-700 mb-4">Recent Blogs</h3>
                <p>Loading or no blogs available.</p>
            </div>
        );
    }
    return (
        <div className="admin-table-card bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-gray-700 mb-4">Recent Blogs</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Title</th>
                            <th scope="col" className="px-6 py-3">Author</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentBlogs.map(blog => (
                            <tr key={blog.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{blog.title}</td>
                                <td className="px-6 py-4">{blog.author || 'Unknown'}</td>
                                <td className="px-6 py-4">{new Date(blog.created_at).toLocaleDateString()}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Published</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    const [stats, setStats] = useState({ blogs: 0, events: 0, testimonials: 0, banners: 0, popup_banners: 0, users: 0 });
    const [recentBlogs, setRecentBlogs] = useState([]);

    useEffect(() => {
        fetchStats();
        fetchRecentBlogs();
    }, []);

    async function fetchStats() {
        try {
            const tables = ['blogs', 'events', 'testimonials', 'banners', 'popup_banners', 'users'];
            const counts = {};
            for (const table of tables) {
                const { count, error } = await supabase.from(table).select('*', { count: 'exact', head: true });
                if (error) {
                    console.error(`Error fetching ${table} count:`, error);
                    counts[table] = 0;
                } else {
                    counts[table] = count || 0;
                }
            }
            setStats(counts);
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    }

    async function fetchRecentBlogs() {
        try {
            const { data, error } = await supabase
                .from('blogs')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(5);
            if (error) throw error;
            setRecentBlogs(data || []);
        } catch (error) {
            console.error('Error fetching recent blogs:', error);
        }
    }

    return (
        <div className="admin-dashboard-container bg-gray-100 font-sans min-h-screen">
            <AdminSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="admin-main-content lg:ml-64 p-4 md:p-6 transition-all duration-300 ease-in-out">
                <Header toggleSidebar={toggleSidebar} />

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard Overview</h2>

                    {/* Stat Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-6">
                        <StatCard
                            icon={ICONS.products}
                            title="Total Blogs"
                            value={stats.blogs}
                            change="+5%"
                            changeType="positive"
                            iconBgColor="bg-blue-500"
                        />
                        <StatCard
                            icon={ICONS.orders}
                            title="Total Events"
                            value={stats.events}
                            change="+3%"
                            changeType="positive"
                            iconBgColor="bg-green-500"
                        />
                        <StatCard
                            icon={ICONS.users}
                            title="Total Testimonials"
                            value={stats.testimonials}
                            change="+10%"
                            changeType="positive"
                            iconBgColor="bg-yellow-500"
                        />
                        <StatCard
                            icon={ICONS.banner}
                            title="Total Banners"
                            value={stats.banners}
                            change="+2%"
                            changeType="positive"
                            iconBgColor="bg-purple-500"
                        />
                        <StatCard
                            icon={ICONS.banner}
                            title="Total Popup Banners"
                            value={stats.popup_banners}
                            change="+1%"
                            changeType="positive"
                            iconBgColor="bg-pink-500"
                        />
                        <StatCard
                            icon={ICONS.users}
                            title="Total Users"
                            value={stats.users}
                            change="+7%"
                            changeType="positive"
                            iconBgColor="bg-red-500"
                        />
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            <Link href="/admin/banners/create" className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 flex items-center justify-center">
                                <Icon path={ICONS.products} className="w-6 h-6 mr-2" />
                                Add New Blog
                            </Link>
                            <Link href="/admin/events/create" className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 flex items-center justify-center">
                                <Icon path={ICONS.orders} className="w-6 h-6 mr-2" />
                                Add New Event
                            </Link>
                            <Link href="/admin/testimonials/create" className="bg-yellow-500 text-white p-4 rounded-lg hover:bg-yellow-600 flex items-center justify-center">
                                <Icon path={ICONS.users} className="w-6 h-6 mr-2" />
                                Add Testimonial
                            </Link>
                            <Link href="/admin/banners/create" className="bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 flex items-center justify-center">
                                <Icon path={ICONS.banner} className="w-6 h-6 mr-2" />
                                Add Banner
                            </Link>
                            <Link href="/admin/popup-banners/create" className="bg-pink-500 text-white p-4 rounded-lg hover:bg-pink-600 flex items-center justify-center">
                                <Icon path={ICONS.banner} className="w-6 h-6 mr-2" />
                                Add Popup Banner
                            </Link>
                        </div>
                    </div>

                    {/* Recent Blogs Table */}
                    <div className="mt-6">
                        <RecentBlogsTable recentBlogs={recentBlogs} />
                    </div>
                </div>
            </main>
        </div>
    );
}
