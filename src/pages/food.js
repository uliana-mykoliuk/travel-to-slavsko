import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import Hero from "@/components/hero.component";
import HeroBg from "@/assets/food/food-bg.jpg";

import RestaurantsSlider from "@/components/restaurants-slider.component";
import { dishes } from "@/mocks/foods.mock";
import ImageTextComponent from "@/components/image-text.component";

export default function Food() {
  return (
    <>
      <Header className="mt-[64px]" />
      <Hero
        title={"Бажаєш смачненького?"}
        header={<>Закохайся в мiсцеву кухню карпат</>}
        img={HeroBg}
      />
      <div className="z-[1] relative py-[100px] -mt-[500px]">
        <div className="grid gap-[50px] md:gap-[100px]">
          {dishes.map((dish, idx) => (
            <ImageTextComponent
              key={dish.id}
              {...dish}
              imgPosition={idx % 2 ? "right" : "left"}
            />
          ))}
        </div>
        <div className="container mx-auto mt-[50px] md:mt-[100px]">
          <h2 className="font-bold text-[32px] md:text-[48px] md:leading-[70px] text-accent text-center mb-[50px]">
            Вiдвiдай мiсцевi заклади <br /> i скуштуй смачну карпатську кухню
          </h2>
          <RestaurantsSlider />
        </div>
      </div>
      <Footer />
    </>
  );
}
