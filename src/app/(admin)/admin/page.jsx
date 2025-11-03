"use client"

import React, { useState } from 'react';
import "../admin.css"

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
};

// Sidebar component
const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const menuItems = [
        { href: "/admin", icon: ICONS.dashboard, name: "Dashboard" },
        { href: "/admin/blogs", icon: ICONS.orders, name: "Blog" },
        { href: "/admin/events", icon: ICONS.products, name: "Events" },
        { href: "/admin/testimonials", icon: ICONS.users, name: "Testimonials" },
        { href: "/admin/settings", icon: ICONS.settings, name: "Settings" },
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
                                <a href={item.href || "#"} className={`flex items-center p-2 rounded-lg transition-colors ${index === 0 ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
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

// Chart placeholder component
const Chart = ({ title }) => (
    <div className="admin-chart-card bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-semibold text-gray-700 mb-4">{title}</h3>
        <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-sm">[ Chart Data Here ]</p>
        </div>
    </div>
);

// Recent Orders table component
const RecentOrdersTable = () => {
    const orders = [
        { id: '#1234', product: 'Laptop Pro', customer: 'John Doe', date: 'Oct 11, 2025', status: 'Delivered', statusColor: 'bg-green-100 text-green-800' },
        { id: '#1235', product: 'Wireless Mouse', customer: 'Jane Smith', date: 'Oct 11, 2025', status: 'Pending', statusColor: 'bg-yellow-100 text-yellow-800' },
        { id: '#1236', product: 'Keyboard', customer: 'Mike Johnson', date: 'Oct 10, 2025', status: 'Shipped', statusColor: 'bg-blue-100 text-blue-800' },
        { id: '#1237', product: 'Monitor', customer: 'Emily White', date: 'Oct 9, 2025', status: 'Cancelled', statusColor: 'bg-red-100 text-red-800' },
        { id: '#1238', product: 'Webcam', customer: 'Chris Brown', date: 'Oct 9, 2025', status: 'Delivered', statusColor: 'bg-green-100 text-green-800' },
    ];
    return (
        <div className="admin-table-card bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-gray-700 mb-4">Recent Orders</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Order ID</th>
                            <th scope="col" className="px-6 py-3">Product</th>
                            <th scope="col" className="px-6 py-3">Customer</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                                <td className="px-6 py-4">{order.product}</td>
                                <td className="px-6 py-4">{order.customer}</td>
                                <td className="px-6 py-4">{order.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${order.statusColor}`}>{order.status}</span>
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

    return (
        <div className="admin-dashboard-container bg-gray-100 font-sans min-h-screen">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="admin-main-content lg:ml-64 p-4 md:p-6 transition-all duration-300 ease-in-out">
                <Header toggleSidebar={toggleSidebar} />

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard Overview</h2>

                    {/* Stat Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        <StatCard
                            icon={ICONS.revenue}
                            title="Total Revenue"
                            value="$54,249"
                            change="+12.5%"
                            changeType="positive"
                            iconBgColor="bg-blue-500"
                        />
                        <StatCard
                            icon={ICONS.orders}
                            title="Total Orders"
                            value="1,294"
                            change="+8.2%"
                            changeType="positive"
                            iconBgColor="bg-green-500"
                        />
                        <StatCard
                            icon={ICONS.users}
                            title="New Customers"
                            value="87"
                            change="-2.1%"
                            changeType="negative"
                            iconBgColor="bg-yellow-500"
                        />
                        <StatCard
                            icon={ICONS.products}
                            title="Pending Products"
                            value="12"
                            change="+0.0%"
                            changeType="positive"
                            iconBgColor="bg-red-500"
                        />
                    </div>

                    {/* Charts Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                        <div className="lg:col-span-2">
                            <Chart title="Sales Analytics" />
                        </div>
                        <div>
                            <Chart title="Traffic Sources" />
                        </div>
                    </div>

                    {/* Recent Orders Table */}
                    <div className="mt-6">
                        <RecentOrdersTable />
                    </div>
                </div>
            </main>
        </div>
    );
}
