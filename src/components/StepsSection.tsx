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
        <p className="w-[214px] h-[24px] text-[20px] font-inter font-semibold leading-none text-center capitalize text-white opacity-100 tracking-[0%] mb-2 mx-auto">How Do I Get Started?</p>

        <h3 className="w-[722px] h-[34px] text-[28px] font-inter font-bold leading-none text-center capitalize text-white opacity-100 mb-10 mx-auto">Explore 
          <span className="text-[#69818D]"> eaneer Energetics </span> 
           Solar Energy Installations</h3>

        
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[918px] h-[247px] rounded-[20px] mb-10 mx-auto opacity-100">

          {steps.map((step) => (
            <div className="w-[292px] h-[247px] bg-[#132E35] border border-white rounded-[20px] p-5 text-left hover:border-[#4ADE80]/30 transition-colors opacity-100">

              
             <h3 className="w-[219px] h-[24px] text-[20px] font-inter font-semibold leading-none text-center capitalize text-white opacity-100 mb-2 mx-auto ">{step.title}</h3>

            <p className="w-[245px] h-[90px] text-[15px] font-inter font-medium text-white opacity-100 capitalize mx-auto leading-relaxed">
  {step.desc}
</p>


            </div>
          ))}
        </div>

        
       <a href="#contact" className="inline-flex items-center justify-center gap-2 w-[327px] h-[61px] border border-white text-white font-inter font-medium text-[18px] rounded-full px-5 py-2.5 hover:bg-[#4ADE80]/10 transition-colors opacity-100 mx-auto">
  Ready To Save Energy?
  <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold">→</span>
</a>


        <div className="mt-8 text-[#4ADE80] text-2xl opacity-20">⚡</div>
      </div>
    </section>
  );
}