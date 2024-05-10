import Image from "next/image";
import "animate.css";
import { useEffect, useRef, useState } from "react";

const TextComponent = ({ title, text, animationClass }) => {
  return (
    <div className={"animate__animated " + animationClass}>
      <h2 className="font-bold text-[32px] md:text-[64px] md:leading-[70px] text-accent">
        {title}
      </h2>
      <p className="text-[16px] md:text-[18px] mt-[30px]">{text}</p>
    </div>
  );
};

const ImageTextComponent = ({ title, text, img, imgPosition = "left" }) => {
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
    <div ref={ref} className="container">
      {imgPosition === "left" ? (
        <section className="flex flex-col-reverse md:grid md:grid-cols-2 xl:grid-cols-[450px_1fr] gap-x-[50px] gap-y-[30px] md:items-center md:min-h-[100vh]">
          <div className="md:relative h-[80vh] min-h-[500px]">
            <Image
              src={img}
              alt={title}
              className={`w-full h-full object-cover md:absolute animate__animated  ${
                isVisible ? "animate__fadeInLeft" : "invisible"
              }`}
            />
          </div>
          <TextComponent
            title={title}
            text={text}
            animationClass={isVisible ? "animate__fadeInRight" : "invisible"}
          />
        </section>
      ) : (
        <section className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-[1fr_450px] gap-x-[50px] gap-y-[30px] md:items-center md:min-h-[100vh]">
          <TextComponent
            title={title}
            text={text}
            animationClass={isVisible ? "animate__fadeInLeft" : "invisible"}
          />
          <div className="md:relative h-[80vh] min-h-[500px]">
            <Image
              src={img}
              alt={title}
              className={`w-full h-full object-cover md:absolute animate__animated  ${
                isVisible ? "animate__fadeInRight" : "invisible"
              }`}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default ImageTextComponent;
