import OrbitingCircles from "../ui/orbiting-cicles";
import { SpringSvg, JsfSvg, HtmlSvg, JavascriptSvg, CssSvg, GitSvg, JavaSvg } from "../../assets/icons/icons";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[800px] w-full max-w-[42rem] items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Stack
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <SpringSvg />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <JavaSvg />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={160}
        duration={20}
        reverse
      >
        <HtmlSvg />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={160}
        duration={20}
        delay={20}
        reverse
      >
        <CssSvg />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={160}
        duration={20}
        delay={20}
        reverse
      >
        <JavascriptSvg />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={240}
        duration={20}
      >
        <SpringSvg />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={240}
        duration={20}
        delay={20}
      >
        <SpringSvg />
      </OrbitingCircles>
    </div>
  );
}

export default OrbitingCirclesDemo;
