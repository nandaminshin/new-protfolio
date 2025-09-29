const Footer = () => {
    return (
        <footer className="footer">
            <p>Built with ❤️ by <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-tight">Nanda Min Shin</span></p>
            <div className="footer-links">
                <a href="https://github.com/nandaminshin" target="_blank" rel="noreferrer">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/nanda-min-shin-322a90315/" target="_blank" rel="noreferrer">
                    LinkedIn
                </a>
                <a
                    href="/cv/nanda_min_shin.pdf"
                    download
                >
                    Download CV
                </a>
            </div>
        </footer>
    );
};

export default Footer;
