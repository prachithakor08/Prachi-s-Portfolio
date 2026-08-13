import './About.css'
import { motion } from "framer-motion";

import{
    FaMapMarkerAlt,
    FaGraduationCap,
    FaBriefcase,
    FaNode,
} from "react-icons/fa"

import{
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaJava,
    FaPython,
    FaGithub,
    // FaAzure,
} from "react-icons/fa"

import{
    SiExpress,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiTypescript,
    SiCplusplus ,
} from "react-icons/si"

const techStack = [
    {icon : <FaReact/>, name: "React"},
    {icon:<FaNodeJs/>, name:"Node.js"},
    {icon: <SiExpress/>, name:"Express"},
    {icon: <SiMongodb/>, name:"MongoDB"},
    {icon:<SiMysql/>,name:"MySql"},
    {icon: <FaJs/>, name:"JavaScript"},
    {icon: <SiCplusplus />, name:"C++"},
    {icon : <FaJava/> , name:"Java"},
    {icon : <FaPython/>, name:"Python"},
    {icon: <FaHtml5/>, name:"HTML5"},
    {icon: <FaCss3Alt/>, name:"CSS3"},
    // {icon: <SiTailwindcss/>, name:"Tailwind"},
    {icon: <FaGithub/>, name:"GitHub"},
    // {icon: <SiMicrosoftazure />,name:"Azure"},
];

function About(){
    return (
        <motion.section id='about' 
        className='about'
        initial={{
            opacity:0,
            y:80
        }}
        whileInView={{
            opacity:1,
            y:0
        }}
        viewport={{once :true}}
        transition={{duration:.7}}
        >
            <div className='about-left'>
                <h4>About Me</h4>
                <h1>
                    Turning ideas into <br/>
                    real-world solutions.
                </h1>

                <p>
                    I'm passionate about building scalable applications,
                    solving problems, and continuously learning modern technologies.
                </p>
                <div className='about-info'>
                    <div>
                        <FaGraduationCap/>
                        <span>B.E. Information Technology</span>
                    </div>

                    <div>
                        <FaMapMarkerAlt/>
                        <span>Pune, Maharashtra</span>
                    </div>

                    <div>
                        <FaBriefcase/>
                        <span>Open to opportunities</span>
                    </div>
                </div>

              <motion.a
    href="/Prachi_Thakor_Resume.pdf"
    download="Prachi_Thakor_Resume.pdf"
    className="resume-btn"

    whileHover={{
        scale: 1.08
    }}

    whileTap={{
        scale: 0.95
    }}
>
    Download Resume
</motion.a>
        
            </div>

            <div className='about-right'>
                <h2>Tech Stack</h2>
                <div className='tech-grid'>

                    {techStack.map((tech)=>(
                        <div className='tech-card' key={tech.name}>
                            <div className='tech-icon'>{tech.icon}</div>
                            <p>{tech.name}</p>
                    </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default About;