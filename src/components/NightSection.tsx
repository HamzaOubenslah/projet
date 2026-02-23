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

     
      <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
       <h2
  className="
    w-[423px] h-[34px]
    text-[28px] font-inter font-bold
    leading-none
    text-center capitalize
    text-white
    opacity-100
    mb-3
    mx-auto
  "
>
  Power Your Home, Save Money
</h2>

        <p
  className="
    w-[734px] h-[57px]
    text-[20px] font-inter font-medium
    leading-none
    text-center
    text-gray-300
    opacity-100
    mb-6
    mx-auto
  "
>
  Whether your goal is to reduce your electric bill or eliminate it completely, eaneer can help make that happen.
</p>

        
         <a
  href="#contact"
  className="
    inline-flex items-center justify-center gap-2
    w-[327px] h-[61px]
    border border-white
    text-white font-inter font-medium text-[18px]
    rounded-full
    opacity-100
    px-5 py-2.5
    transition-colors
    hover:bg-[#4ADE80]/10
    mx-auto
  "
>
  Ready To Save Energy?
  <span
    className="
      w-6 h-6
      bg-white text-black
      rounded-full
      flex items-center justify-center
      text-xs font-bold
    "
  >
    →
  </span>
</a>

      </div>
    </section>
  );
}