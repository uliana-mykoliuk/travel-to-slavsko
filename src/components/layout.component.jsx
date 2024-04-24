import Hero from "@/components/hero.component";
import Header from "@/components/header.component";
import Footer from "@/components/footer.component";

const Layout = ({ children, bgImg, header, title }) => {
  return (
    <>
      <Header className="md:mt-[64px]" />
      <Hero img={bgImg} header={header} title={title} />
      <div className="-mt-[500px] z-[1]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
