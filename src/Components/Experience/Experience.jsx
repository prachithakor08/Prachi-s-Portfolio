import "./Experience.css"

import TimelineCard from  "./TimelineCard"

import {experiences} from "../../data/experience"

function Experience(){
    return(
        <section id="experience" className="experience">
            {/* <h4>Journey</h4> */}
            <h1>Experience</h1>
            <div className="timeline">
                {
                    experiences.map((item)=>(
                        <TimelineCard 
                        key = {item.id}
                        experience={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Experience