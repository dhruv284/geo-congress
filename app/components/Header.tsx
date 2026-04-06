export default function Header() {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-gray-900 to-slate-700 text-white px-6 md:px-8 h-[110px]">

      {/* LEFT (TITLE) */}
      <div>
        <h1 className="text-xl md:text-3xl font-bold">
          Geo Congress 2026
        </h1>
        <p className="text-xs md:text-sm text-gray-300 mt-1">
          Salt Lake City • March 9–12, 2026
        </p>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="relative h-full w-[220px] md:w-[340px] flex-shrink-0 overflow-hidden">

        {/* IMAGE */}
        <img
          src="/header.jpg"
          alt="header"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* TRIANGULAR BADGE */}
        <div className="absolute left-4 md:left-8 top-[-12px]">
          <div
            className="bg-orange-500 text-white font-bold text-sm md:text-lg px-4 md:px-6 py-2 md:py-4 shadow-lg"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
            }}
          >
            2026
          </div>
        </div>

      </div>

    </div>
  );
}