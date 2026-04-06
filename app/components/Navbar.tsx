"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
    { name: "Home" },
    {
      name: "Program",
      dropdown: [
        "Call for Submissions",
        "Short Courses",
        "Student Programs",
        "Special Lectures",
        "Awards",
        "Special Session",
        "Live Stream",
      ],
    },
    {
      name: "Location",
      dropdown: ["Hotel", "Travel", "International Travel"],
    },
    { name: "About" },
    { name: "Contact" },
    { name: "Registration" },
    { name: "Sponsors" },
    { name: "Exhibitors" },
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

              {/* DROPDOWN */}
              {item.dropdown && openMenu === item.name && (
                <div className="absolute top-full left-0 bg-white text-black min-w-[220px] shadow-lg z-50">
                  {item.dropdown.map((subItem, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm"
                    >
                      {subItem}
                    </div>
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
                <span>{item.name}</span>
                {item.dropdown && <ChevronDown size={16} />}
              </div>

              {/* DROPDOWN */}
              {item.dropdown && openMenu === item.name && (
                <div className="pl-4">
                  {item.dropdown.map((subItem, i) => (
                    <div key={i} className="py-1 text-sm text-gray-300">
                      {subItem}
                    </div>
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