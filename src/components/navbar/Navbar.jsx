"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { FaCode } from "react-icons/fa";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Sobre mi",
      link: "#About",
      icon: <FaCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Tecnologias",
      link: "#Skills",
      icon: <FaCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experiencia",
      link: "#Experience",
      icon: (
        <FaCode className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Proyectos",
      link: "#Projects",
      icon: (
        <FaCode className="h-4 w-4 text-neutral-500 dark:text-white" />
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