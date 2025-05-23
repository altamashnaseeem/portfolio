"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaJava, 
  FaPython 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiExpress, 
  SiCplusplus 
} from "react-icons/si";
import { DiMongodb,DiMysql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
interface SkillCardProps {
  icon: React.ElementType;
  name: string;
}
const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, name }) => (
  <div className="flex flex-col items-center justify-center">
    <Icon className="w-12 h-12 text-black-100" />
    <span className="text-sm font-medium text-white">{name}</span>
  </div>
);
export function Skills() {
  const skillRows = [
    [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React.js', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
    ],
    [
      
      { name: 'Express.js', icon: SiExpress },
      { name: 'MongoDB', icon: DiMongodb },

      { name: 'Mysql', icon: DiMysql },

      { name: 'Git', icon: FaGitAlt },

      

    ],
    [
      { name: 'Java', icon: FaJava },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Python', icon: FaPython },
    ]
  ];
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center mb-6 tracking-widest pt-28">TECHNICAL SKILLS</h2>
      <div id="skills" className="lg:h-[40rem] sm:h-[30rem] h-[30rem] mt-16 relative w-full bg-black  overflow-hidden rounded-md">
      
      <div>
     
     
     <Spotlight className="left-80 top-28 h-[120vh] w-[50vw]" fill="white" />
   </div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
        <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex flex-col items-center gap-16 justify-center lg:mt-24 md:mt-12 sm:mt-8 mt-8">
        {skillRows.map((row, index) => (
          <div key={index} className="flex gap-4 lg:gap-32 md:gap-20 sm:gap-12 justify-center">
            {row.map((skill) => (
              <SkillCard 
                key={skill.name} 
                icon={skill.icon} 
                name={skill.name}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
   
  );
}




