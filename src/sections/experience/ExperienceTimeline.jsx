import { Timeline } from "../../components/ui/timeline";
import {
  JavaExperienceSvg,
  HtmlExperienceSvg,
  CssExperienceSvg,
  JavascriptExperienceSvg,
  SpringExperienceSvg,
  JQueryExperienceSvg,
  HibernateExperienceSvg,
  SqlExperienceSvg,
  JunitExperienceSvg,
} from "../../assets/icons/icons";

export default function ExperienceTimeline() {
  const data = [
    {
      title: "Actualidad",
      company: "Onetec",
      rol: "Analista",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-300 font-normal mb-8">
            <p>
              Aquí me encuentro ahora, en Onetec, una consultura pequeña donde
              todos nos tratamos como si fuésemos amigos del barrio de toda la
              vida.
            </p>
            Trabajo como Analista java miembro del equipo de desarrollo de{" "}
            <span className="font-bold dark:text-white">Linea Directa </span>
            realizando{" "}
            <span className="font-bold dark:text-white">
              {" "}
              tareas de analisis
            </span>{" "}
            y participando en{" "}
            <span className="font-bold dark:text-white">
              {" "}
              desarrollos de nuevas funcionalidades
            </span>{" "}
            sobre la aplicación web del area de clientes y la aplicación de
            cálculo de seguros.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300">
              ✅ Analisis de requisitos
            </div>
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300">
              ✅ Elaboración de documentación técnica y funcional
            </div>
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300">
              ✅ Programación de evolutivos y desarrollos
            </div>
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300">
              ✅ Contacto con cliente y usuarios
            </div>
          </div>
          <div className="flex flex-row mx-auto mb-8">
            <JavaExperienceSvg />
            <SpringExperienceSvg />
            <SqlExperienceSvg />
            <HtmlExperienceSvg />
            <CssExperienceSvg />
            <JavascriptExperienceSvg />
            <JQueryExperienceSvg />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./lineadirecta_1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="./lineadirecta_2.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023-2023",
      company: "Minsait",
      rol: "Programador Senior",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-300 font-normal mb-8">
            <p>
              Minsait o INDRA como prefieras llamarlo, por diversas cuestiones
              no pasé mucho tiempo aquí, pero la experiencia fue enriquecedora.
            </p>
            Fuí programador senior en la Agencia Tributaria enfocado en el
            <span className="font-bold dark:text-white">
              {" "}
              desarrollo y testing
            </span>{" "}
            de nuevos{" "}
            <span className="font-bold dark:text-white">
              servicios web
            </span>{" "}
            para la comunicación entre la agencia y distintos bancos.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300">
              ✅ Analisis de requisitos
            </div>
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300">
              ✅ Elaboración de documentación técnica y funcional
            </div>
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300">
              ✅ Programación de evolutivos y desarrollos
            </div>
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300">
              ✅ Contacto con cliente y usuarios
            </div>
          </div>
          <div className="flex flex-row mx-auto mb-8">
            <JavaExperienceSvg />
            <SpringExperienceSvg />
            <HibernateExperienceSvg />
            <JunitExperienceSvg />
            <SqlExperienceSvg />
            <HtmlExperienceSvg />
            <CssExperienceSvg />
            <JavascriptExperienceSvg />
            <JQueryExperienceSvg />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./agenciatributaria_1.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022-2023",
      company: "Break",
      rol: "Descanso profesional",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-300 font-normal mb-8">
            <p>¡STOP!</p>
            Eso fué lo que dije a finales de 2022. Llegó el conocido "Burnout"
            asi en vez de seguir y agravar el problema, decidí parar y
            descansar.
            <p>
              Aproveche este año para leer, hacer algún viaje. También hice un
              curso sobre análisis de datos en{" "}
              <a
                href="https://www.tokioschool.com/formaciones/cursos-analisis-datos/big-data/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 dark:text-blue-400 font-semibold"
              >
                Tokio School.
              </a>
            </p>
          </p>
        </div>
      ),
    },
    {
      title: "2018-2021",
      company: "Programador",
      rol: "Neoris",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-300 font-normal mb-8">
            <p>
              ¡Aqui fue donde empezo oficialmente mi carrera en el desarrollo
              web!
            </p>
            Fuí programador java en el proyecto Madrid Digital durante casi 4
            años donde participé en desarrollos sobre diferentes{" "}
            <span className="font-bold dark:text-white">
              aplicaciones web internas de la Comunidad de Madrid
            </span>
            . Entre ellas recuerdo con cariño DESA para la gestion de
            desfibriladores en recintos o SOCO para la gestion de socorristas en
            la Comunidad de Madrid.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300">
              ✅ Elaboración de documentación técnica y funcional
            </div>
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300">
              ✅ Programación de evolutivos y desarrollos
            </div>
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300">
              ✅ Resolución de incidencias
            </div>
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300">
              ✅ Contacto con cliente y usuarios
            </div>
          </div>
          <div className="flex flex-row mx-auto mb-8">
            <JavaExperienceSvg />
            <SpringExperienceSvg />
            <HibernateExperienceSvg />
            <SqlExperienceSvg />
            <HtmlExperienceSvg />
            <CssExperienceSvg />
            <JavascriptExperienceSvg />
            <JQueryExperienceSvg />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./madriddigital_1.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2017-2018",
      company: "Onetec",
      rol: "Programador Junior",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-300 font-normal mb-8">
            <p>
              Mi primera experiencia laboral. Aquí aprendí muchas cosas nuevas,
              dentro y fuera del mundo de la programación.
            </p>
            Fuí miembro del equipo de mantenimiento realizando tareas de{" "}
            <span className="font-bold dark:text-white">
              {" "}
              desarrollo y resolución
            </span>{" "}
            de incidencias sobre la aplicación CRM de Vodafone.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300">
              ✅ Programación de evolutivos y desarrollos
            </div>
          </div>
          <div className="flex flex-row mx-auto mb-8">
            <JavaExperienceSvg />
            <SqlExperienceSvg />
            <HtmlExperienceSvg />
            <CssExperienceSvg />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./vodafone_1.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
