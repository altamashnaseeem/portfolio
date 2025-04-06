 import { FaLocationArrow } from "react-icons/fa6";

// import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/tailwindcss-buttons";
import { TextGenerateEffect } from "./ui/text-generate-effect";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
     
      <div>
     
     
        <Spotlight className="left-80 top-28 h-[120vh] w-[50vw]" fill="white" />
      </div>
      

      {/* <div>
     
     
     <Spotlight className="left-100 top-40 h-[200vh] w-[100vw]" fill="white" />
   </div> */}
    
      <div className="h-screen w-full dark:bg-black   dark:bg-grid-white/[0.02] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p> */}
    </div>

      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
  

        
          <TextGenerateEffect
            words={`Building scalable web applications  and crafting seamless digital experiences`}
            className="text-center"
          />
         
          <p className="text-center md:tracking-wider mb-4 sm:text-sm md:text-lg lg:text-md bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Hi! I&apos;m Altamash,Full Stack Developer!
          </p>
           
          <a href="#about">
            <MagicButton
              title="Show my Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;