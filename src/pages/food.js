import HeroBg from "@/assets/food/food-bg.jpg";

import RestaurantsSlider from "@/components/restaurants-slider.component";
import { dishes } from "@/mocks/foods.mock";
import ImageTextComponent from "@/components/image-text.component";
import Layout from "@/components/layout.component";

export default function Food() {
  return (
    <Layout
      title={"Бажаєш смачненького?"}
      header={<>Закохайся в мiсцеву кухню карпат</>}
      bgImg={HeroBg}
    >
      <div className="relative">
        <div className="grid gap-[50px] md:gap-[100px]">
          {dishes.map((dish, idx) => (
            <ImageTextComponent
              key={dish.id}
              {...dish}
              imgPosition={idx % 2 ? "right" : "left"}
            />
          ))}
        </div>
        <section className="container mx-auto mt-[50px] md:mt-[100px]">
          <h2 className="font-bold text-[32px] md:text-[48px] md:leading-[70px] text-accent text-center mb-[50px]">
            Вiдвiдай мiсцевi заклади <br /> i скуштуй смачну карпатську кухню
          </h2>
          <RestaurantsSlider />
        </section>
      </div>
    </Layout>
  );
}
