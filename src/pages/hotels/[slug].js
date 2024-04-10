import Footer from "@/components/footer.component";
import Header from "@/components/header.component";
import { hotels } from "@/mocks/hotels.mock";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState();

  const [hotel] = hotels.filter(
    (item) => item.id === Number(router.query.slug)
  );

  const { title, images, description, address, bookingLink } = hotel;

  useEffect(() => {
    if (images && images.length > 0) {
      setActiveImage(images[0]);
    }
  }, [images]);

  return (
    <>
      <Header />
      <main className="mt-[50px] bg-white overflow-y-auto">
        <div className="max-w-[1280px] mx-auto px-[50px] py-[100px] h-full grid">
          <div className="grid grid-cols-2 gap-x-[50px] h-[100%]">
            <Image src={activeImage} className="h-[100%] object-cover" />
            <div>
              <h1 className="text-main text-[48px] font-bold">{title}</h1>
              <address className="text-accent">{address}</address>
              <p className="text-main text-[18px] mt-[15px]">{description}</p>
              <p className="text-[#cacaca] text-[14px] mt-[30px]">
                Інформацію взято з сайту Booking.com в квітні 2024
              </p>
            </div>
            <div className="flex justify-between mt-[30px]">
              {images.map((image, idx) => {
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setActiveImage(image);
                    }}
                  >
                    <Image
                      src={image}
                      className="w-[75px] h-[75px] object-cover"
                    />
                  </button>
                );
              })}
            </div>
            <div className="flex mt-[30px] items-end">
              <Link
                href={bookingLink}
                target="blank"
                className="inline-block bg-[#003b95] py-[15px] px-[20px] h-auto"
              >
                Забронюй номер на Booking.com
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
