import svgPaths from "./svg-bwyjzvc88u";

function Icon() {
  return (
    <div className="h-[22px] relative shrink-0 w-[23px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
        <g clipPath="url(#clip0_49_1451)" id="Icon">
          <path d={svgPaths.p8df1260} id="Vector" stroke="var(--stroke-0, #0B1F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d1c4a40} id="Vector_2" stroke="var(--stroke-0, #0B1F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1b66b1c0} id="Vector_3" stroke="var(--stroke-0, #0B1F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p231fe880} id="Vector_4" stroke="var(--stroke-0, #0B1F3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_49_1451">
            <rect fill="white" height="22" width="23" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#00d4aa] relative rounded-[10px] shrink-0 size-[31.993px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[6.992px] pr-[7.001px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="h-[28.795px] relative shrink-0 w-[86.707px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[19.2px] text-white top-[-0.82px] tracking-[-0.48px] whitespace-nowrap">
          <span className="leading-[28.8px]">Expat</span>
          <span className="leading-[28.8px] text-[#00d4aa]">rum</span>
        </p>
      </div>
    </div>
  );
}

export default function Link() {
  return (
    <div className="content-stretch flex gap-[7.996px] items-center relative size-full" data-name="Link">
      <Header />
      <Header1 />
    </div>
  );
}