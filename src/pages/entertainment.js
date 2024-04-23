import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import Hero from "@/components/hero.component";
import HeroBg from "@/assets/entertainment/entertainment-bg.jpg";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { restaurants } from "@/mocks/foods.mock";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@/components/card.component";
import ImageTextComponent from "@/components/image-text.component";

import ChanyBg from "@/assets/entertainment/chany/chany-bg.jpg";
import { entertainmants } from "@/mocks/entertainment.mock";

export default function Entertainment() {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 0,
    autoplaySpeed: 7000,
  };

  return (
    <>
      <Header className="mt-[64px]" />
      <Hero
        title={"Як провести час?"}
        header={<>Релакс та розваги в мальовничому Славську</>}
        img={HeroBg}
      />
      <div className="z-[1] relative py-[100px] -mt-[500px]">
        <div className="container mx-auto ">
          {entertainmants.map((entertainmant, idx) => (
            <div key={entertainmant.id} className="mb-[100px]">
              <ImageTextComponent
                img={entertainmant.img}
                title={entertainmant.title}
                text={entertainmant.description}
                imgPosition={idx % 2 ? "right" : "left"}
              />
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
          ))}
        </div>
      </div>
      <div className="container mx-auto mb-[100px]">
        <Footer />
      </div>
    </>
  );
}
