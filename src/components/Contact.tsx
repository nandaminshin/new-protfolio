import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_q2zt394",   // replace with your actual Service ID
                "template_5dib814",  // replace with your actual Template ID
                formRef.current,
                "KQ3KE1wWM4xDRJ6qb"    // replace with your actual Public Key
            )
            .then(
                () => {
                    setSuccess("Message sent successfully! ✅");
                    formRef.current?.reset();
                },
                (error) => {
                    console.error(error);
                    setSuccess("Failed to send message ❌");
                }
            );
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Contact Me</h2>
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="from_name" placeholder="Your Name" required />
                <input type="email" name="reply_to" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required />
                <button type="submit" className="btn-primary">Send Email</button>
            </form>
            {success && <p className="status-message">{success}</p>}
        </section>
    );
};

export default Contact;
