import { useState } from "react";

interface Certificate {
    id: number;
    provider: string;
    platformLogo: string;
    issued: string;
    title: string;
    skills: string[];
    file?: string; // pdf file for real certificate
    status: string;
}

const certificates: Certificate[] = [
    {
        id: 1,
        provider: "NCC Education",
        platformLogo: "/images/Ncc_edu.png",
        issued: "26 July 2024",
        title: "Level 4 Diploma in Computing",
        skills: ["Computer Networks", "Computer Systems", "Databases", "Web Development", "Object-Oritnted Programming", "Software Engineering", "Computing", "Project Management"],
        file: "/certificates/NCC_Level4_Diploma_In_Computing_NandaMinShin.pdf",
        status: "completed",
    },
    {
        id: 2,
        provider: "NCC Education",
        platformLogo: "/images/Ncc_edu.png",
        issued: "coming soon",
        title: "Level 5 Diploma in Computing",
        skills: ["Full Stack Development", "Agile Development", "Advanced Databases", "Mobile App Development", "Cloud Computing", "Cyber Security", "Data Structures & Algorithms", "Professionalism & Ethics", "Newtork Security", "System Analysis & Design"],
        file: "/certificates/coming-soon.jpg",
        status: "in progress",
    },
    // {
    //     id: 3,
    //     provider: "Meta",
    //     platform: "Coursera",
    //     issued: "Feb 2023",
    //     title: "Backend Development Fundamentals",
    //     skills: ["Backend Development", "APIs", "Databases"],
    // },
    // {
    //     id: 4,
    //     provider: "Google",
    //     platform: "Coursera",
    //     issued: "Mar 2023",
    //     title: "Foundations of Cloud Computing",
    //     skills: ["Cloud", "GCP", "Virtualization"],
    // },
    // {
    //     id: 5,
    //     provider: "AWS",
    //     platform: "Coursera",
    //     issued: "Apr 2023",
    //     title: "AWS Solutions Architect",
    //     skills: ["AWS", "Cloud Architecture", "Networking"],
    // },
    // {
    //     id: 6,
    //     provider: "Microsoft",
    //     platform: "Coursera",
    //     issued: "May 2023",
    //     title: "Azure Fundamentals",
    //     skills: ["Azure", "Cloud", "Virtual Machines"],
    // },
];

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <section id="certifications" className="certifications-section">
            <div className="section-header">
                <span className="badge">Professional Credentials</span>
                <h2>Certifications</h2>
                <p>
                    Professional certifications and credentials that validate my expertise
                    in modern technologies and development practices.
                </p>
            </div>

            <div className="cert-grid">
                {certificates.map((cert) => (
                    <div key={cert.id} className="cert-card">
                        <div className="cert-header">
                            <span className="provider">{cert.provider}</span>
                            <img src={cert.platformLogo} alt="" width={90} />
                        </div>
                        <h3>{cert.title}</h3>
                        <p className="issued">Issued: {cert.issued}</p>
                        <div className="skills">
                            {cert.skills.map((skill, i) => (
                                <span key={i} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        {cert.file && cert.status == 'completed' ? (
                            <button className="view-btn" onClick={() => setSelectedCert(cert)}>
                                View
                            </button>
                        ) : (
                            <button className="view-btn disabled">View</button>
                        )}
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedCert && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>{selectedCert.title}</h3>
                        <iframe
                            src={selectedCert.file + "#toolbar=0"}
                            width="100%"
                            height="500px"
                            style={{ border: "none" }}
                            title={selectedCert.title}
                        />
                        <p style={{ marginTop: "10px", fontSize: "0.9rem", color: "#94a3b8" }}>
                            If the preview doesn’t load, you can download the certificate below.
                        </p>

                        <div className="modal-actions">
                            <a
                                href={selectedCert.file}
                                download
                                className="download-btn"
                            >
                                Download
                            </a>
                            <button
                                className="close-btn"
                                onClick={() => setSelectedCert(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
