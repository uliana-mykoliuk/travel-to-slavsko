import Image from "next/image";
import PinIcon from "@/assets/icons/pin.svg";

const Card = ({ title, address, bgImg, height }) => {
  return (
    <div
      className={`${
        height === "small" ? "h-[350px]" : "h-[500px]"
      } w-full z-[1] relative`}
    >
      <Image
        alt={title}
        src={bgImg}
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="absolute top-0 left-0 w-full z-1 grid content-end h-full bg-transparent hover:bg-[rgba(11,29,38,0.5)] bg-gradient-to-t from-[#0B1D26] to-transparent p-[15px]">
        <h3 className="font-bold text-[20px] text-center tracking-[1px]">
          {title}
        </h3>
        <div className="flex mb-[50px] mt-[15px]">
          <Image alt="" src={PinIcon} className="mr-[8px] h-[24px]" />
          <address className="text-[#FBD784] text-[14px]">{address}</address>
        </div>
      </div>
    </div>
  );
};

export default Card;
