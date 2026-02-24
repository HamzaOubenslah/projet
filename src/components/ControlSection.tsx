import Image from "next/image";

export default function ControlSection() {
  return (
    <section
      className="py-16 flex flex-col items-center px-6 text-center"
      style={{
        background:
          "linear-gradient(179.67deg, #06141B 0.29%, #FCFBFC 17.23%)",
      }}
    >
      <div className="max-w-2xl w-full">

        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
          Take Control of Your Energy Bills
        </h2>

        <p className="text-sm sm:text-base font-semibold text-black mb-6">
          Take control of your energy bills by switching to solar power; reduce reliance on expensive electricity, lock in lower rates, and enjoy long term savings
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 border border-gray-300 text-black text-sm sm:text-base font-medium rounded-full px-6 py-3 hover:bg-gray-50 mb-10"
        >
          Ready To Save Energy?
          <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
            →
          </span>
        </a>


        <div className="relative w-full max-w-md sm:max-w-lg mx-auto mb-10 aspect-[4/3]">
          <Image
            src="/images/img3.png"
            alt="Family with solar house"
            fill
            className="object-contain"
          />
        </div>

        <p className="text-base sm:text-lg font-semibold text-black">
          It takes just a few steps to make your family happy
        </p>

      </div>
    </section>
  );
}