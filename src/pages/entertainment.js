import HeroBg from "@/assets/entertainment/entertainment-bg.jpg";
import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@/components/card.component";
import ImageTextComponent from "@/components/image-text.component";

import { entertainmants } from "@/mocks/entertainment.mock";
import Layout from "@/components/layout.component";

export default function Entertainment() {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 0,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Layout
      title={"Як провести час?"}
      header={<>Релакс та розваги в мальовничому Славську</>}
      bgImg={HeroBg}
    >
      <div className="relative">
        {entertainmants.map((entertainmant, idx) => (
          <div
            key={entertainmant.id}
            className={
              idx === entertainmants.length - 1 ? "" : "mb-[50px] md:mb-[100px]"
            }
          >
            <ImageTextComponent
              img={entertainmant.img}
              title={entertainmant.title}
              text={entertainmant.description}
              imgPosition={idx % 2 ? "right" : "left"}
            />
            <div className="container">
              {entertainmant?.places && entertainmant?.places?.length > 0 && (
                <section className="slider-container mt-[50px]">
                  <Slider {...settings}>
                    {entertainmant?.places.map((place, idx) => (
                      <Link
                        key={place.id}
                        target="blank"
                        href={place.link}
                        className="z-[1] px-[15px] h-full"
                      >
                        <Card
                          title={place.title}
                          address={place.address}
                          bgImg={place.img}
                          height="small"
                        />
                      </Link>
                    ))}
                  </Slider>
                </section>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
