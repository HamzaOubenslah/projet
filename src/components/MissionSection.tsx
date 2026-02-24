export default function MissionSection() {
  return (
    <section className="bg-[#06141B] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed mb-6">
          With <span className="text-[#69818D]">eaneer energetics</span>, your impact lives on.
          We're on a mission to make Morocco a beacon of green energy.
          Every solar installation is more than savings — it's a legacy. Join our community, grow your impact, and inspire the future.
        </p>

        <p
          className="text-lg sm:text-xl font-semibold mb-12 bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #FFFFFF 0%, #2C4A52 50%, #FFFFFF 75%, #69818D 100%)",
          }}
        >
          Together, We Rise Under One Sun.
        </p>

        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-white text-white text-sm sm:text-base font-medium px-5 py-2.5 rounded-full hover:bg-[#4ADE80]/10 transition-colors"
          >
            Ready To Save Energy?
            <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}