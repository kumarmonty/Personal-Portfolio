import React from 'react';
import SkillCard from './SkillCard';
import { FaJava, FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiMysql, SiMongodb, SiNextdotjs, SiExpress} from 'react-icons/si';

const skills = [
  { IconComponent: FaJava, skill: 'Java', level: 5 },
  { IconComponent: SiCplusplus, skill: 'C++', level: 4 },
  { IconComponent: FaPython, skill: 'Python', level: 5 },
  { IconComponent: FaHtml5, skill: 'HTML', level: 5 },
  { IconComponent: FaCss3Alt, skill: 'CSS', level: 4 },
  { IconComponent: SiJavascript, skill: 'JavaScript', level: 5 },
  { IconComponent: SiMysql, skill: 'MySQL', level: 4 },
  { IconComponent: FaNodeJs, skill: 'Node.js', level: 4 },
  { IconComponent: SiMongodb, skill: 'MongoDB', level: 3 },
  { IconComponent: FaReact, skill: 'React', level: 5 },
  { IconComponent: SiNextdotjs, skill: 'Next.JS', level: 4 },
  { IconComponent: SiExpress, skill: 'Express', level: 3 },
  { IconComponent: FaGitAlt, skill: 'Git', level: 4 },
];

function Skills() {
  return (
    <div className="App">
      <SkillCard skills={skills} />
    </div>
  );
}

export default Skills;
