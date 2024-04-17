import Image from "next/image";
import Link from "next/link";

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
    <div
      className={`grid z-[1] ${
        position === "normal"
          ? "grid-cols-[minmax(15px,_auto)_minmax(15px,_144px)_minmax(300px,_auto)]"
          : "grid-cols-[minmax(300px,_auto)_minmax(15px,_144px)_minmax(15px,_auto)]"
      } items-center`}
    >
      {position === "normal" ? (
        <div className="relative">
          <div className="absolute top-0 left-0 text-[240px] leading-[240px] text-white font-bold opacity-[30%]">
            {number}
          </div>
          <div className="grid gap-y-[27px] mt-[130px] ml-[160px]">
            <div className="flex items-center">
              <div className="border-b border-[2px] border-[#FBD784] w-[72px] mr-[32px]" />
              <p className="text-[#FBD784] tracking-[6px] text-[18px]">
                {title}
              </p>
            </div>
            <h2 className="font-bold text-[64px] leading-[70px]">{header}</h2>
            <p className="text-[18px]">{text}</p>
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
      ) : (
        <Image className="w-full h-auto" alt="" src={img} />
      )}
      <div />
      {position === "inverted" ? (
        <div className="relative">
          <div className="absolute top-0 left-0 text-[240px] leading-[240px] text-white font-bold opacity-[30%]">
            {number}
          </div>
          <div className="grid gap-y-[27px] mt-[130px] ml-[160px]">
            <div className="flex items-center">
              <div className="border-b border-[2px] border-[#FBD784] w-[72px] mr-[32px]" />
              <p className="text-[#FBD784] tracking-[6px] text-[18px]">
                {title}
              </p>
            </div>
            <h2 className="font-bold text-[64px] leading-[70px]">{header}</h2>
            <p className="text-[18px]">{text}</p>
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
      ) : (
        <Image className="w-full h-auto" alt="" src={img} />
      )}
    </div>
  );
};

export default NumberImageText;
