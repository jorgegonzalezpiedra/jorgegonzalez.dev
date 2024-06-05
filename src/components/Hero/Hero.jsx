import "./Hero.css";

const Hero = () => {
  return (
    <section className="flex h-screen">
      <div className="flex-[2] flex items-center p-28">
        <div className="text-black text-left text-3xl">
          <p>
            I am an independent software developer currently based in Singapore.
            I am the creator of the JavaScript framework Vue.js and the frontend
            build tool Vite. Most of my work is open source and publicly
            available on GitHub. 
            <a href="https://www.google.com"> LIIIIIIIIIINK </a>
            If you happen to benefit from my OSS work, you
            can support me financially via GitHub Sponsors. You can follow me on
            X / Twitter where I mostly post about Vue and frontend technologies.
            If you happen to speak Chinese, my Chinese name is 尤雨溪 (yóu yǔ
            xī) and I have a Chinese-only X / Twitter alt for non-tech-focused
            musings. Outside of programming and helping my wife take care of our
            two kids, I enjoy video games (soulsborne & roguelikes are my
            favorite), karaoke, Japanese food, UFC/NBA/F1, and collecting
            watches.
          </p>
        </div>
      </div>
      <div className="flex-[1] bg-blue-500"></div>
    </section>
  );
};

export default Hero;
