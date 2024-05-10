import NumberImageText from "@/components/number-img-txt.component";
import HotelsImg from "@/assets/home/hotels.png";
import FoodImg from "@/assets/home/food.png";
import EntertainmentImg from "@/assets/home/bike.png";
import Layout from "@/components/layout.component";
import "animate.css";

const content = [
  {
    title: "Пошук Готелю",
    header: "Знайдiмо прекрасне мiсце для ночiвлi",
    text: `Вибiр iдеального мiсця для проживання вiдiграє важливу роль у
    створеннi незабутнього вiдпочинку. Наша колекцiя готелiв та
    будиночкiв ретельно пiдiбрана, щоб задовольнити будь-якi потреби та
    бажання. Вiд затишних котеджiв у горах до розкiшних готелiв з видом
    на вершини – у нас ви знайдете iдеальний варiант, щоб зробити свою
    подорож незабутньою.`,
    img: HotelsImg,
    link: "/hotels",
  },
  {
    title: "Смакота",
    header: "Cпробуйте мiсцеву кухню",
    text: `Вiдчуйте смак гiрської кухнi у наших ресторанах та кафе, якi 
    пропонують автентичнi страви з найсвiжiших iнгредiєнтiв. Вiд 
    традицiйних гуцульських делiкатесiв до сучасних iнтерпретацiй 
    мiсцевих страв, кожен пригощений стравами, що розкажуть вам iсторiю 
    цiєї неповторної мiсцевої культури. Насолоджуйтеся атмосферою 
    гостинностi та смаками Карпат у наших закладах харчування.`,
    img: FoodImg,
    link: "/food",
  },
  {
    title: "Розваги",
    header: "Шукаєте цiкавий спосiб провести час?",
    text: `Наша розмаїта пiдбiрка розваг гарантує незабутнi враження для 
    кожного гостя. Вiд захоплюючих кiнних прогулянок i веселих 
    спа-джипiнгiв до адреналiну, що б'є через краєвиднi квадроцикли та 
    екстремальнi канатнi витяги, у нас є щось для кожного. Незалежно вiд 
    вашого вибору, ми гарантуємо, що вашi днi будуть наповненi веселощами 
    та захопленням.`,
    img: EntertainmentImg,
    link: "/entertainment",
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="grid gap-y-[50px] md:gap-y-[100px]">
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
      </div>
    </Layout>
  );
}
