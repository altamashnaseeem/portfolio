"use client";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
 import Approach from "@/components/Approach";
 import Experience from "@/components/Experience";
 import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import {Skills} from "@/components/Skills";

const Home = () => {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 lg:px-10">
      <div className="max-w-6xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Skills/>
        <RecentProjects />
        
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;