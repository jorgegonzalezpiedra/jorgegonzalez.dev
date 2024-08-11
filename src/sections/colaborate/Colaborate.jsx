import TextReveal from "../../components/ui/text-reveal";

const Colaborate = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-10 dark:text-white">
      <TextReveal
        text="¿Crees que podemos trabajar juntos?"
        showButton={false}
      ></TextReveal>
      <TextReveal text="Échale un vistazo a mi curriculum." showButton={true}></TextReveal>
    </section>
  );
};

export default Colaborate;
