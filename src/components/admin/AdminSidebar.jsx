"use client";

import { redirect, usePathname } from "next/navigation";

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
        "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",
    logout:
        "M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",
    close:
        "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
    banner:
        "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 7h14v2H5V7zm0 4h14v2H5v-2zm0 4h14v2H5v-2z",
};

const AdminSidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const pathname = usePathname();

    const menuItems = [
        { href: "/admin", icon: ICONS.dashboard, name: "Dashboard" },
        { href: "/admin/blogs", icon: ICONS.orders, name: "Blog" },
        { href: "/admin/events", icon: ICONS.products, name: "Events" },
        { href: "/admin/banners", icon: ICONS.banner, name: "Banners" },
        { href: "/admin/testimonials", icon: ICONS.users, name: "Testimonials" },
    ];

    const handleLogout = () => {
        document.cookie = "access_token=; path=/; max-age=0; secure; samesite=lax";
        redirect("/admin/login");
    }

    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`admin-sidebar-overlay fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden ${isSidebarOpen ? "block" : "hidden"
                    }`}
                onClick={toggleSidebar}
            ></div>

            <aside
                className={`admin-sidebar fixed top-0 left-0 h-full bg-gray-800 text-gray-100 w-64 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 flex flex-col`}
            >
                <div className="admin-sidebar-header p-4 flex items-center justify-between border-b border-gray-700">
                    <h1 className="text-2xl font-bold text-white">Fortrust Admin</h1>
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden text-gray-300 hover:text-white"
                    >
                        <Icon path={ICONS.close} />
                    </button>
                </div>
                <nav className="admin-sidebar-nav mt-6 flex-grow">
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index} className="px-4 py-2">
                                <a
                                    href={item.href || "#"}
                                    className={`flex items-center p-2 rounded-lg transition-colors ${item.href === pathname
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                        }`}
                                >
                                    <Icon path={item.icon} className="w-5 h-5 mr-3" />
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="admin-sidebar-footer p-4 border-t border-gray-700">
                    <button
                        onClick={handleLogout}
                        className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        <Icon path={ICONS.logout} className="w-5 h-5 mr-3" />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default AdminSidebar;
