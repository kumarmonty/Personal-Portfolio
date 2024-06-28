import React from 'react';
import styles from './ProjectsStyles.module.css';
import CodeConnect from '../../assets/CodeConnect.png';
import vOne from '../../assets/vOne.png'
import NewProjectCard from '../../common/ProjectCard/NewProjectCard';
import { FaReact, FaNodeJs, FaDatabase, FaCss3 } from 'react-icons/fa';
import { SiNextdotjs,SiMongodb, SiExpress, SiGithubcopilot, SiTailwindcss, SiShadcnui } from 'react-icons/si';

const CodeConnectTechIcons = [FaReact, FaNodeJs, FaDatabase, SiMongodb, SiExpress];
const vOneTechIcons= [SiNextdotjs,SiGithubcopilot,FaReact,SiTailwindcss,SiShadcnui]

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">MY NOTABLE Projects INCLUDE</h1>
      <div className={styles.projectsContainer}>
        <NewProjectCard
         images={[{ src: vOne, alt: 'vOneUi.dev Logo' }]}
          link="https://github.com/kumarmonty/vOneUI.dev"
          title="vOneUI.dev"
          subtitle="A Generative user interface system "
          description="Developed a generative user interface system powered by AI.
          Envision an UI, describe it in plain text, generate copy-paste friendly modular code for functional Web Interfaces, using open-source tools such as React,Tailwind CSS,and Shadcn UI"
          techStack={vOneTechIcons}
        />
        <NewProjectCard
        images={[{ src: CodeConnect, alt: 'CodeConnect Logo' }]}
          link="https://github.com/kumarmonty/Code-Connect-"
          title="CodeConnect"
          subtitle="A Social Media Platform for Coders"
          description="Designed and developed a social media platform tailored for coders, fostering community engagement. Features include seamless chatting, post sharing, and media uploads with a unique integration of a Jira clone for collaborative coding and code base sharing."
          techStack={CodeConnectTechIcons}
        />
      </div>
    </section>
  );
}

export default Projects;
