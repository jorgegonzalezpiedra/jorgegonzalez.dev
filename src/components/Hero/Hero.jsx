import "./Hero.css";

const Hero = () => {
  return (
    <section className="flex h-screen">
      <div className="w-3/5 flex items-center p-28">
        <div className="text-left">
          <h1 className="text-7xl font-medium">Hola.</h1>
          <h2 className="text-4xl font-medium mt-9">Me llamo Jorge.</h2>
          <p className="text-2xl font-light mt-9 leading-relaxed">
            ¡Hola! Soy Jorge, tu programador de confianza especializado en el
            fascinante mundo del backend con frameworks de Java. A lo largo de
            mi carrera, he tenido la suerte de trastear con un montón de
            tecnologías, lo que me ha convertido en un auténtico "todoterreno"
            del desarrollo. Aunque el backend es mi zona de confort, también le
            doy caña al front cuando es necesario, así que no me pillas
            desprevenido en ningún terreno. 
            
            Cuando no estoy picando código, me
            puedes encontrar en una cancha de baloncesto o trepando alguna pared
            en mi tiempo libre. Sí, soy de esos que piensan que las canastas y
            las montañas son tan emocionantes como un buen desafío de
            programación. 
            
            Además, el deporte me enseña a trabajar en equipo, a
            mantener la concentración y a no rendirme, cosas que aplico también
            en mis proyectos. Con más de 5 años de experiencia en el mundo de la
            programación, he trabajado en una variedad de proyectos que me han
            permitido perfeccionar mis habilidades y adaptarme a diferentes
            entornos y desafíos. 
            
            Siempre estoy buscando nuevos proyectos en los
            que poner a prueba mis habilidades y creatividad. Si quieres ver lo
            que he estado cocinando en mi laboratorio de programación, échale un
            vistazo a los proyectos de mi portfolio en la sección de proyectos.

            
            Y si quieres hablar, colaborar, o simplemente decir "¡Hola!", pasa
            por la sección de contacto. ¡Será un placer conocerte!
          </p>
        </div>
      </div>
      <div className="w-2/5"></div>
    </section>
  );
};

export default Hero;
