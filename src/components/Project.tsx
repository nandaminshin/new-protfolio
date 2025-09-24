import { Globe, Code2, CheckCircle2, Rocket, Layers } from "lucide-react";

export default function Project() {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2>Featured Projects</h2>
                    <p>
                        Discover my latest work in web development, AI integration, and digital
                        innovation
                    </p>
                </div>

                {/* Project Card */}
                <div className="project-card">
                    {/* Top Section */}
                    <div className="project-top">
                        <div className="tags">
                            {["Web Application", "Featured", "Live", "6 months", "Gaming Industry"].map(
                                (tag) => (
                                    <span key={tag} className="tag">
                                        {tag}
                                    </span>
                                )
                            )}
                        </div>

                        <h3>Checkersvip.com</h3>
                        <p className="subtitle">
                            Professional Online Checkers Platform
                        </p>
                        <p className="description">
                            A comprehensive multiplayer American checkers platform designed for
                            competitive play with real-time communication capabilities. Currently
                            undergoing official recognition process with the American Checkers
                            Federation (ACF).
                        </p>

                        <div className="buttons">
                            <a href="#" className="btn secondary">
                                <Code2 size={16} /> View Repository
                            </a>
                            <a href="#" className="btn primary">
                                <Rocket size={16} /> Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="project-bottom">
                        <div className="features">
                            <h4><Layers size={16} /> Key Features</h4>
                            <ul>
                                <li><CheckCircle2 /> Real-time multiplayer gameplay with WebSocket</li>
                                <li><CheckCircle2 /> Drag-and-drop game mechanics using DnDKit</li>
                                <li><CheckCircle2 /> Live chat system with emoji support & moderation</li>
                                <li><CheckCircle2 /> Tournament & player ranking system</li>
                                <li><CheckCircle2 /> Spectator mode with live observation</li>
                                <li><CheckCircle2 /> Responsive design for all devices</li>
                                <li><CheckCircle2 /> Game replay and analysis tools</li>
                                <li><CheckCircle2 /> Social features (friends, challenges)</li>
                            </ul>
                        </div>

                        <div className="deliverables">
                            <h4><Globe size={16} /> Deliverables</h4>
                            <ul>
                                <li><CheckCircle2 /> Production-ready web app</li>
                                <li><CheckCircle2 /> Real-time multiplayer game engine</li>
                                <li><CheckCircle2 /> User authentication & profile system</li>
                                <li><CheckCircle2 /> Admin dashboard for moderation</li>
                                <li><CheckCircle2 /> Tournament management system</li>
                                <li><CheckCircle2 /> Responsive mobile interface</li>
                                <li><CheckCircle2 /> Payment integration for premium features</li>
                            </ul>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="tech-stack">
                        <h4><Code2 size={16} /> Technology Stack</h4>
                        <div className="tags">
                            {[
                                "Next.js",
                                "NextUI",
                                "Tailwind CSS",
                                "DnDKit",
                                "Fastify",
                                "Redis",
                                "Socket.io",
                                "PostgreSQL",
                                "Prisma",
                                "JWT Authentication",
                                "Stripe API",
                            ].map((tech) => (
                                <span key={tech} className="tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
