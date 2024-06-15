import "./Skills.css";
import { OrbitingCirclesDemo } from "../../components/orbitingcircles/OrbitingCircles";
import "react-vertical-timeline-component/style.min.css";

const Skills = () => {
  return (
    <>
      <section className="flex">
        <div className="md:w-3/5 w-full flex items-center justify-center">
          <OrbitingCirclesDemo/>
        </div>
        <div className="md:w-3/5 hidden md:flex items-center justify-left">
          Lista de tecnologias
        </div>
      </section>
      {/* <DockBar /> */}
    </>
  );
};

export default Skills;
