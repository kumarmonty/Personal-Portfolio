import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillCard.module.css';
import Slider from '@mui/material/Slider';
import {
  FaJava,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaObjectGroup,
  FaSitemap,
  FaLightbulb,
  FaComments,
  FaUsers,
  FaChalkboardTeacher,
  FaBrain,
} from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiMysql, SiMongodb, SiNextdotjs, SiExpress} from 'react-icons/si';

const programmingLanguagesSkills = [
  { IconComponent: FaJava, skill: 'Java', level: 5 },
  { IconComponent: SiCplusplus, skill: 'C++', level: 4 },
  { IconComponent: FaPython, skill: 'Python', level: 5 },
];

const designDevelopmentSkills = [
  { IconComponent: FaHtml5, skill: 'HTML', level: 5 },
  { IconComponent: FaCss3Alt, skill: 'CSS', level: 4 },
  { IconComponent: SiJavascript, skill: 'JavaScript', level: 5 },
  { IconComponent: SiMysql, skill: 'MySQL', level: 4 },
  { IconComponent: FaNodeJs, skill: 'Node.js', level: 4 },
  { IconComponent: SiMongodb, skill: 'MongoDB', level: 3 },

];

const librariesFrameworksSkills = [
  { IconComponent: FaReact, skill: 'React', level: 5 },
  { IconComponent: SiNextdotjs, skill: 'Next.JS', level: 4 },
  { IconComponent: SiExpress, skill: 'Express', level: 3 },
];

const programmingParadigmsSkills = [
  { IconComponent: FaObjectGroup, skill: 'OOPs', level: 5 },
  { IconComponent: FaSitemap, skill: 'Data Structures and Algorithms', level: 4 },
  { IconComponent: FaGitAlt, skill: 'Git', level: 4 },
];

const softSkills = [
  { IconComponent: FaLightbulb, skill: 'Problem Solving', level: 5 },
  { IconComponent: FaComments, skill: 'Communication', level: 4 },
  { IconComponent: FaUsers, skill: 'Team Player', level: 4 },
  { IconComponent: FaChalkboardTeacher, skill: 'Leadership', level: 3 },
  { IconComponent: FaBrain, skill: 'Critical Thinking', level: 3 },
];

const SkillCard = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.sectionTitle}>Programming Language</h2>
        {renderSkills(programmingLanguagesSkills)}
      </div>
      <hr />
      <div>
        <h2 className={styles.sectionTitle}>Design & Development</h2>
        {renderSkills(designDevelopmentSkills)}
      </div>
      <hr />
      <div>
        <h2 className={styles.sectionTitle}>Libraries and Frameworks</h2>
        {renderSkills(librariesFrameworksSkills)}
      </div>
      <hr />
      <div>
        <h2 className={styles.sectionTitle}>Programming Paradigms</h2>
        {renderSkills(programmingParadigmsSkills)}
      </div>
      <hr />
      <div>
        <h2 className={styles.sectionTitle}>Soft Skills</h2>
        {renderSkills(softSkills)}
      </div>
    </div>
  );
};

const renderSkills = (skills) => {
  return skills.map(({ IconComponent, skill, level }, index) => (
    <div key={index} className={styles.skillItem}>
      <IconComponent className={styles.skillIcon} />
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{skill}</span>
        <Slider
          value={level}
          max={5}
          step={1}
          marks
          disabled
          className={styles.slider}
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  ));
};

SkillCard.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      IconComponent: PropTypes.elementType.isRequired,
      skill: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SkillCard;
