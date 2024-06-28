import './App.css';
import Hero from "./Sections/Hero/Hero"; // Explicitly import the Hero component
import Projects from './Sections/Projects/Projects';
import Skills from "./Sections/Skills/Skills"
import ContactForm from './Sections/Contact/ContactForm';
function App() {
  return (
    <>
      <Hero />
      <Projects/>
      <Skills/>
      <ContactForm/>
    </>
  );
}

export default App;




