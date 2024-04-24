import Link from "next/link";
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { navLinks } from "@/mocks/nav-links";

export const Header = ({ className }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <header
      className={`absolute top-0 w-full h-[48px] px-[40px] md:px-[80px] flex justify-between items-center z-[1] ${className}`}
    >
      <Link href="/" className="font-bold tracking-[1%] text-[32px]">
        SLAVSKO
      </Link>
      {/* Desktop navigation */}
      <nav className="list-none gap-x-[30px] hidden md:flex">
        {navLinks?.map((item) => (
          <li key={item.link}>
            <Link href={item.link} className="text-[18px]">
              {item.label}
            </Link>
          </li>
        ))}
      </nav>

      {/* Mobile burger menu */}
      <div ref={ref} className="md:hidden">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-main"
            >
              <ul className="grid gap-2">
                {navLinks?.map((item, idx) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={item.link}
                    className="w-full p-[0.08rem]"
                  >
                    <Link
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between w-full p-5"
                    >
                      <span className="flex gap-1 text-lg">{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
