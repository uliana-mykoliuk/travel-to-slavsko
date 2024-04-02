import { Inter } from "next/font/google";
import Hero from "@/components/hero.component";
import Header from "@/components/header.component";
import NumberImageText from "@/components/number-img-txt.component";
import HotelsImg from "@/assets/home/hotels.png";
import FoodImg from "@/assets/home/food.png";
import EntertainmentImg from "@/assets/home/bike.png";
import Footer from "@/components/footer.component";

const inter = Inter({ subsets: ["latin"] });

const content = [
  {
    title: "Пошук Готелю",
    header: "Знайдімо прекрасне місце для ночівлі",
    text: `Вибір ідеального місця для проживання відіграє важливу роль у
    створенні незабутнього відпочинку. Наша колекція готелів та
    будиночків ретельно підібрана, щоб задовольнити будь-які потреби та
    бажання. Від затишних котеджів у горах до розкішних готелів з видом
    на вершини – у нас ви знайдете ідеальний варіант, щоб зробити свою
    подорож незабутньою.`,
    img: HotelsImg,
    link: "/hotels",
  },
  {
    title: "Смакота",
    header: "Рекомендуємо спробувати місцеву кухню",
    text: `Відчуйте смак гірської кухні у наших ресторанах та кафе, які 
    пропонують автентичні страви з найсвіжіших інгредієнтів. Від 
    традиційних гуцульських делікатесів до сучасних інтерпретацій 
    місцевих страв, кожен пригощений стравами, що розкажуть вам історію 
    цієї неповторної місцевої культури. Насолоджуйтеся атмосферою 
    гостинності та смаками Карпат у наших закладах харчування.`,
    img: FoodImg,
    link: "/",
  },
  {
    title: "Розваги",
    header: "Шукаєте цікавий спосіб провести час?",
    text: `Наша розмаїта підбірка розваг гарантує незабутні враження для 
    кожного гостя. Від захоплюючих кінних прогулянок і веселих 
    спа-джипінгів до адреналіну, що б'є через краєвидні квадроцикли та 
    екстремальні канатні витяги, у нас є щось для кожного. Незалежно від 
    вашого вибору, ми гарантуємо, що ваші дні будуть наповнені веселощами 
    та захопленням.`,
    img: EntertainmentImg,
    link: "/",
  },
];

export default function Home() {
  return (
    <>
      <Header className="mt-[64px]" />
      <Hero />
      <div className="grid gap-y-[200px] container mx-auto -mt-[256px] mb-[100px]">
        {content.map((contentItem, idx) => {
          const number = idx < 9 ? "0" + (idx + 1) : idx + 1;
          return (
            <NumberImageText
              key={number}
              number={number}
              position={idx % 2 ? "inverted" : "normal"}
              title={contentItem.title}
              header={contentItem.header}
              text={contentItem.text}
              img={contentItem.img}
              link={contentItem.link}
            />
          );
        })}
        <Footer />
      </div>
    </>
  );
}
