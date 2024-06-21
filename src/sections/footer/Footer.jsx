import "./Footer.css";
import { LuGithub, LuLinkedin, LuInstagram, LuMail} from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <section className="items-center justify-center mt-10 text-white">
        <div className="bg-gray-800 w-full h-[200px] flex justify-center">
          <div className="mt-10 flex">
            <a href="/">
              <LuGithub
                className="w-8 hover:scale-125 duration-200 hover:stroke-[#a7dfc6]" size={60}
              />
            </a>
            <a href="/">
              <LuLinkedin className="w-8 hover:scale-125 duration-200 hover:stroke-[#a7dfc6] ml-5" size={60} />
            </a>
            <a href="/">
              <LuInstagram className="w-8 hover:scale-125 duration-200 hover:stroke-[#a7dfc6] ml-5" size={60} />
            </a>
            <a href="/">
              <LuMail className="w-8 hover:scale-125 duration-200 hover:stroke-[#a7dfc6] ml-5" size={60} />
            </a>
          </div>
        </div>
      </section>
      {/* <DockBar /> */}
    </>
  );
};

export default Footer;