import Hero from "@/components/hero.component";
import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import { useRef } from "react";

const Layout = ({ children, bgImg, header, title }) => {
  const nextSectionRef = useRef(null);
  return (
    <>
      <Header className="md:mt-[64px]" />
      <Hero
        img={bgImg}
        header={header}
        title={title}
        nextSectionRef={nextSectionRef}
      />
      <div className="-mt-[500px] z-[1]" ref={nextSectionRef}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
