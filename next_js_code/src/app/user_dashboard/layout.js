"use client";
import { useState } from "react";
import Link from "next/link";
import { FiHome, FiCalendar, FiList, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import Button from "@/components/ui/button";


export default function UserDashboardLayout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FiHome />, href: "/user_dashboard" },
    { name: "Schedule", icon: <FiCalendar />, href: "/user_dashboard/schedule" },
    { name: "Appointments", icon: <FiList />, href: "/user_dashboard/appointments" },
    { name: "Profile", icon: <FiUser />, href: "/user_dashboard/profile" },
    { name: "Settings", icon: <FiSettings />, href: "/settings" },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden flex">
      {/* Sidebar */}
      <div
        className={`bg-blue-600 text-white flex flex-col justify-between py-4 transition-all duration-300 ease-in-out ${
          isExpanded ? "w-56" : "w-20"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        aria-label="User dashboard sidebar"
      >
        {/* Logo */}
        <div>
          <h1
            className={`font-bold text-2xl text-center mb-6 transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
            }`}
          >
            DocBook
          </h1>

          {/* Menu */}
          <ul className="flex flex-col gap-7">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-500 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span
                    className={`whitespace-nowrap transition-opacity duration-300 ${
                      isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout */}
        <Button />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-100">{children}</div>
    </div>
  );
}
