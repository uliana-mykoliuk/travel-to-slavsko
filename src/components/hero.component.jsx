import Image from "next/image";
import HeroBg from "../assets/home/slavske.png";

const Hero = ({
  title = "Гайд подорожі",
  header = (
    <>
      Підкорюйте Вершини: <br /> Відпочинок у Славську!
    </>
  ),
  img = HeroBg,
}) => {
  return (
    <div className="h-screen-500px">
      <div className="relative h-screen-500px">
        <Image
          alt=""
          src={img}
          className="w-full h-[110%] absolute -top-[10%] left-0 object-cover"
        />
        <div className="hero-gradient absolute top-0 left-0 w-full h-screen-500px" />
        <div className="bg-gradient-to-t from-[#0B1D26] to-transparent absolute bottom-0 left-0 w-full h-[500px]" />
      </div>
      <div className="w-full h-screen absolute top-0 left-0 grid gap-y-[32px] content-center justify-center">
        <div className="flex items-center">
          <div className="border-b border-[2px] border-[#FBD784] w-[72px] mr-[32px]" />
          <p className="text-[#FBD784] tracking-[6px]">{title}</p>
        </div>
        <h1 className="text-white text-[64px] font-semibold">{header}</h1>
        <div className="text-white flex items-center gap-x-[16px] ">
          <p className="text-[18px]">прокручуйте вниз </p>
          <span className="text-[36px]">&darr;</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
