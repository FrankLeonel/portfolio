import AboutMe from "components/AboutMe";
import Footer from "components/Footer";
import Header from "components/Header";
import Knowledge from "components/Knowledge";
import Presentation from "components/Presentation";
import Projects from "components/Projects";
import Skills from "components/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <Presentation />
      <AboutMe />
      <Projects />
      <Skills />
      <Knowledge />
      <Footer />
    </>
  );
};

export default Home;
