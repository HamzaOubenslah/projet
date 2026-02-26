const steps = [
  {
    title: "Answer Our Questions",
    desc: "Answer a few questions online to get a price guide. Our installer in your area will then contact you to book in a personalised survey.",
  },
  {
    title: "Get Your Quote",
    desc: "After the survey we'll send you your bespoke quote, based on your home's needs.",
  },
  {
    title: "Book Your Installation",
    desc: "If you go ahead with us, you can expect a fast, professional installation by a trusted, local expert. All backed by a workmanship guarantee.",
  },
];

export default function StepsSection() {
  return (
    <section className="bg-[#06141B] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-lg sm:text-xl font-semibold text-white mb-2">
          How Do I Get Started?
        </p>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12">
          Explore
          <span className="text-[#69818D]"> eaneer Energetics </span>
          Solar Energy Installations
        </h3>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#132E35] border border-white rounded-2xl p-6 text-center md:text-left hover:border-[#4ADE80]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                {step.title}
              </h4>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 border border-white text-white font-medium text-sm sm:text-base rounded-full px-6 py-3 hover:bg-[#4ADE80]/10 transition-colors"
        >
          Ready To Save Energy?
          <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold">
            →
          </span>
        </a>

        <div className="mt-8 text-[#4ADE80] text-2xl opacity-20">⚡</div>
      </div>
    </section>
  );
}