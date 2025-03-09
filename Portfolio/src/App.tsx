import "./App.css";
import { Navbar } from "./Components/navbar";
import Projectcomponent from "./Components/project";

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

// function Projects() {
//   return (
//     <>
//       <div className="project">
//         <div className="project-img"></div>
//         <div className="project-desc">
//           <div className="project-title">[Title]</div>
//           <hr style={{width: '50%',marginLeft: 0}}/>
//           <div className="project-info">[long parahgraph]</div>
//           <div className="project-list-cont">
//             <div className="project-skills">
//               Skills I learnt:
//               <ul>
//                 <li>Skill 1</li>
//                 <li>Skill 2</li>
//                 <li>Skill 3</li>
//                 <li>Skill 4</li>
//               </ul>
//             </div>
//             <div className="project-lang">
//               Languages used:
//               <ul>
//                 <li>HTML</li>
//                 <li>CSS</li>
//                 <li>Javascript</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="project">
//         <div className="project-desc">left</div>
//         <div className="project-img">right</div>
//       </div>
//       <div className="project">
//         <div className="project-img">left</div>
//         <div className="project-desc">right</div>
//       </div>
//     </>
//   );
// }

function App() {

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-scroll-wrapper">
        <Showcase />
        <div className="project-scroll-wrapper" id="project-scroll-wrapper">
          <Projectcomponent
            title="Project 1"
            info="info"
            skills={["one", "two"]}
            languages={["one", "two"]}
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
