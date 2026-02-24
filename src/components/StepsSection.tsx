import Link from "next/link";

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
      <div className="max-w-5xl mx-auto text-center">

       
        <p className="text-[20px] font-semibold text-white mb-2">
          How Do I Get Started?
        </p>

      
        <h3 className="text-[28px] md:text-[32px] font-bold text-white mb-10">
          Explore <span className="text-[#69818D]">eaneer Energetics</span> Solar
          Energy Installations
        </h3>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#132E35] border border-white rounded-2xl p-6 text-center hover:border-[#4ADE80]/40 transition-colors flex flex-col justify-center"
            >
              <h4 className="text-[20px] font-semibold text-white mb-3">
                {step.title}
              </h4>

              <p className="text-[15px] font-medium text-white/90 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        
        <Link
          href="#contact"
          className="inline-flex items-center justify-center gap-2 border border-white text-white font-medium text-[18px] rounded-full px-8 py-3 hover:bg-[#4ADE80]/10 transition-colors"
        >
          Ready To Save Energy?
          <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold">
            →
          </span>
        </Link>

        
        <div className="mt-8 text-[#4ADE80] text-2xl opacity-20">⚡</div>
      </div>
    </section>
  );
}