import "./Contact.css"
import {useState} from 'react'
import emailjs from "@emailjs/browser"

import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt
} from "react-icons/fa";

function Contact(){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [sending,setSending] = useState(false);
    const [status,setStatus] = useState("");


    const handleChange = (e) => {

    const { name, value } = e.target;

            setFormData({
                ...formData,
                [name]: value
            });

    };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    emailjs
        .sendForm(
            "portfolio_service_01",
            "template_x5u3trd",
            e.target,
            {
                publicKey: "itx6rhH7RRRutUKAj"
            }
        )
        .then(() => {
            setStatus("Message sent successfully! ✅");

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            setStatus("Failed to send message. Please try again.");
        })
        .finally(() => {
            setSending(false);
        });
};

    return (
        <section id="contact" className="contact">
            <div className="contact-title">
                <h4>Contact</h4>
                <h1>Get In Touch</h1>
                <p>
                    I'm always open to discuss new opportunities,
                    collaboratins and exciting projects.
                </p>
            </div>

            <div className="contact-container">
                <div className="contact-left">
                    <div className="contact-card">
                        <FaEnvelope/>
                        <div>
                            <h3>Email</h3>
                            <a href="mailto:thakorprachi08@gmail.com">
                                thakorprachi08@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="contact-card">
                        <FaMapMarkerAlt/>
                        <div>
                            <h3>Location</h3>
                            <p>Pune, Maharashtra</p>
                        </div>
                    </div>
                    <div className="contact-card">
                        <FaLinkedin/>
                        <div>
                            <h3>LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/prachi-thakor-64b42a228/">linkedin.com/prachi-thakor</a>

                        </div>
                    </div>
                    <div className="contact-card">
                        <FaGithub/>
                        <div>
                            <h3>GitHub</h3>
                            <a href="https://github.com/prachithakor08">github.com/prachithakor08</a>
        
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form onSubmit={handleSubmit}>
                       <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />


                       <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    
                       <button type="submit" disabled={sending}>
                            {sending ? "Sending..." : "Send Message"}
                        </button>

                        {status && (
                        <p className="form-status">
                            {status}
                        </p>
                    )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;