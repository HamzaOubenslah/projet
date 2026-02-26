import Image from "next/image";

export default function NightSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">

      
      <div className="absolute inset-0">
        <Image
          src="/images/img1.png"
          alt="House at night with solar panels"
          fill
          className="object-cover object-center opacity-80"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a] via-transparent to-[#0a0f0a]/60" />
        <div className="absolute inset-0 bg-[#0a0f0a]/30" />
      </div>

     
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Power Your Home, Save Money
        </h2>

        <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
          Whether your goal is to reduce your electric bill or eliminate it completely,
          eaneer can help make that happen.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 border border-white text-white font-medium text-sm sm:text-base rounded-full px-6 py-3 hover:bg-[#4ADE80]/10 transition-colors"
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