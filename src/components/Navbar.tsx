import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Overview", href: "#overview" },
        { name: "Stack", href: "#stack" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Certifications", href: "#certifications" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">ND</div>

            {/* Desktop Menu */}
            <ul className="menu">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>

            <img src="/images/dubu-icon.png" alt="" width={52} height={52} />

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
