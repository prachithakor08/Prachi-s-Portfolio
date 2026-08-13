import React from 'react'
import { FaGithub } from 'react-icons/fa'
import "./Project.css"
import { motion } from "framer-motion";

function ProjectCard({project}){
  
    return (
    <motion.div    className="project-card"
    initial={{
        opacity:0,
        scale:.9
    }}
    whileInView={{
        opacity:1,
        scale:1
    }}
    viewport={{ once:true }}
    transition={{
        duration:.6
    }}
    whileHover={{
        y:-12,
        scale:1.03
    }}
>
        <img 
            src = {project.image}
            alt = {project.title}
            />

        <div className='project-content'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className='tech-stack'>
                
                {project.tech.map((tech)=>(
                    <span key={tech}>{tech}</span>
                ))}

            </div>
                <div className="project-buttons">

    <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
    >
        <FaGithub />
        GitHub
    </a>

</div>
        </div>
    </motion.div>
  )
}

export default ProjectCard
