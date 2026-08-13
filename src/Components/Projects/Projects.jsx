import React from 'react'
import ProjectCard from './ProjectCard'
import "./Project.css"
import { projects } from "../../data/project.js"

function Projects () {
  return (
    <section id='projects' className='projects'>


        <h1> Featured Projects</h1>

        <div className='project-grid'>

            {projects.map((project)=>(
                <ProjectCard
                key={project.id}
                project = {project}
                />
            ))}
        </div>
    </section>
  )
}

export default Projects
