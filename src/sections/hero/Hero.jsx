import "./Hero.css";
import hero_developer from "../../assets/hero-developer.gif";

const Hero = () => {
  return (
    <section id="About" className="flex md:h-screen">
      <div className="md:w-3/5 w-full flex items-center p-28">
        <div className="text-left dark:text-white">
          <h1 className="text-7xl font-medium">Hola.</h1>
          <h2 className="text-4xl font-medium mt-9">Me llamo Jorge.</h2>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Pero mis amigos me llaman "se me ha roto la impresora, échame una
            mano".
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Soy desarrollador web fullstack, pero siendo sinceros, mi ojito
            derecho es el backend.
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Durante mis más de 6 años de{" "}
            <a className="hero__link dark:text-white" href="#Experience">
              experiencia
            </a>{" "}
            he tenido la suerte de trabajar en diferentes proyectos con
            diferentes{" "}
            <a className="hero__link dark:text-white" href="#Skills">
              tecnologías
            </a>{" "}
            y ocupando diferentes roles, pansando de, simplemente "picar
            codigo", a gestionar el ciclo de vida completo de una aplicación
            web.
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Fuera del codigo, soy una persona activa y me puedes encontrar en la
            cancha de baloncesto o escalando en algún rocodromo.
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Puedes echarle un ojo a mis{" "}
            <a className="hero__link dark:text-white" href="#Projects">
              últimos proyectos
            </a>{" "}
            y si crees que podemos colaborar o simplemente quieres decir
            "¡Hola!", no dudes en{" "}
            <a
              className="hero__link dark:text-white"
              href="https://www.linkedin.com/in/jorge-gonz%C3%A1lez-piedra-9923b112a/"
              target="_blank"
            >
              contactarme
            </a>.
          </p>
        </div>
      </div>
      <div className="md:w-2/5 hidden md:flex items-center justify-center">
        <img src={hero_developer} alt="me" />
      </div>
    </section>
  );
};

export default Hero;
