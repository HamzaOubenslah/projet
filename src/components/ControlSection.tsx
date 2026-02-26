import Image from "next/image";

export default function ControlSection() {
  return (
    <section
      className="py-20 px-6 flex flex-col items-center"
      style={{
        background:
          "linear-gradient(179.67deg, #06141B 0.29%, #FCFBFC 17.23%)",
      }}
    >
      <div className="max-w-4xl w-full text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
          Take Control of Your Energy Bills
        </h2>

        <p className="text-sm sm:text-base md:text-lg font-semibold text-black mb-6 max-w-2xl mx-auto leading-relaxed">
          Take control of your energy bills by switching to solar power; reduce
          reliance on expensive electricity, lock in lower rates, and enjoy long
          term savings
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 border border-gray-300 text-black font-medium text-sm sm:text-base rounded-full px-6 py-3 hover:bg-gray-50 transition-colors mb-10"
        >
          Ready To Save Energy?
          <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
            →
          </span>
        </a>

        {/* Image */}
        <div className="relative w-full max-w-xl h-64 sm:h-80 md:h-[420px] mx-auto mb-10">
          <Image
            src="/images/img3.png"
            alt="Family with solar house"
            fill
            className="object-contain"
          />
        </div>

        <p className="text-lg sm:text-xl font-semibold text-black">
          It takes just a few steps to make your family happy
        </p>

      </div>
    </section>
  );
}