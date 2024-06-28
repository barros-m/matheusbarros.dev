import React from 'react';
import { SiDotnet, SiTailwindcss, SiJetpackcompose } from "react-icons/si";
import { GiDatabase } from "react-icons/gi";
import { TbBrandDjango, TbBrandKotlin } from "react-icons/tb";
import { FaReact, FaHtml5, FaGitAlt } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const TechStacks = () => {
  const techStacks = [
    { name: 'C# .NET', icon: <SiDotnet /> }, // Use appropriate icon paths
    { name: 'SQL', icon: <GiDatabase /> },
    { name: 'Django', icon: <TbBrandDjango /> },
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Kotlin', icon: <TbBrandKotlin /> },
    { name: 'Jetpack Compose', icon: <SiJetpackcompose /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Azure', icon: <VscAzure/> },
  ];

  return (
    <section id="tech-stacks" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Technologies I Use</h2>
        <div className="flex flex-wrap justify-center">
        {techStacks.map((tech, index) => (
            <div key={index} className="flex items-center justify-center m-2 p-2 border rounded-lg shadow-md w-[200px] h-[60px]">
              <div className="flex items-center">
                {tech.icon}
                <span className="text-lg ml-2">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
