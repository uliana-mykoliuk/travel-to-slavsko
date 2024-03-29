import Image from "next/image";
import HeroBg from "../assets/home/hero-bg.png";

const Hero = () => {
  return (
    <div className="h-screen">
      <div>
        <Image
          alt=""
          src={HeroBg}
          className="w-full h-screen absolute top-0 left-0"
        />
        <div className="bg-gradient-to-b from-[#0B1D26] to-transparent absolute top-0 left-0 w-full h-screen"></div>
      </div>
      <div className="w-full h-screen absolute top-0 left-0 grid gap-y-[32px] content-center justify-center">
        <div className="flex items-center">
          <div className="border-b border-[2px] border-[#FBD784] w-[72px] mr-[32px]" />
          <p className="text-[#FBD784] tracking-[6px]">Гайд подорожі</p>
        </div>
        <h1 className="text-white text-[64px] font-semibold">
          Підкорюйте Вершини: <br /> Відпочинок у Славську!
        </h1>
        <div className="text-white flex items-center gap-x-[16px] ">
          <p className="text-[18px]">прокручуйте вниз </p>
          <span className="text-[36px]">&darr;</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
