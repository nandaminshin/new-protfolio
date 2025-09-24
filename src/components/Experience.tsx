import { Briefcase, Award, Calendar, Code2 } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-tag">Professional Journey</span>
                    <h2>Experience</h2>
                    <p>My professional journey and the impact I've made across different domains</p>
                </div>

                <div className="experience-list">
                    {/* Experience 1 */}
                    <div className="experience-card">
                        <div className="card-header">
                            <div className="icon-wrapper green">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h3>Software Developer</h3>
                                <p className="company">Upwork</p>
                                <p className="date">
                                    <Calendar size={14} /> January 2020 — Present
                                </p>
                            </div>
                        </div>

                        <p className="description">
                            Delivered high-quality projects across diverse domains, including web and mobile applications,
                            API development, and cloud integrations (AWS, GCP).
                        </p>

                        <div className="achievements">
                            <h4><Award size={16} /> Key Achievements</h4>
                            <ul>
                                <li>Achieved Top-Rated status with a 91% job success score</li>
                                <li>Completed 10+ projects focusing on scalable solutions</li>
                                <li>Consistently praised for skillfulness, quick learning, and communication</li>
                                <li>Earned repeated engagements through reliability and expertise</li>
                            </ul>
                        </div>

                        <div className="technologies">
                            <h4><Code2 size={16} /> Technologies & Skills</h4>
                            <div className="tags">
                                {["JavaScript", "Python", "Node.js", "AWS", "GCP", "OpenAI API", "LangChain"].map((tech) => (
                                    <span key={tech} className="tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience 2 */}
                    <div className="experience-card">
                        <div className="card-header">
                            <div className="icon-wrapper blue">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h3>HIMS Master Trainer / PACS Specialist</h3>
                                <p className="company">Public Health Organization, Islamabad</p>
                                <p className="date">
                                    <Calendar size={14} /> July 2019 — Present
                                </p>
                            </div>
                        </div>

                        <p className="description">
                            Spearheaded organizational transformation from paper-based manual systems to completely
                            integrated HIMS and PACS (Picture Archiving and Communication System).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
