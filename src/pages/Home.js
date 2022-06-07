import AboutMe from "components/AboutMe";
import Footer from "components/Footer";
import Header from "components/Header";
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 id="skills">Skills</h1>
      <Footer />
    </>
  );
};

export default Home;
