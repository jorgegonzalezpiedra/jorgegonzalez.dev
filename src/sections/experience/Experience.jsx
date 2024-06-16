import "./Experience.css";
import { DockBar } from "../../components/dockbar/DockBar";
import { HoverEffect } from "../../components/ui/card-hover-effect";

const Experience = () => {
  const projects = [
    {
      title: "Onetec",
      subtitle: "2023-Actualidad",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Minsait",
      subtitle: "2022-2023",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Neoris",
      subtitle: "2022-2023",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Viewnext",
      subtitle: "2022-2023",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center justify-center mt-10 dark:text-white">
        <div>
          <h1 className="text-7xl font-medium">Experiencia</h1>
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </section>
      {/* <DockBar /> */}
    </>
  );
};

export default Experience;
