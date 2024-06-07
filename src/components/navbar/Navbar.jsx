import { IoMoon, IoSunny } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {

    const [dark, setDark] = useState(false);
    const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
    };


  return (
    <div>
      <button onClick={() => darkModeHandler()}>
        {
          dark && <IoSunny /> // render sunny when dark is true
        }
        {
          !dark && <IoMoon /> // render moon when dark is false
        }
      </button>
    </div>
  );
};

export default Navbar;
