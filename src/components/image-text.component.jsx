import Image from "next/image";

const ImageTextComponent = ({ title, text, img, imgPosition = "left" }) => {
  return imgPosition === "left" ? (
    <section className="grid mx-auto grid-cols-[450px_auto] gap-x-[50px] mb-[100px] items-center">
      <div className="relative h-full min-h-[500px]">
        <Image
          src={img}
          alt={title}
          className="w-full h-full object-cover absolute"
        />
      </div>
      <div className="">
        <h2 className="font-extrabold text-[64px] leading-[70px] text-accent">
          {title}
        </h2>
        <p className="text-[18px] mt-[30px]">{text}</p>
      </div>
    </section>
  ) : (
    <section className="grid mx-auto grid-cols-[auto_450px] gap-x-[50px] mb-[100px] items-center">
      <div className="">
        <h2 className="font-extrabold text-[64px] leading-[70px] text-accent">
          {title}
        </h2>
        <p className="text-[18px] mt-[30px]">{text}</p>
      </div>
      <div className="relative h-full min-h-[500px]">
        <Image
          src={img}
          alt={title}
          className="w-full h-full object-cover absolute"
        />
      </div>
    </section>
  );
};

export default ImageTextComponent;
