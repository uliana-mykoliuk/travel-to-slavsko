import { navLinks } from "@/mocks/nav-links";
import Link from "next/link";

const footerLinks = [
  {
    link: "/",
    label: "Зв'яжiться з нами",
  },
];

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-2 gap-y-[15px] gap-x-[50px] container pb-[50px] md:pb-[100px]">
      <div className="grid flex-col justify-items-center md:justify-items-start ">
        <div className="grid justify-items-center md:justify-items-start">
          <p className="font-bold tracking-[1%] text-[32px] text-[#FBD784]">
            SLAVSKO
          </p>
          <p className="mt-[10px] text-[18px] leading-[32px] text-center md:text-left">
            Дослiджуй красу вершин українських карпат разом з нами
          </p>
        </div>
        <p className="opacity-[30%] mt-[10px] self-end hidden md:block">
          Website was made by Uliana Mykoliuk in 2024. Designed by Kryston
          Schwarze
        </p>
      </div>
      <nav className="list-none grid gap-y-[15px] justify-self-center justify-items-center md:justify-self-end md:justify-items-end">
        {navLinks?.map((item) => (
          <li key={item.link}>
            <Link href={item.link} className="text-white text-[18px]">
              {item.label}
            </Link>
          </li>
        ))}
        {footerLinks?.map((item) => (
          <li key={item.link}>
            <Link href={item.link} className="text-white text-[18px]">
              {item.label}
            </Link>
          </li>
        ))}
      </nav>
        <p className="opacity-[30%] mt-[10px] text-center justify-self-center md:hidden">
          Website was made by Uliana Mykoliuk in 2024. Designed by Kryston
          Schwarze
        </p>
    </footer>
  );
};

export default Footer;
