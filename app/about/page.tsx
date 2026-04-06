export default function AboutPage() {
  return (
    <div>

      {/* HERO */}
      <div className="relative h-[200px] md:h-[280px] w-full overflow-hidden">

        <img
          src="./about.jpg"
          alt="about"
          className="w-full h-full object-cover object-[center_30%]"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-2xl md:text-4xl font-bold">
            About Geo-Congress 2026
          </h1>
        </div>

      </div>

      {/* CONTENT */}
      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto space-y-6">

        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Geo-Congress 2026 is a premier event bringing together professionals,
          researchers, and industry leaders in geotechnical engineering. This
          conference marks a milestone of innovation, collaboration, and
          advancement in geo-engineering technologies.
        </p>

        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          The congress provides a platform for sharing knowledge, exploring new
          research, and discussing challenges in areas such as earthquake
          engineering, infrastructure development, sustainability, and advanced
          geo-materials.
        </p>

        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Participants will gain insights through technical sessions, workshops,
          and networking opportunities with experts from around the world.
        </p>

      </div>

      {/* HIGHLIGHTS */}
      <div className="bg-gray-100 py-10 px-6 md:px-12">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Attend?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold mb-2">Expert Speakers</h3>
            <p className="text-sm text-gray-600">
              Learn from leading professionals and researchers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold mb-2">Networking</h3>
            <p className="text-sm text-gray-600">
              Connect with industry leaders and peers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-sm text-gray-600">
              Discover cutting-edge tools and technologies.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}