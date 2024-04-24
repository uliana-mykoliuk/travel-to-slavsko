import HeroBg from "@/assets/hotels/hero-bg.jpeg";

import Card from "@/components/card.component";
import Link from "next/link";
import { hotels } from "@/mocks/hotels.mock";
import Layout from "@/components/layout.component";

export default function Hotels() {
  return (
    <Layout
      title={"Шукаєш де заночувати?"}
      header={
        <>
          Готелi, котеджi та будиночки <br /> для вашого вiдпочинку
        </>
      }
      bgImg={HeroBg}
    >
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[30px]">
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
      </div>
    </Layout>
  );
}
