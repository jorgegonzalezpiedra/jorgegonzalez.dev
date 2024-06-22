import OrbitingCircles from "../ui/orbiting-cicles";
import {
  SpringSvg,
  JunitSvg,
  HtmlSvg,
  JavascriptSvg,
  CssSvg,
  GitSvg,
  JavaSvg,
  HibernateSvg,
  PostgreSvg,
  PostmanSvg,
} from "../../assets/icons/icons";

export function OrbitingCirclesComponent() {
  return (
    <div className="relative flex h-[800px] w-full max-w-[42rem] items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"></span>

      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        radius={80}
      >
        <SpringSvg />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={5}
        radius={80}
      >
        <JavaSvg />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={80}
      >
        <HibernateSvg />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[45px] w-[45px] border-none bg-transparent"   
        duration={20}
        delay={20}
        radius={80}
      >
        <JunitSvg/>
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={160}
        duration={30}
        delay={20}
        reverse
      >
        <HtmlSvg />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={160}
        duration={30}
        delay={30}
        reverse
      >
        <CssSvg />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[40px] w-[40px] border-none bg-transparent"
        radius={160}
        duration={30}
        delay={40}
        reverse
      >
        <JavascriptSvg />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={240}
        duration={20}
        delay={7}
      >
        <PostgreSvg />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={240}
        duration={20}
        delay={1}
      >
        <GitSvg />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={240}
        duration={20}
        delay={13}
      >
        <PostmanSvg />
      </OrbitingCircles>
    </div>
  );
}

export default OrbitingCirclesComponent;
