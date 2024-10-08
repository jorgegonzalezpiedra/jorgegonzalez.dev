import { HoverEffect } from "../../components/ui/card-hover-effect";
import {
  JavaExperienceSvg,
  HtmlExperienceSvg,
  CssExperienceSvg,
  JavascriptExperienceSvg,
  SpringExperienceSvg,
  JQueryExperienceSvg,
  HibernateExperienceSvg,
  SqlExperienceSvg,
  JunitExperienceSvg
} from "../../assets/icons/icons";

const Experience = () => {
  const projects = [
    {
      title: "Onetec",
      subtitle: "2023-Actualidad",
      description:
        "Analista java miembro del equipo de desarrollo de Linea Directa realizando tareas de analisis y desarrollo de nuevas funcionalidades sobre la aplicación web. Utilizando metodologías ágiles y API first.",
      link: "https://www.grupoonetec.com/",
      svg: [
        JavaExperienceSvg,
        SpringExperienceSvg,
        SqlExperienceSvg,
        HtmlExperienceSvg,
        CssExperienceSvg,
        JavascriptExperienceSvg,
        JQueryExperienceSvg,
      ],
    },
    {
      title: "Minsait",
      subtitle: "2023-2023",
      description:
        "Programador senior en la Agencia Tributaria enfocado en el desarrollo y testing de servicios web. Utilizando una metodología API first.",
      link: "https://www.minsait.com/es",
      svg: [
        JavaExperienceSvg,
        SpringExperienceSvg,
        JunitExperienceSvg,
        SqlExperienceSvg,
        HtmlExperienceSvg,
        CssExperienceSvg,
        JavascriptExperienceSvg
      ],
    },
    {
      title: "Neoris",
      subtitle: "2018-2021",
      description:
        "Programador java en el proyecto Madrid Digital realizando desarrollos sobre diferente aplicaciones web. Utilizando Java, Spring, JSF, Hibernate, Erwin y SQL.",
      link: "https://neoris.com/es/web/guest/home",
      svg: [
        JavaExperienceSvg,
        SpringExperienceSvg,
        HibernateExperienceSvg,
        SqlExperienceSvg,
        HtmlExperienceSvg,
        CssExperienceSvg,
        JavascriptExperienceSvg
      ],
    },
    {
      title: "Viewnext",
      subtitle: "2017-2018",
      description:
        "Miembro del equipo de mantenimiento realizando tareas de análisis y resolución de incidencias sobre la aplicación CRM de Vodafone(Amdocs) utilizando Java Swing.",
      link: "https://www.viewnext.com/",
      svg: [
        JavaExperienceSvg,
        HtmlExperienceSvg,
        CssExperienceSvg,
        JavascriptExperienceSvg,
      ],
    },
  ];

  return (
    <section
      id="Experience"
      className="flex flex-col items-center justify-center mt-10 dark:text-white"
    >
      <div>
        <h1 className="text-7xl font-medium">Experiencia</h1>
      </div>
      <div className="max-w-7xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

export default Experience;
