import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
    return (
        <section className="hero">
            {/* Name */}
            <h1 className="hero-title">Muhammad Ramazan</h1>

            {/* Gradient Role Badge */}
            <div className="role-badge">Full Stack Developer</div>

            {/* Description */}
            <p className="hero-desc">
                Crafting exceptional digital experiences with clean code and
                thoughtful design
            </p>

            {/* Social Links */}
            <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                    <Github size={18} /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <Linkedin size={18} /> LinkedIn
                </a>
                <a href="mailto:test@example.com">
                    <Mail size={18} /> Email
                </a>
            </div>

            {/* Availability */}
            <div className="availability">● Available for projects</div>
        </section>
    );
};

export default Hero;
