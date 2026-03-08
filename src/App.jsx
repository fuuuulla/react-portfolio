import "./App.css";
import useReveal from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useReveal();

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>Designed & Built with 💖 by <span>Fulla</span> · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;