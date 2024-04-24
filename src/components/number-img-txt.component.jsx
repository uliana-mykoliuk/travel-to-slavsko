import Image from "next/image";
import Link from "next/link";

const NumberTextComponent = ({ number, title, header, text, link }) => {
  return (
    <div className="relative mb-[30px] md:mb-[0px]">
      <div className="absolute top-0 left-0 text-[140px] md:text-[240px] md:leading-[240px] text-white font-bold opacity-[30%]">
        {number}
      </div>
      <div className="flex flex-col gap-y-[27px] pt-[130px] xl:pl-[160px]">
        <div className="flex items-center">
          <div className="border-b border-[2px] border-[#FBD784] w-[72px] mr-[32px]" />
          <p className="text-[#FBD784] tracking-[6px] text-[18px]">{title}</p>
        </div>
        <h2 className="font-bold text-[36px] md:text-[48px] xl:text-[64px] leading-[70px]">
          {header}
        </h2>
        <p className="text-[16px] md:text-[18px]">{text}</p>
        <Link href={link} className="flex items-center">
          <p className="text-[#FBD784] text-[18px] mr-[8px] leading-[18px]">
            читати бiльше
          </p>
          <span className="text-[#FBD784] text-[36px] leading-[36px]">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
};

const NumberImageText = ({
  position,
  number,
  title,
  header,
  text,
  img,
  link,
}) => {
  return (
    <div className="container z-[1]">
      <div
        className={`flex md:grid gap-x-[24px] xl:gap-x-[50px] ${
          position === "normal"
            ? "flex-col md:grid-cols-[minmax(300px,_1fr)_minmax(300px,_1fr)] xl:grid-cols-[minmax(700px,_1fr)_minmax(300px,_1fr)]"
            : "flex-col-reverse md:grid-cols-[minmax(300px,_1fr)_minmax(300px,_1fr)] xl:grid-cols-[minmax(300px,_1fr)_minmax(700px,_1fr)]"
        } items-center`}
      >
        {position === "normal" ? (
          <>
            <NumberTextComponent
              number={number}
              title={title}
              header={header}
              text={text}
              link={link}
            />
            <Image className="w-full h-auto" alt="" src={img} />
          </>
        ) : (
          <>
            <Image className="w-full h-auto" alt="" src={img} />
            <NumberTextComponent
              number={number}
              title={title}
              header={header}
              text={text}
              link={link}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NumberImageText;
