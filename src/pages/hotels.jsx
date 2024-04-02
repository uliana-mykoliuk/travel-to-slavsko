import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import Hero from "@/components/hero.component";
import HeroBg from "@/assets/hotels/hero-bg.jpeg";

import Card from "@/components/card.component";

const hotels = [
  {
    title: "Glamping Slavsko",
    address: "c. Славське, вул. Олени Степанівни, 35a",
    bgImg: "bg-glamping-slavsko",
  },
  {
    title: "Захар Беркут",
    address: "с. Волосянка, вул. Б. Хмельницького, 1",
    bgImg: "bg-zahar-berkut",
  },
  {
    title: "AGORA Chalet",
    address: "c. Славське, вул. Олени Степанівни, 36",
    bgImg: "bg-agora",
  },
  {
    title: "Ковальська Садиба",
    address: "c. Славське, вул. Сагайдачного, 8",
    bgImg: "bg-kovalska-sadyba",
  },
  {
    title: "Садиба Рокса",
    address: "c. Славське, вул. Архангельського, 9",
    bgImg: "bg-sadyba-roksa",
  },
  {
    title: "Карпатський Калейдоскоп",
    address: "c. Славське, вул. Шашкевича, 3а",
    bgImg: "bg-karpatskyi-caleidoskop",
  },
  {
    title: "Вілла Альпійка",
    address: "c. Волосянка, вул. Б. Хмельницького, 15",
    bgImg: "bg-villa-alpiyka",
  },
  {
    title: "Шале Фільварок",
    address: "c. Славське, вул. Устиновича, 153в",
    bgImg: "bg-filvarok",
  },
  {
    title: "Chilloutzonе",
    address: "c. Славське, вул. Лесі Українки",
    bgImg: "bg-chilloutzone",
  },
  {
    title: "Forest Hub",
    address: "c. Славське, вул. Волошина, 124",
    bgImg: "bg-forest-hub",
  },
  {
    title: "Mirador Cottage",
    address: "c. Славське, вул. Олени Степанівни, 36a",
    bgImg: "bg-mirador-cottage",
  },
  {
    title: "Двір Княжої Корони",
    address: "c. Славське, вул. Олени Степанівни, 29в",
    bgImg: "bg-dvir-kniazhoyi-korony",
  },
];

export default function Hotels() {
  return (
    <>
      <Header className="mt-[64px]" />
      <Hero
        title={"Шукаєш де заночувати?"}
        header={
          <>
            Готелі, котеджі та будиночки <br /> для вашого відпочинку
          </>
        }
        img={HeroBg}
      />
      <div className="container mx-auto mb-[100px] -mt-[256px]">
        <div className="grid grid-cols-4 gap-[30px] z-[1] mb-[100px]">
          {hotels.map((hotel, idx) => (
            <Card
              key={idx}
              title={hotel.title}
              address={hotel.address}
              bgImg={hotel.bgImg}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
