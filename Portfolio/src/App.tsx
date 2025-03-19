import "./App.css";
import { Contact } from "./Components/contact";
import { Navbar } from "./Components/navbar";
import Projectcomponent from "./Components/project";
import { useScrollValue } from "./hooks/useScrollValue";
import { useWindowDimesions } from "./hooks/useWindowDimensions";
import { Showcase } from "./Components/Showcase";

function App() {
  const scrollposition = useScrollValue();
  const { height } = useWindowDimesions();

  //SCROLL SNAPPING

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
      <Showcase />
      <div>
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
    </>
  );
}

export default App;
