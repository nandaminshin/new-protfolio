import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
    return (
        <section id="overview" className="hero">
            {/* Name */}
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-tight pb-8">Nanda Min Shin</h1>

            {/* Gradient Role Badge */}
            <div className="role-badge">Software Engineer</div>

            {/* Description */}
            <p className="hero-desc">
                Building modern web applications with clean code, scalable architecture, and intuitive design
            </p>

            {/* Social Links */}
            <div className="social-links">
                <a href="https://github.com/nandaminshin" target="_blank" rel="noreferrer">
                    <Github size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/nanda-min-shin-322a90315/" target="_blank" rel="noreferrer">
                    <Linkedin size={18} /> LinkedIn
                </a>
                <a href="mailto:nandaminshinfromnowhere@gmail.com">
                    <Mail size={18} /> Email
                </a>
            </div>
            <div className="social-links">
                <a
                    href="/cv/nanda_min_shin.pdf"
                    download
                >
                    <Download />
                    Download CV
                </a>
            </div>

            {/* Availability */}
            <div className="availability">● Available for projects</div>

            <div className="p-12">
                <img src="/images/circle-profile.png" alt="" width={360} height={360} />
            </div>
        </section>
    );
};

export default Hero;
