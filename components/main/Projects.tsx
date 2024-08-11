import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/jour.png"
          title="Journey"
          description="| AI SaaS Application
          • Generated AI-stimulated images based on user prompts, image fill, and
            background removal.
          • Inspiration from Mid-journey.
          • Designed and developed using NextJS, Clerk, Cloudinary, MongoDB"
          link="https://journey-ai-saas.vercel.app/"
        />
        <ProjectCard
          src="/hq720.jpg"
          title="ANPR"
          description="• Developed a license plate recognition system for restricted area access.
          • Utilized SSD, YOLO with EasyOCR"
          link="https://ieeexplore.ieee.org/document/10574677"
        />
        <ProjectCard
          src="/download.png"
          title="Tic-tac-toe"
          description="| React Game
            • Developed a Tic-tac-toe game with three modes: Beginner, Intermediate,
              Advanced.
            • Built using ReactJS"
          link="https://github.com/Adilmohd04/tictac"
        />
      </div>
    </div>
  );
};

export default Projects;
