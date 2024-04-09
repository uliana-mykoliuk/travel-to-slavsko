import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import Hero from "@/components/hero.component";
import HeroBg from "@/assets/hotels/hero-bg.jpeg";

import Card from "@/components/card.component";
import Link from "next/link";

import GlampingSlavskoImg1 from "@/assets/hotels/glamping-slavsko/glamping-slavsko-01.jpg";
import GlampingSlavskoImg2 from "@/assets/hotels/glamping-slavsko/glamping-slavsko-02.jpg";
import GlampingSlavskoImg3 from "@/assets/hotels/glamping-slavsko/glamping-slavsko-03.jpg";
import GlampingSlavskoImg4 from "@/assets/hotels/glamping-slavsko/glamping-slavsko-04.jpg";
import GlampingSlavskoImg5 from "@/assets/hotels/glamping-slavsko/glamping-slavsko-05.jpg";

import AgoraChaletImg1 from "@/assets/hotels/agora-chalet/agora-chalet-01.jpg";
import AgoraChaletImg2 from "@/assets/hotels/agora-chalet/agora-chalet-02.jpg";
import AgoraChaletImg3 from "@/assets/hotels/agora-chalet/agora-chalet-03.jpg";
import AgoraChaletImg4 from "@/assets/hotels/agora-chalet/agora-chalet-04.jpg";
import AgoraChaletImg5 from "@/assets/hotels/agora-chalet/agora-chalet-05.jpg";

import DvirKniazhoiKoronyImg1 from "@/assets/hotels/dvir-kniazhoyi-korony/dvir-kniazhoi-korony-01.jpg";
import DvirKniazhoiKoronyImg2 from "@/assets/hotels/dvir-kniazhoyi-korony/dvir-kniazhoi-korony-02.jpg";
import DvirKniazhoiKoronyImg3 from "@/assets/hotels/dvir-kniazhoyi-korony/dvir-kniazhoi-korony-03.jpg";
import DvirKniazhoiKoronyImg4 from "@/assets/hotels/dvir-kniazhoyi-korony/dvir-kniazhoi-korony-04.jpg";
import DvirKniazhoiKoronyImg5 from "@/assets/hotels/dvir-kniazhoyi-korony/dvir-kniazhoi-korony-05.jpg";

import KovalskaSadybaImg1 from "@/assets/hotels/kovalska-sadyba/kovalska-sadyba-01.jpg";
import KovalskaSadybaImg2 from "@/assets/hotels/kovalska-sadyba/kovalska-sadyba-02.jpg";
import KovalskaSadybaImg3 from "@/assets/hotels/kovalska-sadyba/kovalska-sadyba-03.jpg";
import KovalskaSadybaImg4 from "@/assets/hotels/kovalska-sadyba/kovalska-sadyba-04.jpg";
import KovalskaSadybaImg5 from "@/assets/hotels/kovalska-sadyba/kovalska-sadyba-05.jpg";

export const hotels = [
  {
    id: 1,
    title: "Glamping Slavsko",
    description: `Помешкання SlavskoGlamping з чудовим видом на гори розташовано в місті Славське, за 32 км від пам'ятки "Shypit Waterfall". До послуг гостей номери з безкоштовним Wi-Fi, а також безкоштовна приватна парковка.
    Гостям надаються варіанти розміщення з терасою з видом на місто. Кожен з них містить міні-кухню з холодильником і плитою та окрему ванну кімнату з душем.    
    До розпорядження гостей послуга оренди велосипедів, прямий доступ до лижних схилів і місце для зберігання лиж. В околицях помешкання гості можуть зайнятися катанням на лижах і катанням на велосипеді.    
    Найближчий аеропорт до помешкання SlavskoGlamping – Міжнародний аеропорт «Львів», що розташований за 136 км.    
    Це місце розташування особливо подобається парам – вони оцінили його на 8,9 для поїздки удвох.`,
    address: "c. Славське, вул. Олени Степанівни, 35a",
    bgImg: "bg-glamping-slavsko",
    images: [
      GlampingSlavskoImg1,
      GlampingSlavskoImg2,
      GlampingSlavskoImg3,
      GlampingSlavskoImg4,
      GlampingSlavskoImg5,
    ],
    bookingLink: "https://www.booking.com/hotel/ua/slavsko-glamp-2.uk.html",
  },
  {
    id: 2,
    title: "Захар Беркут",
    address: "с. Волосянка, вул. Б. Хмельницького, 1",
    bgImg: "bg-zahar-berkut",
  },
  {
    id: 3,
    title: "AGORA Chalet",
    description: `У помешканні AGORA Chalet, яке розташовано у Славському, за 32 км від пам'ятки "Shypit Waterfall", гості можуть користуватися такими послугами/зручностями: спільний лаунж і прямий доступ до лижних схилів. У цьому помешканні з видом на гори до послуг гостей тераса, цілодобова стійка реєстрації та безкоштовний Wi-Fi на всій території помешкання.
    У помешканні AGORA Chalet номери обладнані балконом. Окрему ванну кімнату оснащено душем, безкоштовними туалетно-косметичними засобами та феном. У помешканні AGORA Chalet кожен номер укомплектовано постільною білизною та рушниками.    
    У Славському та його околицях гостям помешкання AGORA Chalet пропонують зайнятися різними видами активного відпочинку, зокрема катанням на лижах та катанням на велосипеді.    
    Працівники стійки реєстрації говорять такими мовами – англійська, польська, російська та українська – і нададуть гостям необхідні інструкції про околиці помешкання.    
    Найближчий аеропорт до помешкання AGORA Chalet – Міжнародний аеропорт «Львів», що розташований за 137 км.    
    Це місце розташування особливо подобається парам – вони оцінили його на 9,1 для поїздки удвох.`,
    address: "c. Славське, вул. Олени Степанівни, 36",
    bgImg: "bg-agora",
    images: [
      AgoraChaletImg1,
      AgoraChaletImg2,
      AgoraChaletImg3,
      AgoraChaletImg4,
      AgoraChaletImg5,
    ],
    bookingLink: "https://www.booking.com/hotel/ua/agora-chalet.uk.html",
  },
  {
    id: 4,
    title: "Ковальська Садиба",
    description: `Гостьовий будинок "Ковальська садиба" розташований у селищі Славське і призначений тільки для дорослих. До послуг гостей сезонний відкритий плавальний басейн, сад і тераса. У помешканні надається безкоштовний Wi-Fi. Машину можна залишити на власній парковці.
    В усіх номерах гостьового будинку є окрема ванна кімната.    
    У селищі Славське та його околицях можна зайнятися лижним спортом та іншими видами активного відпочинку.    
    Співробітники цілодобової стійки реєстрації говорять російською, українською, англійською та польською мовами.    
    Відстань від гостьового будинку "Ковальська садиба" до найближчого міжнародного аеропорту Ужгорода становить 90 км.    
    Це місце розташування особливо подобається парам – вони оцінили його на 9,6 для поїздки удвох.`,
    address: "c. Славське, вул. Сагайдачного, 8",
    bgImg: "bg-kovalska-sadyba",
    images: [
      KovalskaSadybaImg1,
      KovalskaSadybaImg2,
      KovalskaSadybaImg3,
      KovalskaSadybaImg4,
      KovalskaSadybaImg5,
    ],
    bookingLink: "https://www.booking.com/hotel/ua/koval-39-ska-sadyba.uk.html",
  },
  {
    id: 5,
    title: "Садиба Рокса",
    address: "c. Славське, вул. Архангельського, 9",
    bgImg: "bg-sadyba-roksa",
  },
  {
    id: 6,
    title: "Карпатський Калейдоскоп",
    address: "c. Славське, вул. Шашкевича, 3а",
    bgImg: "bg-karpatskyi-caleidoskop",
  },
  {
    id: 7,
    title: "Вілла Альпійка",
    address: "c. Волосянка, вул. Б. Хмельницького, 15",
    bgImg: "bg-villa-alpiyka",
  },
  {
    id: 8,
    title: "Шале Фільварок",
    address: "c. Славське, вул. Устиновича, 153в",
    bgImg: "bg-filvarok",
  },
  {
    id: 9,
    title: "Chilloutzonе",
    address: "c. Славське, вул. Лесі Українки",
    bgImg: "bg-chilloutzone",
  },
  {
    id: 10,
    title: "Forest Hub",
    address: "c. Славське, вул. Волошина, 124",
    bgImg: "bg-forest-hub",
  },
  {
    id: 11,
    title: "Mirador Cottage",
    address: "c. Славське, вул. Олени Степанівни, 36a",
    bgImg: "bg-mirador-cottage",
  },
  {
    id: 12,
    title: "Двір Княжої Корони",
    description: `У помешканні Hotel Complex Dvir Kniazhoiy Korony, яке розташовано в місті Славське, за 31 км від пам'ятки "Shypit Waterfall", до послуг гостей тераса, безкоштовна приватна парковка та бар. Гостям надаються сімейні номери. Також до послуг гостей дитячий ігровий майданчик. На території помешкання до розпорядження гостей караоке та безкоштовні послуги трансферу.
    Номери в помешканні Hotel Complex Dvir Kniazhoiy Korony укомплектовано телевізором із плоским екраном із супутниковими каналами. У помешканні Hotel Complex Dvir Kniazhoiy Korony гостям пропонують номери з окремою ванною кімнатою, які оснащено капцями. Також серед іншого тут доступний безкоштовний Wi-Fi. Певні номери мають вид на гори.    
    На території помешкання Hotel Complex Dvir Kniazhoiy Korony до послуг гостей прокат велосипедів. Серед популярних видів активного відпочинку поблизу можна відзначити катання на лижах і катання на велосипеді.    
    Працівники стійки реєстрації володіють такими мовами – англійська та українська – і нададуть гостям практичні інструкції про околиці помешкання.    
    Найближчий аеропорт до помешкання Hotel Complex Dvir Kniazhoiy Korony – Міжнародний аеропорт «Львів», що розташований за 136 км.    
    Це місце розташування особливо подобається парам – вони оцінили його на 9,2 для поїздки удвох.`,
    address: "c. Славське, вул. Олени Степанівни, 29в",
    bgImg: "bg-dvir-kniazhoyi-korony",
    images: [
      DvirKniazhoiKoronyImg1,
      DvirKniazhoiKoronyImg2,
      DvirKniazhoiKoronyImg3,
      DvirKniazhoiKoronyImg4,
      DvirKniazhoiKoronyImg5,
    ],
    bookingLink:
      "https://www.booking.com/hotel/ua/dvir-kniazhoyi-korony.uk.html",
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
            <Link
              key={idx}
              href={{
                pathname: "/hotels/[slug]",
                query: { slug: hotel.id },
              }}
              className="z-[1]"
            >
              <Card
                title={hotel.title}
                address={hotel.address}
                bgImg={hotel.bgImg}
              />
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
