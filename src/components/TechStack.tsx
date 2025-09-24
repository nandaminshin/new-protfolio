import { useState } from "react";

type Tech = {
    name: string;
    category: string;
    level: "Expert" | "Intermediate" | "Beginner";
    exp: string;
    img: string;
};

const techs: Tech[] = [
    // Backend
    { name: "Node.js", category: "Backend", level: "Expert", exp: "2 years exp", img: "/images/node-js-seeklogo.svg" },
    { name: "Python", category: "Backend", level: "Intermediate", exp: "1 years exp", img: "/images/python-seeklogo.svg" },
    { name: "Express", category: "Backend", level: "Expert", exp: "2 years exp", img: "/images/express-js.webp" },
    { name: "NestJS", category: "Backend", level: "Expert", exp: "1 years exp", img: "/images/nest-js-icon.png" },
    { name: "REST API", category: "Backend", level: "Expert", exp: "2 years exp", img: "/images/restapi.png" },
    { name: "GraphQL", category: "Backend", level: "Intermediate", exp: "0.5 years exp", img: "/images/graphql-seeklogo.svg" },
    { name: "Apollo GraphQL", category: "Backend", level: "Intermediate", exp: "0.5 years exp", img: "/images/apollo-seeklogo.svg" },
    { name: "Socket.io", category: "Backend", level: "Expert", exp: "1 years exp", img: "/images/socket-io-seeklogo.svg" },
    { name: "PHP", category: "Backend", level: "Expert", exp: "2.5 years exp", img: "/images/php-seeklogo.png" },
    { name: "Laravel", category: "Backend", level: "Expert", exp: "2.5 years exp", img: "/images/laravel-seeklogo.svg" },
    { name: "JWT", category: "Backend", level: "Expert", exp: "1 years exp", img: "/images/json-web-tokens-jwt-io-seeklogo.svg" },
    { name: "Postman", category: "Backend", level: "Expert", exp: "1 years exp", img: "/images/postman-seeklogo.svg" },
    { name: "Jest", category: "Backend", level: "Intermediate", exp: "0.5 years exp", img: "/images/jest-seeklogo.svg" },
    { name: "Flask", category: "Backend", level: "Intermediate", exp: "1 years exp", img: "/images/flask-seeklogo.svg" },
    { name: "NPM", category: "Backend", level: "Expert", exp: "2 years exp", img: "/images/npm-node-package-manager-seeklogo.svg" },
    { name: "XAMPP", category: "Backend", level: "Expert", exp: "2.5 years exp", img: "/images/xampp-seeklogo.svg" },
    { name: "C#", category: "Backend", level: "Intermediate", exp: "1 years exp", img: "/images/c-sharp-c-seeklogo.svg" },


    // Frontend
    { name: "React", category: "Frontend", level: "Expert", exp: "1 years exp", img: "/images/react-seeklogo.svg" },
    { name: "React Query", category: "Frontend", level: "Expert", exp: "1 years exp", img: "/images/react-query-seeklogo.svg" },
    { name: "Next.js", category: "Frontend", level: "Expert", exp: "1 years exp", img: "/images/next-js-seeklogo.svg" },
    { name: "TypeScript", category: "Frontend", level: "Expert", exp: "1 years exp", img: "/images/typescript-seeklogo.svg" },
    { name: "JavaScript", category: "Frontend", level: "Expert", exp: "3 years exp", img: "/images/javascript-js-seeklogo.svg" },
    { name: "Tailwind CSS", category: "Frontend", level: "Expert", exp: "1 years exp", img: "/images/tailwind-css-seeklogo.svg" },
    { name: "JQuery", category: "Frontend", level: "Expert", exp: "2 years exp", img: "/images/jquery-seeklogo.svg" },
    { name: "Bootstrap", category: "Frontend", level: "Expert", exp: "2 years exp", img: "/images/bootstrap-5-seeklogo.svg" },
    { name: "Vite", category: "Frontend", level: "Expert", exp: "1 years exp", img: "/images/vite-seeklogo.svg" },

    // Database
    { name: "MongoDB", category: "Database", level: "Expert", exp: "2 years exp", img: "/images/mongodb-seeklogo.svg" },
    { name: "MySQL", category: "Database", level: "Expert", exp: "3 years exp", img: "/images/mysql-seeklogo.svg" },
    { name: "PostgreSQL", category: "Database", level: "Expert", exp: "1 years exp", img: "/images/postgresql-seeklogo.svg" },

    //Cloud
    { name: "Docker", category: "Cloud & DevOps", level: "Beginner", exp: "0.5 years exp", img: "/images/docker-seeklogo.png" },
    { name: "Git", category: "Cloud & DevOps", level: "Expert", exp: "3 years exp", img: "/images/git-seeklogo.svg" },
    { name: "Linux", category: "Cloud & DevOps", level: "Expert", exp: "2 years exp", img: "/images/linux-tux-seeklogo.png" },

    // AI & Integration
    { name: "OpenAI", category: "AI & Integration", level: "Expert", exp: "1 years exp", img: "/images/open-ai-seeklogo.svg" },
    { name: "Gemini", category: "AI & Integration", level: "Expert", exp: "1 years exp", img: "/images/gemini-icon-seeklogo.svg" },
    { name: "Github Copilot", category: "AI & Integration", level: "Expert", exp: "1 years exp", img: "/images/github-copilot-seeklogo.svg" },
    { name: "Claude", category: "AI & Integration", level: "Intermediate", exp: "0.5 years exp", img: "/images/claude-seeklogo.svg" },
];

const categories = ["All", "Backend", "Frontend", "Database", "Cloud & DevOps", "AI & Integration"];

const TechStack = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredTechs =
        selectedCategory === "All"
            ? techs
            : techs.filter((t) => t.category === selectedCategory);

    return (
        <section id="stack" className="tech-section">
            {/* Heading */}
            <h2 className="tech-title">Technology Stack</h2>
            <p className="tech-subtitle">Technologies I use to bring ideas to life</p>

            {/* Category Pills */}
            <div className="categories">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="tech-grid">
                {filteredTechs.map((tech) => (
                    <div key={tech.name} className="tech-card">
                        <img src={tech.img} alt={tech.name} className="tech-img" />
                        <h4 className="tech-name">{tech.name}</h4>
                        <span className={`level ${tech.level.toLowerCase()}`}>{tech.level}</span>
                        <p className="exp">{tech.exp}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
