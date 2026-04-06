export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row">

      {/* LEFT: HERO IMAGE */}
      <div className="relative w-full lg:w-[70%] min-h-[320px] md:min-h-[450px] lg:min-h-[520px] overflow-hidden">
        {/* IMAGE */}
        <img
          src="/hero.jpg"
          alt="hero"
          className="w-full h-full object-cover"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* TEXT CONTENT */}
        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white max-w-2xl">

          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Geo Tools, Technologies, and Techniques in an Environment of Change
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-200">
            Join us in Salt Lake City for Geo-Congress 2026, celebrating innovation in
            geotechnical engineering. Explore groundbreaking research, project delivery,
            and emerging trends shaping the future.
          </p>

        </div>
      </div>

      {/* RIGHT: SIDEBAR */}
      <div className="w-full lg:w-[30%] bg-gray-100 p-6 md:p-8 space-y-8">

        {/* VENUE CARD */}
        <div className="bg-white rounded-lg shadow-sm p-4">

          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Official Congress Venue
          </h3>

          <img
            src="/venue.jpg"
            alt="venue"
            className="w-full h-[140px] object-cover rounded-md mb-4"
          />

          <p className="font-semibold text-blue-600 hover:underline cursor-pointer">
            Salt Palace Convention Center
          </p>

          <p className="text-sm text-gray-600 mt-1">
            100 S West Temple <br />
            Salt Lake City, UT 84101
          </p>

        </div>

        {/* DATES CARD */}
        <div className="bg-white rounded-lg shadow-sm p-4">

          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Important Dates
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex justify-between border-b pb-2">
              <span className="font-bold text-gray-700">Feb 12</span>
              <span className="text-gray-600">Abstract Deadline</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-bold text-gray-700">Oct 1</span>
              <span className="text-gray-600">Hotel Opens</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-bold text-gray-700">Oct 1</span>
              <span className="text-gray-600">Hotel Opens</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-bold text-gray-700">Oct 1</span>
              <span className="text-gray-600">Hotel Opens</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-bold text-gray-700">Oct 1</span>
              <span className="text-gray-600">Hotel Opens</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-gray-700">Oct 17</span>
              <span className="text-gray-600">Registration Opens</span>
            </div>
            

          </div>

        </div>

      </div>

    </div>
  );
}