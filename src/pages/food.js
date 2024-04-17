import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import Hero from "@/components/hero.component";
import HeroBg from "@/assets/food/food-bg.jpg";

import Link from "next/link";
import Image from "next/image";

import RestaurantsSlider from "@/components/restaurants-slider.component";
import { dishes } from "@/mocks/foods.mock";

const ImageTextComponent = ({ title, text, img, imgPosition = "left" }) => {
  return imgPosition === "left" ? (
    <section className="grid mx-auto grid-cols-[450px_auto] gap-x-[50px] mb-[100px] items-center">
      <div className="relative h-full min-h-[500px]">
        <Image
          src={img}
          alt={title}
          className="w-full h-full object-cover absolute"
        />
      </div>
      <div className="">
        <h2 className="font-extrabold text-[64px] leading-[70px] text-accent">
          {title}
        </h2>
        <p className="text-[18px] mt-[30px]">{text}</p>
      </div>
    </section>
  ) : (
    <section className="grid mx-auto grid-cols-[auto_450px] gap-x-[50px] mb-[100px] items-center">
      <div className="">
        <h2 className="font-extrabold text-[64px] leading-[70px] text-accent">
          {title}
        </h2>
        <p className="text-[18px] mt-[30px]">{text}</p>
      </div>
      <div className="relative h-full min-h-[500px]">
        <Image
          src={img}
          alt={title}
          className="w-full h-full object-cover absolute"
        />
      </div>
    </section>
  );
};

export default function Hotels() {
  return (
    <>
      <Header className="mt-[64px]" />
      <Hero
        title={"Бажаєш смачненького?"}
        header={<>Закохайся в місцеву кухню карпат</>}
        img={HeroBg}
      />
      <div className="z-[1] relative py-[100px] -mt-[500px]">
        <div className="container mx-auto">
          {dishes.map((dish, idx) => (
            <ImageTextComponent
              key={dish.id}
              {...dish}
              imgPosition={idx % 2 ? "right" : "left"}
            />
          ))}
          <h2 className="font-bold text-[48px] leading-[70px] text-accent text-center mb-[30px]">
            Відвідай місцеві заклади і скуштуй смачну місцеву кухню
          </h2>
          <RestaurantsSlider />
        </div>
      </div>
      <div className="container mx-auto mb-[100px]">
        <Footer />
      </div>
    </>
  );
}
