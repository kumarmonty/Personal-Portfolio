import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero(){
  const {theme,toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Monty Kumar"
        />
           <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
        <div className={styles.info}>
            <h1> Monty <br /> Kumar </h1>
              <h2> write your desc </h2>
               <span>
                <a href="https://github.com/kumarmonty" target='_blank'> <img src={githubIcon} alt="github Icon" />
                </a>
                <a href="https://linkedin.com/in/monty-kumar-698194217" target='blank'> <img src={linkedinIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://x.com/MontyKu12417250" target='_blank'> <img src={twitterIcon} alt="Twitter Icon" />
                </a>
               </span>
               <p className={styles.description}> write a catchy line about yourself in hero section </p>
               <a href={CV} download>
                <button className='hover'> Resume </button>
                 </a>
        </div>
    </section>
  )
}
export default Hero
