"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { FaCode, FaUser, FaLightbulb   } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Sobre mi",
      link: "#About",
      icon: <FaUser className="h-4 w-4 text-dark-500 dark:text-white" />,
    },
    {
      name: "Tecnologias",
      link: "#Skills",
      icon: <FaCode className="h-4 w-4 text-dark-500 dark:text-white" />,
    },
    {
      name: "Experiencia",
      link: "#Experience",
      icon: (
        <MdOutlineWork className="h-4 w-4 text-dark-500 dark:text-white" />
      ),
    },
    {
      name: "Proyectos",
      link: "#Projects",
      icon: (
        <FaLightbulb className="h-4 w-4 text-dark-500 dark:text-white" />
      ),
    }
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return (<></>
  );
};

export default FloatingNavDemo;