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

function App() {
  const scrollposition = useScrollValue();
  const { height } = useWindowDimesions();

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-scroll-wrapper">
        <Showcase />
        <div
          className="project-scroll-wrapper"
          style={
            scrollposition > height - 40
              ? {
                  scrollSnapType: "y mandatory",
                  overflowY: "scroll",
                }
              : {
                  backgroundColor: "blue",
                }
          }
        >
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
      </div>
    </>
  );
}

export default App;
