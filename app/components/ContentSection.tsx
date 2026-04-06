export default function ContentSection() {
  return (
    <div className="flex flex-col lg:flex-row px-6 md:px-10 py-10 gap-10">

      {/* LEFT CONTENT */}
      <div className="lg:w-[70%] space-y-6">

        {/* INTRO TEXT */}
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          On behalf of the Program Committee, you are invited to Geo-Congress
          2026 in Salt Lake City, Utah—a milestone event marking 30 years of
          excellence in geotechnical engineering. Returning to where it all
          began, this conference will bring together industry leaders,
          researchers, and practitioners to showcase innovations, address
          critical challenges, and advance knowledge.
        </p>

        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Attendees will engage with diverse topics through technical sessions,
          panel discussions, workshops, and short courses. Key themes include
          earthquake engineering, mining tailings, landslide analysis, and
          advancements in geo-materials.
        </p>

        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Discover, learn, and collaborate in an environment dedicated to driving
          progress in geotechnical tools, technologies, and techniques.
        </p>

        {/* TOP REASONS */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Top Reasons to Attend
          </h2>

          <ul className="space-y-3 text-sm md:text-base text-gray-700">

            <li>
              <span className="font-semibold">
                Strong Local Industry Presence:
              </span>{" "}
              Utah has a vibrant geo-professional community.
            </li>

            <li>
              <span className="font-semibold">
                A Must-Visit Destination:
              </span>{" "}
              Experience culture, food, and scenic beauty.
            </li>

            <li>
              <span className="font-semibold">
                Innovative Industry Leadership:
              </span>{" "}
              Learn from cutting-edge projects and insights.
            </li>

            <li>
              <span className="font-semibold">
                Professional Development:
              </span>{" "}
              Earn PDHs through sessions and workshops.
            </li>

            <li>
              <span className="font-semibold">
                Networking Opportunities:
              </span>{" "}
              Connect with leaders and peers.
            </li>

          </ul>
        </div>

      </div>

      {/* RIGHT SIDEBAR */}
      <div className="lg:w-[30%] space-y-6">

        {/* QUESTIONS CARD */}
        <div className="bg-gray-100 p-5 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Questions?</h3>

          <ul className="text-sm text-blue-600 space-y-2">
            <li>(800) 548-2723</li>
            <li>+1 (703) 295-6300</li>
            <li>registrations@asce.org</li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Customer service available Mon–Fri 9:00 a.m. to 6:00 p.m.
          </p>
        </div>

      </div>

    </div>
  );
}