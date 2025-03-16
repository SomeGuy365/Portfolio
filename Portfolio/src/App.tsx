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
  let timer2: number;
  const emailclick = () => {
    navigator.clipboard.writeText("ethanjdenton1@gmail.com");
    let element = document.getElementById("contact-email-hover");
    if (element) {
      if (timer2 !== null) {
        console.log("dissapear");
        element.style.opacity = "1";
      }
      timer2 = window.setTimeout(() => {
        element.style.opacity = "0";
      }, 2000);
    }
  };

  return (
    <div className="contact-cont">
      <div className="contact-links">
        <a href="https://github.com/SomeGuy365" target="_blank">
          <div className="contact-links-github">
            Github <br />
            <img
              src="\src\assets\Github-Logo.svg"
              alt="nu uh"
              width={50}
              height={50}
            />
          </div>
        </a>
        <a>
          <div className="contact-links-linkedin">
            LinkedIn <br />
            <img
              src="\src\assets\Linkedin_icon.svg"
              alt="nu uh"
              width={50}
              height={50}
            />
          </div>
        </a>
      </div>
      <div className="contact-email-hover" id="contact-email-hover">
        Copied &#10004;
      </div>
      <div className="contact-email" onClick={emailclick}>
        ethanjdenton1@gmail.com
      </div>
    </div>
  );
}

function App() {
  const scrollposition = useScrollValue();
  const { height } = useWindowDimesions();

  let timer: number;

  window.onscrollend = () => {
    if (timer !== null) {
      console.log("clear");
      window.clearTimeout(timer);
    }

    timer = window.setTimeout(() => {
      if (scrollposition > height - 200 && scrollposition < height * 3 + 10) {
        let closest: number = Math.round(scrollposition / height);
        window.scrollTo({ top: height * closest, behavior: "smooth" });
        console.log("Stopped:" + closest);
      }
    }, 100);
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
          />
          <Projectcomponent
            title="Project 2"
            info="info"
            skills={["one", "two"]}
            languages={["one", "two"]}
          />
          <Projectcomponent
            title="Project 3"
            info="info"
            skills={["one", "two"]}
            languages={["one", "two"]}
          />
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;
