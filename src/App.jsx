// src/App.jsx
import Navbar from "./assets/components/Navbar.jsx";
import Hero from "./assets/components/Hero.jsx";
import About from "./assets/components/About.jsx";
import Skills from "./assets/components/Skills.jsx";
import Projects from "./assets/components/Projects.jsx";
import Experience from "./assets/components/exptl.jsx";
import Contact from "./assets/components/Contact.jsx";
import Footer from "./assets/components/Footer.jsx";

function App() {
  return (
    <div className="font-sans bg-lightBg dark:bg-darkBg text-zinc-900 dark:text-zinc-100">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
