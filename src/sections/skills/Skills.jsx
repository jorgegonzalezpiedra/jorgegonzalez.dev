import "./Skills.css";
import { OrbitingCirclesDemo } from "../../components/orbitingcircles/OrbitingCircles";
import { FlipWords } from "../../components/ui/flip-words";

const Skills = () => {
  const words = ["Java", "Spring", "Javascript", "Html", "Css", "Sql"]; //

  return (
    <>
      <section className="flex">
        <div className="md:w-3/5 w-full flex items-center justify-center">
          <OrbitingCirclesDemo />
        </div>
        <div className="md:w-3/5 hidden md:flex items-center justify-left">
          <div className="h-[40rem] flex justify-center items-center px-4">
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
              Construyamos algo chulo con
              <br />
              <FlipWords words={words} duration={1000} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
