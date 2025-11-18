import { HandHeart, Code2, CheckCircle2, Rocket, Lightbulb, Radio, AppWindowMac, Star, Cog, Timer, Package, Gamepad2, ShoppingBasket, BotMessageSquare } from "lucide-react";

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

                            <div className="flex gap-2 tag">
                                <AppWindowMac color="#4dffff" /> <span className="text-base">Web Application</span>
                            </div>
                            <div className="flex gap-2 tag-yellow">
                                <Star color="yellow" fill="yellow" /> <span className="text-base">Featured</span>
                            </div>
                            <div className="flex gap-2 tag-green">
                                <Radio color="#33ff77" /> <span className="text-base">Live</span>
                            </div>
                            <div className="flex gap-2 tag-black">
                                <Cog color="#ffb3ff" /> <span className="text-base">Learning Platform System</span>
                            </div>
                            <div className="flex gap-2 tag-black">
                                <Timer /> <span className="text-base">5 Months</span>
                            </div>

                        </div>

                        <h3>Tritium Learning Platform</h3>
                        <p className="subtitle">
                            Online Learning platform for multiple courses
                        </p>
                        <p className="description">
                            Tritium is a full-stack learning platform built with the MERN stack (MongoDB, Express, React, Node.js), designed to provide a smooth and scalable online learning experience integrated with Socket.io for realtime communications.
                        </p>

                        <div className="buttons">
                            <a href="https://github.com/nandaminshin/tritium" target="blank" className="btn secondary">
                                <Code2 size={16} /> View Repository
                            </a>
                            <a href="https://tritium-three.vercel.app/" target="blank" className="btn primary">
                                <Rocket size={16} /> Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="project-bottom">
                        <div className="features">
                            <h4><Lightbulb size={36} fill="yellow" color="yellow" /> Key Features</h4>
                            <ul>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Role-based access control with multiple user types and authority</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Subscription-based video streaming feature</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Admin dashboard for creating courses and uploading video lectures</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Super Admin dashboard for managing the plaftorm, users, currency and additional settings</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>User-friendly frontend built with React and custom styling for a clean, responsive interface</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Token-based authentication</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Secure backend powered by Express and MongoDB, handling authentication, course data, and media management</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Real-time client and server communication with Socket.io</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Data caching with TanStack Query</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Scalable design prepared for future features</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="deliverables">
                            <h4><HandHeart size={36} color="#33ffff" /> Deliverables</h4>
                            <ul>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Production-ready web app</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Fully functional learning management system</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Authentication and authorization system with role segregation</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Video upload and playback pipeline for course content delivery</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Responsive UI components optimized for both desktop and mobile devices</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Smooth and fresh user experience with Singal Page feature, Data Caching and Real-time communications</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="tech-stack">
                        <h4><Code2 size={16} /> Technology Stack</h4>
                        <div className="tags">
                            {[
                                "React",
                                "Lucide-React",
                                "Tailwind CSS",
                                "MongoDB",
                                "Mongoose",
                                "Express",
                                "Socket.io",
                                "REST API",
                                "JWT Authentication",
                                "DnD Kit",
                                "TanStack Query",
                                "Headless UI",
                                "Vercel",
                                "Render",
                                "Heroicons",
                                "Js-cookie"
                            ].map((tech) => (
                                <span key={tech} className="tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-24 project-card">
                    {/* Top Section */}
                    <div className="project-top-yellow">
                        <div className="tags">

                            <div className="flex gap-2 tag">
                                <AppWindowMac color="#4dffff" /> <span className="text-base">Web Application</span>
                            </div>
                            <div className="flex gap-2 tag-yellow">
                                <Star color="yellow" fill="yellow" /> <span className="text-base">Featured</span>
                            </div>
                            <div className="flex gap-2 tag-green">
                                <Radio color="#33ff77" /> <span className="text-base">Live</span>
                            </div>
                            <div className="flex gap-2 tag-black">
                                <Gamepad2 color="#ffb3ff" /><span className="text-base">Gaming & Knowledge</span>
                            </div>
                            <div className="flex gap-2 tag-black">
                                <Timer /> <span className="text-base">1 Week</span>
                            </div>

                        </div>

                        <h3>Search Pokémon</h3>
                        <p className="subtitle">
                            Search your favorite Pokémon with Search Pokémon
                        </p>
                        <p className="description">
                            A responsive web application built with Next.js, TypeScript, and Tailwind CSS, designed to let users search for Pokémon and view detailed information in a clean, user-friendly interface
                        </p>

                        <div className="buttons">
                            <a href="https://github.com/nandaminshin/search-pokemon" target="blank" className="btn secondary">
                                <Code2 size={16} /> View Repository
                            </a>
                            <a href="https://search-pokemon-psi-orcin.vercel.app/" target="blank" className="btn primary">
                                <Rocket size={16} /> Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="project-bottom">
                        <div className="features">
                            <h4><Lightbulb size={36} fill="yellow" color="yellow" /> Key Features</h4>
                            <ul>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Search functionality with dynamic filtering for Pokémon by name</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Pokémon details page displaying stats, types, and abilities</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Responsive UI designed with Tailwind CSS for both desktop and mobile users</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>API integration with the public PokéAPI for real-time data fetching</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Optimized routing and server-side rendering via Next.js for performance and SEO</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>In-memory Data Caching with Apollo-client</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="deliverables">
                            <h4><HandHeart size={36} color="#33ffff" /> Deliverables</h4>
                            <ul>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Production-ready web app</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Fully functional Pokémon search engine with instant results</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Detail pages with structured Pokémon data</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Responsive layout ensuring usability across devices</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Reusable components built with React + TypeScript for scalability</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Integration with PokéAPI for reliable and up-to-date information</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Smooth and fresh user experience with Singal Page feature and In-memory Data Caching</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="tech-stack">
                        <h4><Code2 size={16} /> Technology Stack</h4>
                        <div className="tags">
                            {[
                                "Next.js",
                                "React",
                                "Lucide-React",
                                "Tailwind CSS",
                                "GraphQL",
                                "Apollo GraphQL",
                                "PokéAPI",
                                "Apollo Client",
                                "TypeScript",
                                "ts-jest",
                                "Vercel",
                            ].map((tech) => (
                                <span key={tech} className="tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-24 project-card">
                    {/* Top Section */}
                    <div className="project-top-pink">
                        <div className="tags">

                            <div className="flex gap-2 tag">
                                <AppWindowMac color="#4dffff" /> <span className="text-base">Web Application</span>
                            </div>
                            <div className="flex gap-2 tag-yellow">
                                <Star color="yellow" fill="yellow" /> <span className="text-base">Featured</span>
                            </div>
                            <div className="flex gap-2 tag-black">
                                <ShoppingBasket color="#ffb3ff" /><span className="text-base">ECommerce</span>
                            </div>
                            <div className="flex gap-2 tag-black">
                                <Timer /> <span className="text-base">6 Months</span>
                            </div>

                        </div>

                        <h3>Espresso</h3>
                        <p className="subtitle">
                            Cafe and bakery
                        </p>
                        <p className="description">
                            A responsive web application built with HTML, CSS, JavaScript, Laravel and Bootstrap5, designed to serve as an eCommerce site for cafe and bakery in a clean, user-friendly interface
                        </p>

                        <div className="buttons">
                            <a href="https://github.com/nandaminshin/cafeECommerce" target="blank" className="btn secondary">
                                <Code2 size={16} /> View Repository
                            </a>
                            <button disabled className="btn primary-disabled">
                                <Rocket size={16} /> Live Demo
                            </button>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="project-bottom">
                        <div className="features">
                            <h4><Lightbulb size={36} fill="yellow" color="yellow" /> Key Features</h4>
                            <ul>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Browse recipes, coffee, bread and drinks by category and add them to cart</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Create order with selected recipe</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Responsive UI designed with Bootstrap for both desktop and mobile users</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Cash On Delivery Payment</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Admin Dashboard to manage users, orders and products</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="deliverables">
                            <h4><HandHeart size={36} color="#33ffff" /> Deliverables</h4>
                            <ul>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Production-ready web app</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Fully functional modernized eCommerce for cafe and bakery business</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Order and order reply system with admin's message status</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Responsive layout ensuring usability across devices</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Integration with MySQL database and scalable database architecture</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Smooth and fresh user experience with Laravel's Blade engine</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="tech-stack">
                        <h4><Code2 size={16} /> Technology Stack</h4>
                        <div className="tags">
                            {[
                                "Laravel",
                                "JavaScript",
                                "JQuery",
                                "Bootstrap5",
                                "Axios",
                                "FontAwesome",
                                "HTML5",
                                "PHP",
                                "MySQL",
                                "XAMPP",
                                "Eloquent ORM",
                            ].map((tech) => (
                                <span key={tech} className="tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Project Card */}
                <div className="mt-24 project-card">
                    {/* Top Section */}
                    <div className="project-top-red">
                        <div className="tags">

                            <div className="flex gap-2 tag">
                                <AppWindowMac color="#4dffff" /> <span className="text-base">Web Application</span>
                            </div>
                            <div className="flex gap-2 tag-yellow">
                                <Star color="yellow" fill="yellow" /> <span className="text-base">Featured</span>
                            </div>
                            <div className="flex gap-2 tag-green">
                                <Radio color="#33ff77" /> <span className="text-base">Live</span>
                            </div>
                            <div className="flex gap-2 tag-black">
                                <BotMessageSquare color="#ffb3ff" /><span className="text-base">AI Chat Bot</span>
                            </div>
                            <div className="flex gap-2 tag-black">
                                <Timer /> <span className="text-base">1 Months</span>
                            </div>

                        </div>

                        <h3>Gemini Chat Bot App</h3>
                        <p className="subtitle">
                            AI Chat Bot Application integrated with Google Gemini API
                        </p>
                        <p className="description">
                            A responsive web application built with Next.js, TypeScript, Tailwind CSS, MongoDB and integrated with Google Gemini API and Google OAuth to provide users with an interactive AI chat bot experience
                        </p>

                        <div className="buttons">
                            <a href="https://github.com/nandaminshin/Gemini-Chat-Bot-App" target="blank" className="btn secondary">
                                <Code2 size={16} /> View Repository
                            </a>
                            <a href="https://nd-gemini-chat-bot-app.vercel.app/" target="blank" className="btn primary">
                                <Rocket size={16} /> Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="project-bottom">
                        <div className="features">
                            <h4><Lightbulb size={36} fill="yellow" color="yellow" /> Key Features</h4>
                            <ul>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Chatting feature with Google Gemini 2.5 flash model using free API key</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Sign in wiht Google using OAuth authentication provided by Google</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Storing conversation history for each user using MongoDB</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>Unlimited usage</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><CheckCircle2 size={18} color="rgba(18, 18, 40, 0.581)" fill="#33ff77" /></span><span>User-friendly frontend built with Next.js and custom styling for a clean, responsive interface</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="deliverables">
                            <h4><HandHeart size={36} color="#33ffff" /> Deliverables</h4>
                            <ul>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Production-ready web app</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Fully functional real time AI Chat Bot App</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Secure authentication with Google OAuth</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2">
                                        <span><Package size={24} fill="#ff1aff" color="rgba(18, 18, 40, 0.581)" /></span><span>Smooth and fresh user experience with Singal Page feature</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="tech-stack">
                        <h4><Code2 size={16} /> Technology Stack</h4>
                        <div className="tags">
                            {[
                                "Next.js",
                                "Lucide-React",
                                "Tailwind CSS",
                                "TypeScript",
                                "Google Gemini API",
                                "Google OAuth",
                                "MongoDB",
                                "Mongoose",
                                "Vercel",
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
