"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    {
      name: "Program",
      path: "/program",
      dropdown: [
        { name: "Call for Submissions", path: "/program/call-for-submissions" },
        { name: "Short Courses", path: "/program/short-courses" },
        { name: "Student Programs", path: "/program/student-programs" },
        { name: "Special Lectures", path: "/program/special-lectures" },
        { name: "Awards", path: "/program/awards" },
        { name: "Special Session", path: "/program/special-session" },
        { name: "Live Stream", path: "/program/live-stream" },
      ],
    },
    {
      name: "Location",
      path: "/location",
      dropdown: [
        { name: "Hotel", path: "/location/hotel" },
        { name: "Travel", path: "/location/travel" },
        { name: "International Travel", path: "/location/international-travel" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Registration", path: "/registration" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Exhibitors", path: "/exhibitors" },
  ];

  return (
    <div className="bg-[#2f4f56] text-white">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-0">

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center">

          {menu.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.name)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {/* MAIN ITEM */}
              <Link href={item.path}>
                <div
                  className={`
                    flex items-center gap-1
                    px-4 py-3 text-sm md:text-base
                    cursor-pointer
                    hover:bg-orange-500 transition
                    ${item.name === "Registration" ? "bg-orange-500" : ""}
                  `}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={16} />}
                </div>
              </Link>

              {/* DROPDOWN */}
              {item.dropdown && openMenu === item.name && (
                <div className="absolute top-full left-0 bg-white text-black min-w-[220px] shadow-lg z-50">

                  {item.dropdown.map((subItem, i) => (
                    <Link key={i} href={subItem.path}>
                      <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm">
                        {subItem.name}
                      </div>
                    </Link>
                  ))}

                </div>
              )}
            </div>
          ))}

        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden">
          {mobileOpen ? (
            <X onClick={() => setMobileOpen(false)} />
          ) : (
            <Menu onClick={() => setMobileOpen(true)} />
          )}
        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">

          {menu.map((item, index) => (
            <div key={index}>

              {/* MAIN ITEM */}
              <div
                className="flex justify-between items-center py-2 cursor-pointer"
                onClick={() =>
                  setOpenMenu(openMenu === item.name ? null : item.name)
                }
              >
                <Link href={item.path}>{item.name}</Link>
                {item.dropdown && <ChevronDown size={16} />}
              </div>

              {/* DROPDOWN */}
              {item.dropdown && openMenu === item.name && (
                <div className="pl-4">
                  {item.dropdown.map((subItem, i) => (
                    <Link key={i} href={subItem.path}>
                      <div className="py-1 text-sm text-gray-300">
                        {subItem.name}
                      </div>
                    </Link>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>
      )}

    </div>
  );
}