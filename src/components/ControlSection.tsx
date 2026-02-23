import Image from "next/image";

export default function ControlSection() {
  return (
    <section className="py-20 flex flex-col items-center px-6" style={{background: "linear-gradient(179.67deg, #06141B 0.29%, #FCFBFC 17.23%)",}}>
      <div className="max-w-2xl w-full text-center">
       <h2
  className="
    w-[445px] h-[34px]
    text-[28px] font-inter font-bold
    leading-none
    text-center capitalize
    text-black
    opacity-100
    mb-3
    mx-auto
  "
>
  Take Control of Your Energy Bills
</h2>

        <p
  className="
    w-[820px] h-[37px]
    text-[16px] font-inter font-semibold
    leading-none
    text-center
    text-black
    opacity-100
    mb-6
    mx-auto
  "
>
  Take control of your energy bills by switching to solar power; reduce reliance on expensive electricity, lock in lower rates, and enjoy long term savings
</p>

        
        <a
  href="#contact"
  className="
    inline-flex items-center justify-center gap-2
    w-[327px] h-[61px]
    border border-gray-300
    text-black font-inter font-medium text-[18px]
    rounded-full
    opacity-100
    px-5 py-2.5
    transition-colors
    hover:bg-gray-50
    mb-10
    mx-auto
  "
>
  Ready To Save Energy?
  <span
    className="
      w-6 h-6
      bg-black text-white
      rounded-full
      flex items-center justify-center
      text-xs font-bold
    "
  >
    →
  </span>
</a>


        
       <div
  className="
    relative
    w-[723px] h-[482px]
    mx-auto mb-10
    opacity-100
  "
>
  <Image
    src="/images/img3.png"
    alt="Family with solar house"
    fill
    className="object-contain"
  />
</div>


       <p
  className="
    w-[487px] h-[24px]
    text-[20px] font-inter font-semibold
    leading-none
    text-center
    text-black
    opacity-100
    mx-auto
  "
>
  It takes just a few steps to make your family happy
</p>

      </div>
    </section>
  );
}