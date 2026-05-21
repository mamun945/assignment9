"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const Layout = ({ children }) => {
  const pathname = usePathname();

  const links = [
    {
      name: "My Request",
      path: "/dashboard",
    },
    {
      name: "Add Pet",
      path: "/dashboard/addpet",
    },
    {
      name: "My Listings",
      path: "/dashboard/mylisting",
    },
  ];

  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        
        {/* Mobile Navbar */}
        <div className="w-full lg:hidden bg-white shadow-md px-4 py-3 flex items-center">
          <label
            htmlFor="my-drawer-3"
            className="btn btn-ghost btn-circle"
          >
            <Menu size={24} />
          </label>

          <h2 className="ml-3 text-lg font-semibold">
            Dashboard
          </h2>
        </div>

        {/* Page Content */}
        <div className="p-4 md:p-6 w-full">
          {children}
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 min-h-full w-72 p-4 pt-20 lg:pt-6 space-y-2">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`rounded-lg p-4 transition-all duration-200 ${
                  pathname === link.path
                    ? "bg-teal-500 text-white font-semibold"
                    : "hover:bg-base-300"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Layout;