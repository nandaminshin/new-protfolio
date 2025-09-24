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
                        I specialize in building scalable web and mobile applications using
                        React, Next.js, TypeScript, and modern development technologies.
                        I thrive on turning complex problems into elegant solutions.
                    </p>
                    <p className="card-desc">
                        Beyond work, I love exploring emerging technologies, contributing
                        to open-source projects, and mentoring aspiring developers. I
                        believe in continuous learning and staying at the forefront of
                        innovation.
                    </p>

                    {/* Core Technologies */}
                    <h4 className="section-subtitle">🔥 Core Technologies</h4>
                    <div className="tags">
                        {[
                            "AI Integration",
                            "React",
                            "Next.js",
                            "TypeScript",
                            "Node.js",
                            "Python",
                            "AWS",
                            "UI/UX Design",
                            "Healthcare IT",
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
                                <Mail size={16} /> mramazan1@yahoo.com
                            </li>
                            <li>
                                <Globe size={16} /> mramazan.dev
                            </li>
                            <li>
                                <MapPin size={16} /> Islamabad, Pakistan
                            </li>
                        </ul>
                    </div>

                    {/* Achievements */}
                    <div className="card small-card orange">
                        <h4 className="section-subtitle">🏆 Achievements</h4>
                        <ul className="info-list">
                            <li>
                                <Star size={16} /> Top Rated on Upwork
                            </li>
                            <li>
                                <Award size={16} /> Expert in AI Integration
                            </li>
                            <li>
                                <Briefcase size={16} /> 50+ Projects Delivered
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
