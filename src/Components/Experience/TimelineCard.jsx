// import { experiences } from "../../data/experience"
import "./Experience.css"
import { motion } from "framer-motion";

function TimelineCard({experience}){
    return(
        <motion.div 
        className="timeline-card"
        initial={{
            opacity:0,
            x:-80
        }}

        whileInView={{
            opacity:1,
            x:0
        }}
        transition={{
            duration:.6
        }}
        >
            <h2>{experience.company}</h2>
            <h3>{experience.role}</h3>
            <span>{experience.duration}</span>
            <p>{experience.description}</p>
        </motion.div>
    )
}

export default TimelineCard;