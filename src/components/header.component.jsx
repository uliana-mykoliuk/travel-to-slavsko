import Link from "next/link";

export const navLinks = [
  {
    label: "Проживання",
    link: "rent",
  },
  {
    label: "Їжа",
    link: "food",
  },
  {
    label: "Розваги",
    link: "entertainmant",
  },
];

const Header = () => {
  return (
    <header className="absolute top-0 w-full pt-[64px] px-[80px] flex justify-between items-center z-[1]">
      <p className="font-extrabold tracking-[1%] text-[32px]">
        SLAVSKO
      </p>
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
