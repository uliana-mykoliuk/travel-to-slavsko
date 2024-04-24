import Image from "next/image";
import HeroBg from "../assets/home/slavske.png";
import "animate.css";

const Hero = ({
  title = "Гайд подорожі",
  header = (
    <>
      Підкорюйте Вершини: <br /> Відпочинок у Славську!
    </>
  ),
  img = HeroBg,
  nextSectionRef,
}) => {
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <div className="w-full container h-screen absolute top-0 mx-auto grid gap-y-[32px] justify-center content-center left-[50%] translate-x-[-50%]">
        <div className="flex items-center animate__animated animate__fadeInLeft animate__delay-2s">
          <div className="border-b border-[2px] border-[#FBD784] w-[72px] mr-[32px]" />
          <p className="text-[#FBD784] tracking-[6px] text-[14px] md:text-[16px]">
            {title}
          </p>
        </div>
        <h1 className="text-white text-[48px] md:text-[64px] font-semibold animate__animated animate__fadeInLeft">
          {header}
        </h1>
        <button
          type="button"
          onClick={scrollToNextSection}
          className="text-white animate__animated animate__fadeInDown animate__delay-3s"
        >
          <div className="flex items-center gap-x-[16px] font-bold hover:text-accent hover:scale-125 transition-all duration-300 hover:translate-x-20">
            <p className="text-[16px] md:text-[18px]">прокручуйте вниз </p>
            <span className="text-[36px]">&darr;</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
