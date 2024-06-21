import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Experience from "./sections/experience/Experience";
import Skills from "./sections/skills/Skills";
import Contact from "./sections/contact/Contact";
import { DockBar } from "./components/dockbar/DockBar";
import Navbar from "./components/navbar/Navbar";
import Projects from "./sections/projects/Projects";
import Colaborate from "./sections/colaborate/Colaborate";
import Footer from "./sections/footer/Footer";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Hero />,
//   },
//   {
//     path: "/experience",
//     element: <Experience />,
//   },
//   {
//     path: "/skills",
//     element: <Skills />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* <DockBar /> */}
    <Navbar /> 
    <Hero />
    <Skills />
    <Experience />
    <Colaborate />
    <Projects />
    <Footer/>
  </React.StrictMode>
);
