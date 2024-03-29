import Link from "next/link";
import { navLinks } from "./header.component";

const footerLinks = [
  {
    link: "/",
    label: "Зв'яжіться з нами",
  },
];

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 mb-[100px]">
      <div className="grid flex-col justify-between">
        <div>
          <p className="font-extrabold tracking-[1%] text-[32px] text-[#FBD784]">SLAVSKO</p>
          <p className="mt-[24px] text-[18px] leading-[32px]">
            Досліджуй красу вершин українських карпат разом з нами
          </p>
        </div>
        <p className="opacity-[30%] mt-[20px] self-end">
          Website was made by Uliana Mykoliuk in 2024.
        </p>
      </div>
      <nav className="list-none grid gap-y-[30px] justify-self-end justify-items-end">
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
    </footer>
  );
};

export default Footer;
