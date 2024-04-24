import HeroBg from "@/assets/home-bg.jpg";
import ImageTextComponent from "@/components/image-text.component";
import { mountains } from "@/mocks/mountains.mock";
import Layout from "@/components/layout.component";

export default function Mountains() {
  return (
    <Layout
      bgImg={HeroBg}
      title={"Гори та природа"}
      header={
        <>
          Заворожуючі карпатські вершини: <br /> Дивовижна природа Славська
        </>
      }
      img={HeroBg}
    >
      <div className="relative grid gap-y-[50px] md:gap-y-[100px]">
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
    </Layout>
  );
}
