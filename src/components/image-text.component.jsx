import Image from "next/image";

const TextComponent = ({ title, text }) => {
  return (
    <div>
      <h2 className="font-bold text-[32px] md:text-[64px] md:leading-[70px] text-accent">
        {title}
      </h2>
      <p className="text-[16px] md:text-[18px] mt-[30px]">{text}</p>
    </div>
  );
};

const ImageTextComponent = ({ title, text, img, imgPosition = "left" }) => {
  return (
    <div className="container">
      {imgPosition === "left" ? (
        <section className="flex flex-col-reverse md:grid md:grid-cols-2 xl:grid-cols-[450px_1fr] gap-x-[50px] gap-y-[30px] md:items-center">
          <div className="md:relative h-[80vh] md:h-full min-h-[500px]">
            <Image
              src={img}
              alt={title}
              className="w-full h-full object-cover md:absolute"
            />
          </div>
          <TextComponent title={title} text={text} />
        </section>
      ) : (
        <section className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-[1fr_450px] gap-x-[50px] gap-y-[30px] md:items-center">
          <TextComponent title={title} text={text} />
          <div className="md:relative h-[80vh] md:h-full min-h-[500px]">
            <Image
              src={img}
              alt={title}
              className="w-full h-full object-cover md:absolute"
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default ImageTextComponent;
