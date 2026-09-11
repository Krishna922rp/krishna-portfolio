import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeaturedProject from "./components/FeaturedProject/FeaturedProject";
import PolicyDemo from "./components/PolicyDemo/PolicyDemo";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import RecruiterAssistant from "./components/RecruiterAssistant/RecruiterAssistant";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
          <Experience />
        <FeaturedProject />
        <PolicyDemo />
        <Projects />
      
        <Skills />
        <About />
        <RecruiterAssistant />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;