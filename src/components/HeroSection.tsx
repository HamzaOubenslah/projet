"use client";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [gridType, setGridType] = useState("three-phase");
  const [installType, setInstallType] = useState("on-grid");

  const gridTypes = [
    {
      id: "three-phase",
      label: "Three Phase",
      desc: "For High Power Usage or Large Installations",
    },
    {
      id: "single-phase",
      label: "Single Phase",
      desc: "For Low Power Usage, Single Group",
    },
  ];

  const installTypes = [
    {
      id: "Ongrid",
      label: "OnGrid",
      desc: "Check Me If You Have Grid",
    },
    {
      id: "Offgrid",
      label: "OffGrid",
      desc: "Check Me If You Have No Energy Source",
    },
    {
      id: "hybrid",
      label: "Hybrid",
      desc: "I'm Adapted To All Other Energies",
    },
  ];

  return (
    <section className="min-h-screen pt-20 pb-16 flex flex-col items-center relative overflow-hidden bg-[#06141B]" >
      
      <div
        className="
          text-center text-white mt-4 mb-3
          w-[303px] h-[23px]
          font-sourceCodePro font-semibold
          text-[18px] leading-none lowercase
          opacity-100
          mx-auto
        "
      >
        Eaneer&nbsp;&nbsp;Energetics&nbsp;&nbsp;Summer&nbsp;&nbsp;20%
      </div>


      
      <h3
        className="
          text-white text-center mb-2
          w-[543px] h-[34px]
          font-inter font-semibold
          text-[28px] leading-none
          capitalize
          opacity-100
          mx-auto">Start Saving Up To 80% /Mo On Average</h3>

      <p
        className="
          text-[#9CA3AF] text-center mb-6
          w-[876px] h-[22px]
          font-inter font-medium
          text-[18px] leading-none
          capitalize
          opacity-100
          mx-auto
        "
      >
        Enter Your Solar Installation Details And Average Electricity Bill To Get A Quote And View Your Savings
      </p>


      
      
      <a
  href="#"
  className="
    flex items-center justify-center gap-2
    w-[327px] h-[61px]
    border border-white
    text-white font-inter font-medium text-[18px]
    rounded-full
    opacity-100
    mx-auto
    transition-colors
    hover:bg-[#4ADE80]/10
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


      
     <div className="w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-4 min-h-[500px]" style={{ boxShadow: "0px 0px 25px 0px #2C4A52" }}>       
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-64 md:w-96 md:h-80">
            <Image
              src="/images/img.png"
              alt="3D Solar House"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      
        <div className="flex-1 w-full bg-[#111811] border border-[#1e2a1e] rounded-2xl p-5 shadow-xl" style={{ boxShadow: "0px 0px 25px 0px #2C4A52" }}>
          
          
          <div className="mb-5">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Grid Type
            </p>
            <div className="grid grid-cols-2 gap-2">
              {gridTypes.map((g) => (
                <label
                  key={g.id}
                  className={`rounded-xl p-3 border transition-all cursor-pointer flex flex-col gap-1 ${
                    gridType === g.id
                      ? "bg-[#4ADE80]/10 border-white"
                      : "bg-[#0a0f0a] border-[#1e2a1e] hover:border-[#132E35]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        gridType === g.id
                          ? "border-white"
                          : "border-[#132E35]"
                      }`}
                    >
                      {gridType === g.id && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="gridType"
                      value={g.id}
                      checked={gridType === g.id}
                      onChange={() => setGridType(g.id)}
                      className="sr-only"
                    />
                    <span
                      className={`text-xs font-semibold ${
                        gridType === g.id ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {g.label}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-tight pl-5">
                    {g.desc}
                  </p>
                </label>
              ))}
            </div>
          </div>

         
          <div className="mb-5">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Installation Type
            </p>
            <div className="grid grid-cols-3 gap-2">
              {installTypes.map((t) => (
                <label
                  key={t.id}
                  className={`rounded-xl p-2.5 border transition-all cursor-pointer flex flex-col gap-1 ${
                    installType === t.id
                      ? "bg-[#4ADE80]/10 border-white"
                      : "bg-[#0a0f0a] border-[#1e2a1e] hover:border-[#132E35]"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`w-3 h-3 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        installType === t.id
                          ? "border-white"
                          : "border-gray-600"
                      }`}
                    >
                      {installType === t.id && (
                        <div className="w-1 h-1 rounded-full bg-white" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="installType"
                      value={t.id}
                      checked={installType === t.id}
                      onChange={() => setInstallType(t.id)}
                      className="sr-only"
                    />
                    <span
                      className={`text-[11px] font-semibold ${
                        installType === t.id ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {t.label}
                    </span>
                  </div>
                  <p className="text-[9px] text-gray-500 leading-tight pl-4">
                    {t.desc}
                  </p>
                </label>
              ))}
            </div>
          </div>

          
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
              Electric Bill
            </p>
            <div className="flex gap-2">
              <div className="flex-1 bg-[#0a0f0a] border border-[#1e2a1e] rounded-lg px-3 py-2 text-xs text-gray-500 flex items-center gap-2">
                
                <input
                  type="number"
                  placeholder="0.00"
                  className="bg-transparent outline-none text-white placeholder:text-gray-600 w-full"
                />
                <span>DH</span>
              </div>
              
              <a  href="#"
                className="bg-white text-black text-xs font-bold px-4 py-2 rounded-lg  flex items-center"
              >
                Calculate
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-12 text-[#4ADE80] text-2xl opacity-30">⚡</div>
    </section>
  );
}