import Link from "next/link";
import { restaurants } from "@/mocks/foods.mock";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Image from "next/image";

const RestaurantsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 0,
    autoplaySpeed: 10000,
    beforeChange: handleBeforeChange,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="slider-container ">
      <Slider {...settings}>
        {restaurants.map((food, idx) => (
          <Link
            key={idx}
            target="blank"
            href={food.link}
            className="z-[1] mx-[30px] h-full"
          >
            <div className="w-[250px] h-[330px] bg-main p-[20px] grid grid-rows-[150px_50px_24px_auto] border-[5px] border-accent">
              <Image
                src={food.bgImg}
                className="w-[150px] h-[150px] object-cover mx-auto rounded-full"
              />
              <h3 className="truncate font-semibold text-[18px] text-center tracking-[1px] text-white mt-[20px]">
                {food.title}
              </h3>
              <div className="flex gap-x-[10px] mx-auto items-end">
                <div className="text-white text-[14px]">{food.rating}</div>
                {[...Array(5)].map((_, index) => {
                  const filledPercentage =
                    food.rating - index >= 1
                      ? 100
                      : (food.rating - index) * 100;
                  return (
                    <span
                      key={index}
                      className="text-[24px] leading-[24px]"
                      style={{
                        WebkitTextStroke: "1px yellow",
                        background: `linear-gradient(90deg, yellow ${filledPercentage}%, transparent ${filledPercentage}%)`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      &#9733;
                    </span>
                  );
                })}
              </div>
              <address className="text-white opacity-[50%] text-center text-[14px] mt-[15px]">
                {food.address}
              </address>
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
};

export default RestaurantsSlider;
