// Sidebar component
export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
    const pathname = usePathname();

    const menuItems = [
        { href: "/admin", icon: ICONS.dashboard, name: "Dashboard" },
        { href: "/admin/blogs", icon: ICONS.orders, name: "Blog" },
        { href: "/admin/testimonials", icon: ICONS.users, name: "Testimonials" },
        { href: "/admin/settings", icon: ICONS.settings, name: "Settings" },
    ];

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
                    <a
                        href="#"
                        className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        <Icon path={ICONS.logout} className="w-5 h-5 mr-3" />
                        <span>Logout</span>
                    </a>
                </div>
            </aside>
        </>
    );
};