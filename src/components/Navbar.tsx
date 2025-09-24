import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const navItems = [
        { name: "Overview", href: "#overview" },
        { name: "Stack", href: "#stack" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Certifications", href: "#certifications" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">MR</div>

            {/* Desktop Menu */}
            <ul className="menu">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>

            {/* Theme Toggle */}
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </button>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="mobile-menu">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
