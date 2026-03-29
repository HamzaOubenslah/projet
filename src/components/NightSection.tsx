import Image from "next/image";

export default function NightSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">

      
      <div className="absolute inset-0">
        <Image
          src="/images/img1.png"
          alt="House at night with solar panels"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a] via-transparent to-[#0a0f0a]/60" />
        <div className="absolute inset-0 bg-[#0a0f0a]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl w-full mx-auto">

        <h2 className="text-white font-bold text-2xl sm:text-3xl mb-3">
          Power Your Home, Save Money
        </h2>

        <p className="text-gray-300 text-sm sm:text-base mb-6">
          Whether your goal is to reduce your electric bill or eliminate it completely, eaneer can help make that happen.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 border border-white text-white text-sm sm:text-base font-medium rounded-full px-6 py-3 transition-colors hover:bg-[#4ADE80]/10"
        >
          Ready To Save Energy?
          <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold">
            →
          </span>
        </a>

      </div>
    </section>
  );
}