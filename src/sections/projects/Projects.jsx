import { WobbleCard } from "../../components/ui/wobble-card";
import personagen from "../../assets/personagen.jpg";
import sonsofcadia from "../../assets/sonsofcadia.png";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="flex flex-col items-center p-2 justify-center mt-10 dark:text-white"
    >
      <div>
        <h1 className="text-7xl font-medium">Proyectos</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-10">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
          link={"https://jorgegonzalezpiedra.github.io/personagen-v2-frontend/"}
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              PersonaGen
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Aplicación web para la generacion de datos aleatorios de
              documentos y perfiles de usuario.
            </p>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Hecha con Spring React y Tailwind y desplegada con Fly.io y Github
            </p>
          </div>
          <img
            src={personagen}
            width={600}
            height={500}
            alt="linear demo"
            className="absolute -right-4 lg:-right-[20%] filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 min-h-[300px]"
          link={"https://jorgegonzalezpiedra.github.io/camel-type/"}
        >
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            CamelType
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Aplicacion web de tpye testing
          </p>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Hecha con HTML, CSS y Javascript
          </p>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-3 h-full bg-red-700 min-h-[500px] lg:min-h-[300px]"
          className=""
          link={"https://sonsofcadia.vercel.app/"}
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Sons of Cadia
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Rediseño de página web para la asociación Sons of Cadia ubicada en Pinto, Madrid.
            </p>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              La pagina fue rediseñada por mi, pasando de una página web hecha en WordPress 
              a una aplicacion estática hecha con React, Tailwind y Supabase. La actual aplicacion cuenta con usuarios y sistema de reservas 
            </p>
          </div>
          <img
            src={sonsofcadia}
            width={600}
            height={600}
            alt="linear demo"
            className="absolute -right-4 lg:-right-[5%] filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
  );
};

export default Projects;
