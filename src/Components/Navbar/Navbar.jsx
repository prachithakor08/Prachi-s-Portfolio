import "./Navbar.css"
import {FaTimes,FaSun,FaMoon,FaBars} from 'react-icons/fa'
import {useState,useEffect} from "react"


const navLinks =[
    {name: "Home" ,href:"#home"},
    {name: "About" ,href:"#about"},
    {name: "Skills" ,href:"#about"},
    {name: "Projects" ,href:"#projects"},
    {name: "Experience" ,href:"#experience"},
    {name: "Achievements" ,href:"#achievement"},
    {name: "Contact" ,href:"#contact"},
];

function Navbar({darkMode,setDarkMode}){

    const[menuOpen,setmenuOpen] = useState(false)
    const[activeSection,setActiveSection] = useState("home")

     useEffect(() => {

        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        setActiveSection(entry.target.id);

                    }

                });

            },
            {
                threshold: 0.3
            }
        );


        sections.forEach((section) => {
            observer.observe(section);
        });


        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };

    }, []);


  return (

        <nav className="navbar">

            {/* Logo */}

            <div className="logo">

                <div className="logo-circle">
                    PT
                </div>

                <span>
                    Prachi Thakor
                </span>

            </div>


            {/* Navigation */}

            <ul
                className={`nav-links ${menuOpen ? "active" : ""}`}
            >

                {navLinks.map((link) => {

                    const sectionId = link.href.substring(1);

                    /*
                      Skills currently points to About,
                      so About will be active for both.
                    */

                    const isActive =
                        sectionId === activeSection ||
                        (
                            link.name === "Skills" &&
                            activeSection === "about"
                        );


                    return (

                        <li key={link.name}>

                            <a
                                href={link.href}
                                className={isActive ? "active" : ""}
                                onClick={() => setmenuOpen(false)}
                            >
                                {link.name}
                            </a>

                        </li>

                    );

                })}


                <li>

                    <a
    href="#contact"
    className="talk-btn"
    onClick={() => setmenuOpen(false)}
>
    Let's Talk
</a>

                </li>


                <li>

                    <button
                        className="theme-btn"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode
                            ? <FaSun />
                            : <FaMoon />
                        }
                    </button>

                </li>

            </ul>


            {/* Mobile menu */}

            <div
                className="menu-icon"
                onClick={() => setmenuOpen(!menuOpen)}
            >

                {menuOpen
                    ? <FaTimes />
                    : <FaBars />
                }

            </div>

        </nav>

    );
}


export default Navbar;