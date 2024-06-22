import "./Footer.css";
import { LuGithub, LuLinkedin, LuInstagram, LuMail } from "react-icons/lu";

const Footer = () => {
  return (
    <section className="items-center justify-center mt-10 text-white">
      <div className="bg-gray-800 w-full h-[200px] flex justify-center">
        <div className="mt-10 flex">
          <a href="https://github.com/jorgegonzalezpiedra">
            <LuGithub
              className="w-8 hover:scale-125 duration-200 hover:stroke-[#a7dfc6]"
              size={60}
            />
          </a>
          <a href="https://www.linkedin.com/in/jorge-gonz%C3%A1lez-piedra-9923b112a/">
            <LuLinkedin
              className="w-8 hover:scale-125 duration-200 hover:stroke-[#a7dfc6] ml-5"
              size={60}
            />
          </a>
          <a href="https://www.instagram.com/jorge_minicapi/">
            <LuInstagram
              className="w-8 hover:scale-125 duration-200 hover:stroke-[#a7dfc6] ml-5"
              size={60}
            />
          </a>
          <a href="mailto:jorge.gonzalez.piedra@gmail.com">
            <LuMail
              className="w-8 hover:scale-125 duration-200 hover:stroke-[#a7dfc6] ml-5"
              size={60}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
