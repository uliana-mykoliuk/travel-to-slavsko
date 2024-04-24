import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import Hero from "@/components/hero.component";
import HeroBg from "@/assets/home-bg.jpg";
import ImageTextComponent from "@/components/image-text.component";
import { mountains } from "@/mocks/mountains.mock";

export default function Mountains() {
  return (
    <>
      <Header className="md:mt-[64px]" />
      <Hero
        title={"Гори та природа"}
        header={
          <>
            Заворожуючі карпатські вершини: <br /> Дивовижна природа Славська
          </>
        }
        img={HeroBg}
      />
      <div className="z-[1] relative py-[100px] -mt-[500px] grid gap-y-[50px] md:gap-y-[100px]">
        {mountains.map((mountain, idx) => (
          <ImageTextComponent
            key={idx}
            title={mountain.title}
            text={mountain.text}
            img={mountain.img}
            imgPosition={idx % 2 ? "right" : "left"}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
