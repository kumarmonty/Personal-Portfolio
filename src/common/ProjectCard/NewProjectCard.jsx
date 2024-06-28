import React from 'react';
import styles from './NewProjectCard.module.css';

function NewProjectCard({ images, link, title, subtitle, description, techStack }) {
  return (
    <div className={styles.card}>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <div className={styles.imageContainer}>
          {images.map((image, index) => (
            <img key={index} className={styles.image} src={image.src} alt={image.alt} />
          ))}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.subtitle}>{subtitle}</h4>
          <p className={styles.description}>{description}</p>
          <div className={styles.techStack}>
            {techStack.map((TechIcon, index) => (
              <span key={index} className={styles.techItem}>
                <TechIcon className={styles.techIcon} />
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export default NewProjectCard;
