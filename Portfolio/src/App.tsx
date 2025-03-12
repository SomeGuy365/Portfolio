import "./App.css";
import { Navbar } from "./Components/navbar";
import Projectcomponent from "./Components/project";
import { useScrollValue } from "./hooks/useScrollValue";
import { useWindowDimesions } from "./hooks/useWindowDimensions";

function Showcase() {
  return (
    <>
      <div className="showcase-cont">
        <div className="showcase-inner">
          <div className="showcase-title">Hi, I'm Ethan</div>
          <div className="showcase-desc">I code sometimes</div>
          <div className="showcase-fdesc">
            I'm a programmer who enjoys solving problems and building useful
            applications. I focus on writing clean, efficient code and
            continuously learning new technologies. - ChatGPT
          </div>
        </div>
      </div>
    </>
  );
}

function Contact() {
  return (
    <div className="contact-cont">
      <div className="contact-links">
        <div className="contact-links-github">
          Github <br />
          <img
            src="\src\assets\Github-Logo.svg"
            alt="nu uh"
            width={50}
            height={50}
          />
        </div>
        <div className="contact-links-linkedin">
          LinkedIn <br />
          <img
            src="\src\assets\Linkedin_icon.svg"
            alt="nu uh"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div
        className="contact-email"
        onClick={() => navigator.clipboard.writeText("ethanjdenton1@gmail.com")}
      >
        ethanjdenton1@gmail.com
      </div>
    </div>
  );
}

function App() {
  const scrollposition = useScrollValue();
  const { height } = useWindowDimesions();

  window.onscrollend = () => {
    if (scrollposition > height - 200 && scrollposition < height * 3 + 10) {
      let closest: number = Math.round(scrollposition / height);
      let pro = document.getElementById(String(closest));
      if (pro !== null) {
        window.scrollTo({ top: height * closest, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-scroll-wrapper">
        <Showcase />
        <div className="project-scroll-wrapper">
          <Projectcomponent
            title="Project 1"
            info="info"
            skills={["one", "two"]}
            languages={["HTML", "Javascript"]}
            id="1"
          />
          <Projectcomponent
            title="Project 2"
            info="info"
            skills={["one", "two"]}
            languages={["one", "two"]}
            id="2"
          />
          <Projectcomponent
            title="Project 3"
            info="info"
            skills={["one", "two"]}
            languages={["one", "two"]}
            id="3"
          />
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;
