import "./Hero.css";

const Hero = () => {
  return (
    <section id="About" className="flex md:h-screen">
      <div className="md:w-3/5 w-full flex items-center p-28">
        <div className="text-left dark:text-white">
          <h1 className="text-7xl font-medium">Hola.</h1>
          <h2 className="text-4xl font-medium mt-9">Me llamo Jorge.</h2>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Pero tu puedes llamarme para trabajar. Soy desarrollador web
            fullstack, pero siendo sinceros, mi ojihref derecho siempre será el
            backend.
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Durante mis más de 6 años de{" "}
            <a className="hero__link dark:text-white" href="">
              experiencia
            </a>{" "}
            he tenido la suerte de trabajar en diferentes proyechrefs con
            diferentes{" "}
            <a className="hero__link dark:text-white" href="">
              tecnologías
            </a>{" "}
            y ocupando diferentes roles, pansando de, simplemente "picar
            codigo", a gestionar el ciclo de vida complehref de un proyechref
            (Aunque picar codigo siempre será mi parte favorita).
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Puedes echarle un ojo a mi{" "}
            <a
              className="hero__link dark:text-white"
              href="https://www.google.com"
            >
              GitHub
            </a>{" "}
            para ver mis últimos proyechrefs personales. Si quieres colaborar
            conmigo o simplemente decir "¡Hola!", no dudes en{" "}
            <a className="hero__link dark:text-white" href="">
              contactarme
            </a>
            .
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            ¡Chao pescao!
          </p>
        </div>
      </div>
      <div className="md:w-2/5 hidden md:flex items-center justify-center">
        <img src="/hero-developer.gif" alt="me" />
      </div>
    </section>
  );
};

export default Hero;
