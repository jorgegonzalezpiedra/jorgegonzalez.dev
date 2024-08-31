import React from 'react';
import ReactDOM from "react-dom/client";
import Hero from "./sections/hero/Hero";
import Experience from "./sections/experience/Experience";
import ExperienceTimeline from "./sections/experience/ExperienceTimeline";
import Skills from "./sections/skills/Skills";
import Navbar from "./components/navbar/Navbar";
import Projects from "./sections/projects/Projects";
import Colaborate from "./sections/colaborate/Colaborate";
import Footer from "./sections/footer/Footer";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar /> 
    <Hero />
    <Skills />
    {/* <Experience /> */}
    <ExperienceTimeline />
    <Colaborate />
    <Projects />
    <Footer/>
  </React.StrictMode>
);
