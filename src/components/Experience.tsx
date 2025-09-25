import { Briefcase, Pickaxe, Calendar, Code2 } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="">Experience</h2>
                    <p>My professional journey and the impact I've made across different domains</p>

                    <div className="h-0.5 bg-linear-to-bl from-violet-500 to-fuchsia-500"></div>
                </div>

                <div className="experience-list">
                    {/* Experience 1 */}
                    <div className="experience-card">
                        <div className="card-header">
                            <div className="icon-wrapper green">
                                <Briefcase size={52} />
                            </div>
                            <div>
                                <h1 className="text-3xl">Software Engineer</h1>
                                <p className="company">Findix Myanmar Co., Ltd</p>
                                <p className="date">
                                    <Calendar size={14} /> August 2024 — Present
                                </p>
                            </div>
                        </div>

                        <p className="description">
                            Software Development company specializing in custom web applications, ERP systems, and AI integration solutions for diverse industries.
                        </p>

                        <div className="pt-4 achievements">
                            <h4><Pickaxe size={20} /> Key Responsibilities</h4>
                            <ul>
                                <li className="flex pt-2">
                                    <div className="flex gap-4">
                                        <span className="rocket">🚀</span> <span>Developed and maintained a company-specific ERP-like resource management system and its functional sub-modules, streamlining internal operations for HR, inventory, and workflow processes</span>
                                    </div>
                                </li>
                                <li className="flex pt-2">
                                    <div className="flex gap-4">
                                        <span className="rocket">🚀</span> <span>Played a key role in the design and development of an AI chatbot system, integrating React.js, Node.js, and Flask to create a responsive and intelligent conversational interface</span>
                                    </div>
                                </li>
                                <li className="flex pt-2">
                                    <div className="flex gap-4">
                                        <span className="rocket">🚀</span> <span>Built and enhanced both backend and frontend components using a diverse tech stack, ensuring system scalability and performance</span>
                                    </div>
                                </li>
                                <li className="flex pt-2">
                                    <div className="flex gap-4">
                                        <span className="rocket">🚀</span> <span>Contributed to full-stack development efforts with a focus on Laravel (PHP), Express.js for API and business logic, and React.js and Tailwind CSS for interactive UI development</span>
                                    </div>
                                </li>
                                <li className="flex pt-2">
                                    <div className="flex gap-4">
                                        <span className="rocket">🚀</span> <span>Performed software testing and debugging, and worked collaboratively in an Agile environment with regular code reviews and sprint planning</span>
                                    </div>
                                </li>
                                <li className="flex pt-2">
                                    <div className="flex gap-4">
                                        <span className="rocket">🚀</span> <span>Developed a Full Stack Learning Platform System with multiple role-based access model using React.js, Express.js and MongoDB</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8 technologies">
                            <h4><Code2 size={36} /> Technologies & Skills</h4>
                            <div className="tags">
                                {["JavaScript", "TypeScript", "Node.js", "Laravel", "MySQL", "MongoDB", "JQuery", "Git", "Docker", "OpenAI API", "PHP", "Bootstrap", "Flask"].map((tech) => (
                                    <span key={tech} className="tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience 2 */}
                    {/* <div className="experience-card">
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
                    </div> */}
                </div>
            </div>
        </section>
    );
}
