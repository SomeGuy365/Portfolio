import "./App.css";
import { Navbar } from "./Components/navbar";
import Projectcomponent from "./Components/project";
import { useScrollstopped } from "./hooks/useScrollstopped";
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
  return <div className="contact-cont">hellow</div>;
}

function App() {
  const scrollposition = useScrollValue();
  const { height } = useWindowDimesions();

  window.onscrollend = () => {
    if (scrollposition > height && scrollposition < height* 3) {
      console.log("in bounds")
      let closest : number = Math.round(scrollposition/height)
      console.log("closest:" + closest)
      let pro = document.getElementById(String(closest))
      if (pro !== null) {
        pro.animate({scrollTop: 0})
      }
    }
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-scroll-wrapper">
        <Showcase />
        <div
          className="project-scroll-wrapper"
          // style={
          //   scrollposition > height - 10 && scrollposition < height * 2
          //     ? {
          //         scrollSnapType: "y mandatory",
          //         overflowY: "scroll",
          //       }
          //     : {
          //         overflowY: "hidden",
          //       }
          // }
        >
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
