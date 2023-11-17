
import styles from './App.module.css'
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Education } from "./components/Education/Education.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Skills } from "./components/Skills/Skills.jsx";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {

  return (
    <div className={styles.App}>
    <Navbar />
    <Hero />
    {/* <Education /> */}
    <Skills />
    <Experience />
    <Projects />
    <Contact />
    </div>
  )
}

export default App
