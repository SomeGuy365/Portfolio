import { useScrollValue } from "../hooks/useScrollValue";
import { useWindowDimesions } from "../hooks/useWindowDimensions";

export const Navbar = () => {
  const scrollposition = useScrollValue();
  const { height } = useWindowDimesions();

  return (
    <>
      {scrollposition < 200 ? (
        <nav className="navhigh">
          <div
            className="navi1"
            onClick={() => {
              window.scrollTo({ top: height, behavior: "smooth" });
            }}
          >
            Projects
          </div>
          <div
            className="navi2"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </div>
          <div
            className="navi2"
            onClick={() => {
              window.scrollTo({ top: height * 4, behavior: "smooth" });
            }}
          >
            Contact Me
          </div>
        </nav>
      ) : (
        <nav className="navlow">
          <div
            className="navilow1"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </div>
          <div
            className="navilow2"
            onClick={() => window.scrollTo({ top: height, behavior: "smooth" })}
          >
            Projects
          </div>
          <div
            className="navilow2"
            onClick={() => {
              window.scrollTo({ top: height * 4, behavior: "smooth" });
            }}
          >
            Contact Me
          </div>
        </nav>
      )}
    </>
  );
};
