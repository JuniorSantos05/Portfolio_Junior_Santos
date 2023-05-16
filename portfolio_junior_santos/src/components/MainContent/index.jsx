import "./maincontent.sass";
import About from "../About";
import Projects from "../Projects";
import Technologies from "../Technologies";

const MainContent = () => {
  return (
    <main id="main_content">
      <About />
      <Technologies />
      <Projects />
    </main>
  );
};

export default MainContent;
