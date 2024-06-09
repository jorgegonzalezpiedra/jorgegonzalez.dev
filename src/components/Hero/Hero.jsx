import "./Hero.css";
import {Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="flex">
      <div className="md:w-3/5 w-full flex items-center p-28"> 
        <div className="text-left dark:text-white">
          <h1 className="text-7xl font-medium">Hola.</h1>
          <h2 className="text-4xl font-medium mt-9">Me llamo Jorge.</h2>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Pero tu puedes llamarme para trabajar. Soy desarrollador web
            fullstack, pero siendo sinceros, mi ojito derecho siempre será el
            backend.
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Durante mis más de 6 años de <Link className="hero__link dark:text-white" to={`/experience`}>experiencia</Link> he tenido la suerte de 
            trabajar en diferentes proyectos con diferentes <Link className="hero__link dark:text-white" to={`/`}>tecnologías</Link> y
            ocupando diferentes roles, pansando de, simplemente "picar codigo",
            a gestionar el ciclo de vida completo de un proyecto (Aunque picar
            codigo siempre será mi parte favorita).
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Puedes echarle un ojo a mi <Link className="hero__link dark:text-white" to={"https://github.com/jorgegonzalezpiedra"}>GitHub</Link> para ver mis últimos proyectos personales.
            Si quieres colaborar conmigo o simplemente decir "¡Hola!", no dudes
            en <Link className="hero__link dark:text-white  " to={`/`}>contactarme</Link>.
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            ¡Chao pescao!
          </p>
        </div>
      </div>
      <div className="md:w-2/5 hidden"></div>
    </section>
  );
};

export default Hero;