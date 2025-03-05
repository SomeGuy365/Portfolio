import { useState } from "react";
import "./App.css";
import { useScrollValue } from "./hooks/useScrollValue";
import { useWindowDimesions } from "./hooks/useWindowDimensions";

function Navbar() {
  const scrollposition = useScrollValue();
  const { height, width } = useWindowDimesions();
  const [active, setactive] = useState(Number);

  return (
    <>
      {scrollposition < height ? (
        <nav className="navhigh">
          <div
            className="navi1"
            onClick={() => {
              setactive(1);
            }}
            style={
              active == 1
                ? {
                    filter: "drop-shadow(0 0 5px #3E5179)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }
                : { flex: 1 }
            }
          >
            Projects
          </div>
          <div
            className="navi2"
            onClick={() => {
              setactive(2);
            }}
            style={
              active == 2
                ? {
                    filter: "drop-shadow(0 0 5px #3E5179)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }
                : { flex: 1 }
            }
          >
            Home
          </div>
          <div
            className="navi2"
            onClick={() => {
              setactive(3);
            }}
            style={
              active == 3
                ? {
                    filter: "drop-shadow(0 0 5px #3E5179)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }
                : { flex: 1 }
            }
          >
            Contact Me
          </div>
        </nav>
      ) : (
        <nav className="navlow">
          <div className="navilow1">Projects</div>
          <div className="navilow2">Home</div>
          <div className="navilow2">Contact Me</div>
        </nav>
      )}
    </>
  );
}

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

function Projects() {
  return (
    <>
      <div className="project">
        <div className="project-img"></div>
        <div className="project-desc">
          <div className="project-title">[Title]</div>
          <div className="project-info">[long parahgraph]</div>
          <div className="project-skills">
            Skills I learnt:
            <ul>
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
              <li>Skill 4</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-desc">left</div>
        <div className="project-img">right</div>
      </div>
      <div className="project">
        <div className="project-img">left</div>
        <div className="project-desc">right</div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-scroll-wrapper">
        <Showcase />
        <Projects />
      </div>
    </>
  );
}

export default App;
