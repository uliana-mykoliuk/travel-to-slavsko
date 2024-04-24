import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import Hero from "@/components/hero.component";
import HeroBg from "@/assets/hotels/hero-bg.jpeg";

import Card from "@/components/card.component";
import Link from "next/link";
import { hotels } from "@/mocks/hotels.mock";

export default function Hotels() {
  return (
    <>
      <Header className="mt-[64px]" />
      <Hero
        title={"Шукаєш де заночувати?"}
        header={
          <>
            Готелi, котеджi та будиночки <br /> для вашого вiдпочинку
          </>
        }
        img={HeroBg}
      />
      <div className="container mx-auto -mt-[500px]">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[30px] z-[1]">
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
