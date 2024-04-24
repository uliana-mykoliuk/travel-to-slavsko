import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "animate.css";

const NumberTextComponent = ({
  position,
  number,
  title,
  header,
  text,
  link,
  isVisible,
}) => {
  const animationSide =
    position === "normal" ? "animate__fadeInLeft" : " animate__fadeInRight";

  const animation = isVisible ? animationSide : "invisible";

  return (
    <div className="relative mb-[30px] md:mb-[0px]">
      <div
        className={`absolute top-0 left-0 text-[140px] md:text-[240px] md:leading-[240px] text-[#ffffff4D] font-bold animate__animated ${animation}`}
      >
        {number}
      </div>
      <div className="flex flex-col gap-y-[27px] pt-[130px] xl:pl-[160px]">
        <div
          className={`flex items-center animate__animated ${animation} animate__delay-2s`}
        >
          <div className="border-b border-[2px] border-[#FBD784] w-[72px] mr-[32px]" />
          <p className="text-[#FBD784] tracking-[6px] text-[18px]">{title}</p>
        </div>
        <h2
          className={`font-bold text-[36px] md:text-[48px] xl:text-[64px] leading-[70px] animate__animated ${animation} animate__delay-2s`}
        >
          {header}
        </h2>
        <p
          className={`text-[16px] md:text-[18px] animate__animated ${animation} animate__delay-3s`}
        >
          {text}
        </p>
        <Link
          href={link}
          className={`animate__animated ${animation} animate__delay-4s `}
        >
          <div className="flex items-center hover:scale-125 transition-all duration-300 hover:translate-x-16">
            <p className="text-[#FBD784] text-[18px] mr-[8px] leading-[18px]">
              читати бiльше
            </p>
            <span className="text-[#FBD784] text-[36px] leading-[36px]">
              &rarr;
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

const NumberImageText = ({
  position,
  number,
  title,
  header,
  text,
  img,
  link,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Adjust this value as per your requirement
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="container z-[1]">
      <div
        className={`flex md:grid gap-x-[24px] xl:gap-x-[50px] ${
          position === "normal"
            ? "flex-col md:grid-cols-[minmax(300px,_1fr)_minmax(300px,_1fr)] xl:grid-cols-[minmax(700px,_1fr)_minmax(300px,_1fr)]"
            : "flex-col-reverse md:grid-cols-[minmax(300px,_1fr)_minmax(300px,_1fr)] xl:grid-cols-[minmax(300px,_1fr)_minmax(700px,_1fr)]"
        } items-center`}
      >
        {position === "normal" ? (
          <>
            <NumberTextComponent
              number={number}
              title={title}
              header={header}
              text={text}
              link={link}
              position={position}
              isVisible={isVisible}
            />
            <Image
              className={`w-full h-auto animate__animated ${
                isVisible ? "animate__fadeInRight" : "invisible"
              } animate__delay-2s`}
              alt=""
              src={img}
            />
          </>
        ) : (
          <>
            <Image
              className={`w-full h-auto  animate__animated ${
                isVisible ? "animate__fadeInLeft" : "invisible"
              } animate__delay-2s`}
              alt=""
              src={img}
            />
            <NumberTextComponent
              position={position}
              number={number}
              title={title}
              header={header}
              text={text}
              link={link}
              isVisible={isVisible}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NumberImageText;
