import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Project from './components/Project';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <TechStack />
            <Experience />
            <Project />
            <Certifications />
            <Contact />
            <Footer />
        </>
    );
}

export default App;