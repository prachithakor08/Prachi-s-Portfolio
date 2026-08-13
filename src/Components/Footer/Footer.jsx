import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Prachi Thakor</h2>

      <p>
        Software Developer • AI Enthusiast • Problem Solver
      </p>

      <div className="footer-icons">

       <a
          href="https://github.com/prachithakor08"
          target="_blank"
          rel="noopener noreferrer"
      >
          <FaGithub />
      </a>

        <a
            href="https://www.linkedin.com/in/prachi-thakor-64b42a228/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaLinkedin />
        </a>
        
        <a href="mailto:thakorprachi08@gmail.com">
            <FaEnvelope />
        </a>

      </div>

      <div className="footer-links">

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>

      </div>

      <p className="copyright">
        © 2026 Prachi Thakor. <br/>Made with{" "}
        <FaHeart className="heart" /> by Prachi Thakor
      </p>

    </footer>
  );
}

export default Footer;