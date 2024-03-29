import Image from "next/image";
import HeroBottomBg from "@/assets/home/hero-bottom-bg.png";

const HeroBgBottom = () => {
  return (
    <div className="relative -mb-[356px]">
      <div className="relative h-screen bg-[#0B1D26]">
        <Image alt="" src={HeroBottomBg} className="w-full h-[500px]" />
        <div className="bg-gradient-to-t from-[#0B1D26] to-transparent absolute top-0 left-0 w-full h-[500px]" />
      </div>
    </div>
  );
};

export default HeroBgBottom;
