import Link from "next/link";

export const navLinks = [
  {
    label: "Проживання",
    link: "/hotels",
  },
  {
    label: "Їжа",
    link: "food",
  },
  {
    label: "Розваги",
    link: "entertainment",
  },
];

const Header = ({ className }) => {
  return (
    <header
      className={`absolute top-0 w-full h-[48px] px-[80px] flex justify-between items-center z-[1] ${className}`}
    >
      <Link href="/" className="font-bold tracking-[1%] text-[32px]">
        SLAVSKO
      </Link>
      <nav className="list-none flex gap-x-[30px]">
        {navLinks?.map((item) => (
          <li key={item.link}>
            <Link href={item.link} className="text-[18px]">
              {item.label}
            </Link>
          </li>
        ))}
      </nav>
    </header>
  );
};

export default Header;
