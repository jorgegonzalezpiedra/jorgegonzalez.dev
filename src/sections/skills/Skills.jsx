import { OrbitingCirclesComponent } from "../../components/orbitingcircles/OrbitingCircles";
import { FlipWords } from "../../components/ui/flip-words";

const Skills = () => {
  const words = [
    "Java",
    "Spring",
    "Javascript",
    "Html",
    "Css",
    "Sql",
    "Hibernate",
    "Git",
  ]; //

  return (
    <section id="Skills">
      <div className="flex flex-col items-center justify-center mt-10 dark:text-white">
        <h1 className="text-7xl font-medium">Tecnologías</h1>
      </div>
      <div className="flex">
        <div className="md:w-3/5 w-full flex items-center justify-center">
          <OrbitingCirclesComponent />
        </div>
        <div className="md:w-3/5 hidden md:flex items-center justify-left">
          <div className="h-[40rem] flex justify-center items-center px-4">
            <div className="text-4xl font-light mx-auto text-black dark:text-white">
              Construyamos algo chulo con
              <FlipWords words={words} duration={1000} className={"font-semibold"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
