import { Mail, Globe, MapPin, Award, Star, Briefcase } from "lucide-react";

const AboutMe = () => {
    return (
        <section id="about" className="about-section">
            {/* Title */}
            <h2 className="about-title">About Me</h2>
            <p className="about-subtitle">
                Crafting digital experiences with passion, precision, and purpose
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:grid-cols-2">
                {/* Left Main Card */}
                <div className="card main-card">
                    <h3 className="card-title">
                        👋 Hello, I’m <span>Nanda Min Shin</span>
                    </h3>
                    <p className="highlight-text">
                        A passionate <span className="gradient-text">Software Engineer </span>
                        and <span className="gradient-text">AI enthusiast</span> with
                        <span className="gradient-text"> 2+ years</span> of hand-on software development experience.
                    </p>

                    <p className="card-desc">
                        I mainly focus on full-stack Web Application Developnent including both frontend and backend using Node.js, Laravel, JavaScript, TypeScript, Golang, React, Next.js, MongoDB, MySQL and modern technologies.
                    </p>
                    <p className="card-desc">
                        I’m constantly exploring new tools and frameworks and AI related technologies to expand my skill set and stay up to date with modern development practices. Beyond just coding, I like tackling real problems with practical solutions to benefit society and drive innovation to community.
                    </p>

                    {/* Core Technologies */}
                    <h4 className="mt-12 section-subtitle">🔥 Core Technologies</h4>
                    <div className="tags">
                        {[
                            "Laravel",
                            "React",
                            "Next.js",
                            "TypeScript",
                            "Node.js",
                            "Golang",
                            "Express.js",
                            "Git",
                            "UI/UX Design",
                            "MongoDB",
                            "MySQL",
                            "NestJS"
                        ].map((tech) => (
                            <span key={tech} className="tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="sidebar">
                    {/* Connect Card */}
                    <div className="card small-card purple">
                        <h4 className="section-subtitle">💬 Let’s Connect</h4>
                        <ul className="info-list">
                            <li>
                                <Mail size={16} /> nandaminshinfromnowhere@gmail.com
                            </li>
                            <li>
                                <Globe size={16} /> https://who-is-nd.vercel.app
                            </li>
                            <li>
                                <MapPin size={16} /> Da Nang, Vietnam
                            </li>
                        </ul>
                    </div>

                    {/* Achievements */}
                    <div className="card small-card orange">
                        <h4 className="section-subtitle">🏆 Achievements</h4>
                        <ul className="info-list">
                            <li>
                                <Star size={16} /> Successfully contributed to ERP systems
                            </li>
                            <li>
                                <Award size={16} /> Expert in Full-Stack Development
                            </li>
                            <li>
                                <Briefcase size={16} /> 3+ Open-source projects
                            </li>
                        </ul>
                    </div>

                    {/* Available for Hire */}
                    <div className="card small-card green">
                        <h4 className="section-subtitle">✅ Available for Hire</h4>
                        <ul className="info-list">
                            <li>Open to New Opportunities</li>
                            <li>Open to Relocation</li>
                            <li>Remote & On-site Available</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
