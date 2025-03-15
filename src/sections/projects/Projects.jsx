import { WobbleCard } from "../../components/ui/wobble-card";
import personagen from "../../assets/personagen.jpg";
import sonsofcadia from "../../assets/sonsofcadia.png";
import tipotest from "../../assets/tipotest.png";
import visioviewer from "../../assets/visioviewer.png";
import springbootTailwindTemplate from "../../assets/springboot-tailwind-template.png";

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
          containerClassName="col-span-1 lg:col-span-3 h-full bg-red-700 min-h-[500px] lg:min-h-[300px] bg-white dark:border-white dark:bg-gray-800 border-black border-2"
          className=""
          link={"https://tipotest.es/"}
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] dark:text-white">
              TipoTest
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 dark:text-white">
              Mi proyecto mas grande.
            </p>
            <p className="mt-4 text-left  text-base/6 dark:text-white">
              TipoTest es una aplicación web pensada para ayudar a la gente a
              prepar exámenes, opsiciones, y, en general a estudiar con un
              enfoque basado en la realización de exámenes. TipoTest genera
              exámenes tipo test a partir de cualquier temario lo  
              que hace más fácil la preparación de exámenes con temarios
              pecualiares o de conocimientos muy específicos.
            </p>
          </div>
          <img
            src={tipotest}
            width={700}
            height={600}
            alt="linear demo"
            className="absolute -right-4 lg:-right-[2%] filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-1 h-full bg-red-700 min-h-[500px] lg:min-h-[300px] bg-white dark:border-white dark:bg-gray-800 border-black border-2"
          className=""
          link={"https://github.com/jorgegonzalezpiedra/springboot-tailwind-starter"}
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] dark:text-white">
              SpringBoot + Tailwindcss V4 template
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 dark:text-white">
              Un starter template para generar más rápido aplicaciones web con SpringBoot y Tailwindcss. 
              Basta con clonar el repositorio y empezar a trabajar.
            </p>
          </div>
          <img
            src={springbootTailwindTemplate}
            width={700}
            height={600}
            alt="linear demo"
            className="absolute -right-4 lg:-right-[2%] filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2   h-full bg-red-700 min-h-[500px] lg:min-h-[300px] bg-white dark:border-white dark:bg-gray-800 border-black border-2"
          className=""
          link={"https://sonsofcadia.vercel.app/"}
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] dark:text-white">
              Sons of Cadia
            </h2>
            <p className="mt-4 text-left  text-base/6 dark:text-white">
              Rediseño de página web para la asociación Sons of Cadia ubicada en
              Pinto, Madrid.
            </p>
            <p className="mt-4 text-left  text-base/6 dark:text-white">
              La pagina fue rediseñada por mi, pasando de una página web hecha
              en WordPress a una aplicacion web dinámica hecha con React,
              Tailwind y Supabase que cuenta con usuarios y sistema de reservas.
            </p>
          </div>
          <img
            src={sonsofcadia}
            width={500}
            height={500}
            alt="linear demo"
            className="absolute -right-4 lg:-right-[4%] filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-3 h-full bg-red-700 min-h-[500px] lg:min-h-[300px] bg-white dark:border-white dark:bg-gray-800 border-black border-2"
          className=""
          link={"https://visioviewer.vercel.app/"}
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] dark:text-white">
              VisioViewer
            </h2>
            <p className="mt-4 text-left  text-base/6 dark:text-white">
              Herramienta creada en mi etapa laboral en Onetec para agilizar
              procesos internos
            </p>
            <p className="mt-4 text-left  text-base/6 dark:text-white">
              VisioViewer permite transformar un xml a una diagrama de Microsoft Visio
              (herramienta de control de flujos algo obsoleta que se utiliza en algunos proyectos legacy) 
              de manera que modificar el xml sea mucho mas fácil al tener una ayuda visual.
            </p>
          </div>
          <img
            src={visioviewer}
            width={700}
            height={700}
            alt="VisioViewer image"
            className="absolute -right-2 lg:-right-[2%] filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-white dark:border-white dark:bg-gray-800 border-black border-2 min-h-[500px] lg:min-h-[300px]"
          className=""
          link={"https://jorgegonzalezpiedra.github.io/personagen-v2-frontend/"}
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] dark:text-white">
              PersonaGen
            </h2>
            <p className="mt-4 text-left  text-base/6 dark:text-white">
              Aplicación web para la generacion de datos aleatorios de
              documentos y perfiles de usuario.
            </p>
            <p className="mt-4 text-left  text-base/6 dark:text-white">
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
          containerClassName="col-span-1 min-h-[300px] bg-white dark:border-white dark:bg-gray-800 border-black border-2"
          link={"https://jorgegonzalezpiedra.github.io/camel-type/"}
        >
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] dark:text-white">
            CamelType
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 dark:text-white">
            Aplicacion web de type testing
          </p>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 dark:text-white">
            Hecha con HTML, CSS y Javascript
          </p>
        </WobbleCard>
      </div>
    </section>
  );
};

export default Projects;
