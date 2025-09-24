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
    { name: "Node.js", category: "Backend", level: "Expert", exp: "4 years exp", img: "/images/Node.js.webp" },
    { name: "Python", category: "Backend", level: "Expert", exp: "5 years exp", img: "/images/Python.webp" },
    { name: "Express", category: "Backend", level: "Expert", exp: "3 years exp", img: "/images/Express.webp" },
    { name: "Django", category: "Backend", level: "Intermediate", exp: "2 years exp", img: "/images/Django.webp" },
    { name: "GraphQL", category: "Backend", level: "Intermediate", exp: "2 years exp", img: "/images/GraphQL.webp" },
    { name: "Socket.io", category: "Backend", level: "Intermediate", exp: "2 years exp", img: "/images/Socket.webp" },

    // Frontend
    { name: "React", category: "Frontend", level: "Expert", exp: "4 years exp", img: "/images/React.webp" },
    { name: "Next.js", category: "Frontend", level: "Expert", exp: "3 years exp", img: "/images/Nextjs.webp" },
    { name: "TypeScript", category: "Frontend", level: "Expert", exp: "4 years exp", img: "/images/TS.webp" },
    { name: "JavaScript", category: "Frontend", level: "Expert", exp: "5 years exp", img: "/images/JS.webp" },
    { name: "Tailwind CSS", category: "Frontend", level: "Expert", exp: "3 years exp", img: "/images/Tailwind.webp" },
    { name: "Flutter", category: "Frontend", level: "Intermediate", exp: "2 years exp", img: "/images/Flutter.webp" },

    // Database
    { name: "PostgreSQL", category: "Database", level: "Expert", exp: "3 years exp", img: "/images/Postgres.webp" },
    { name: "MongoDB", category: "Database", level: "Expert", exp: "3 years exp", img: "/images/MongoDB.webp" },
    { name: "MySQL", category: "Database", level: "Intermediate", exp: "2 years exp", img: "/images/MySQL.webp" },
    { name: "Redis", category: "Database", level: "Intermediate", exp: "2 years exp", img: "/images/Redis.webp" },
    { name: "Prisma", category: "Database", level: "Expert", exp: "2 years exp", img: "/images/Prisma.webp" },
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
