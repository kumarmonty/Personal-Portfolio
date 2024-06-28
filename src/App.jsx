import './App.css';
import Hero from "./Sections/Hero/Hero"; // Explicitly import the Hero component
import Projects from './Sections/Projects/Projects';
import Skills from "./Sections/Skills/Skills"
function App() {
  return (
    <>
      <Hero />
      <Projects/>
      <Skills/>
    </>
  );
}

export default App;
