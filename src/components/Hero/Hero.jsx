import "./Hero.css";
import { Boxes } from "../ui/BackgroundBoxes";
import { cn } from "../../utils/cn.js";

const Hero = () => {
  return (
    <section className="flex h-screen">
      <div className="w-3/5 flex items-center p-28">
        <div className="text-left dark:text-white">
          <h1 className="text-7xl font-medium">Hola.</h1>
          <h2 className="text-4xl font-medium mt-9">Me llamo Jorge.</h2>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Pero tu puedes llamarme para trabajar. Soy desarrollador web
            fullstack, pero siendo sinceros, mi ojito derecho siempre será el
            backend.
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Durante mis más de 6 años de <a href="">experiencia</a> he tenido la suerte de
            trabajar en diferentes proyectos con diferentes <a href="">tecnologías</a> y
            ocupando diferentes roles, pansando de, simplemente "picar codigo",
            a gestionar el ciclo de vida completo de un proyecto (Aunque picar
            codigo siempre será mi parte favorita).
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Fuera del mundo del software, me encanta mantenerme activo. Creo el
            deporte enseña valores importantes y por eso, al salir del trabajo
            posiblemente me encuentres en una cancha de baloncesto o en un
            rocodromo.
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            Puedes echarle un ojo a mi <a href="https://github.com/jorgegonzalezpiedra">GitHub</a> para ver mis últimos proyectos personales.
            Si quieres colaborar conmigo o simplemente decir "¡Hola!", no dudes
            en <a href="">contactarme</a>.
          </p>

          <p className="text-2xl font-light mt-9 leading-relaxed">
            ¡Chao pescao!
          </p>
        </div>
      </div>
      <div className="w-2/5"></div>
    </section>
  );
};

export default Hero;
