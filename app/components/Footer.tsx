"use client";

import { Phone, Smartphone } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#4b5551] text-white px-6 md:px-12 py-12">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* LEFT SECTION */}
        <div>
          <h2 className="text-xl font-bold mb-4">Geo-Congress 2026</h2>

          <ul className="space-y-2 text-sm text-gray-200">
            <li className="font-semibold">HOME</li>

            <li className="mt-4 font-semibold">PROGRAM</li>
            <li>Call for Submissions</li>
            <li>Short Courses</li>
            <li>Student Program</li>
            <li>Special Lectures</li>
            <li>Awards</li>
            <li>Special Sessions</li>
            <li>Geo-Institute Theatre</li>
            <li>Live Stream</li>
            <li className="mt-4 font-semibold">Location</li>
          </ul>
        </div>

        {/* MIDDLE SECTION */}
        <div className="space-y-4 text-sm text-gray-200">
          <p className="font-semibold">REGISTRATION</p>
          <p className="font-semibold">SPONSORS</p>
          <p className="font-semibold">EXHIBITORS</p>
          <p className="font-semibold">LIGHTWEIGHT FILL CONFERENCE</p>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

          <div className="space-y-3 text-sm text-gray-200">

            <div className="flex items-center gap-3">
              <Smartphone size={18} />
              <span>(800) 548-2723</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+1 (703) 295-6300</span>
            </div>

          </div>

          {/* SOCIAL */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">
              Connect With ASCE
            </h3>

            <div className="flex gap-4 mt-2">

              <FaLinkedin className="cursor-pointer hover:text-orange-400" />
              <FaXTwitter className="cursor-pointer hover:text-orange-400" />
              <FaFacebook className="cursor-pointer hover:text-orange-400" />
              <FaInstagram className="cursor-pointer hover:text-orange-400" />
              <FaYoutube className="cursor-pointer hover:text-orange-400" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}