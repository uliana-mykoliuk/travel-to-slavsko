import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import Hero from "@/components/hero.component";
import HeroBg from "@/assets/entertainment/entertainment-bg.jpg";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { restaurants } from "@/mocks/foods.mock";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@/components/card.component";
import ImageTextComponent from "@/components/image-text.component";

import ChanyBg from "@/assets/entertainment/chany/chany-bg.jpg";

export default function Entertainment() {
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
    autoplaySpeed: 7000,
    beforeChange: handleBeforeChange,
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
        <div className="container mx-auto">
          <ImageTextComponent
            img={ChanyBg}
            title="Чани"
            text={`
                Це давній спосіб відпочинку, який знайшов своє застосування в
                українській культурі як символ релаксації та оздоровлення. Ці
                невеликі дерев'яні будиночки, часто розташовані на березі річок
                або озер, стали популярними місцями для проведення часу в
                природі та відпочинку від міської суєти. В чанах можна
                насолодитися теплом парової бані, яка є невід'ємною частиною
                української банної процедури. Традиційно, в чані
                використовуються натуральні ароматичні трави, які надають пару
                приємним ароматом та допомагають розслабитися. Це місце, де
                можна забути про щоденні турботи, насолодитися спокоєм природи і
                відновити своє тіло і душу. Після відвідування чану багато людей
                відчувають оновлення, відпочинок і заряд енергії на наступний
                день. Запрошуємо вас відкрити для себе цю традиційну українську
                форму відпочинку і насолодитися моментами спокою та гармонії в
                обрамленні природи.`}
          />
          <section className="slider-container mt-[50px]">
            <Slider {...settings}>
              {restaurants.map((food, idx) => (
                <Link
                  key={idx}
                  target="blank"
                  href={food.link}
                  className="z-[1] px-[15px] h-full"
                >
                  <Card
                    title={food.title}
                    address={food.address}
                    bgImg={food.bgImg}
                    height="small"
                  />
                </Link>
              ))}
            </Slider>
          </section>
        </div>
      </div>
      <div className="container mx-auto mb-[100px]">
        <Footer />
      </div>
    </>
  );
}
