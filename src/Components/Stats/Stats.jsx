import React from 'react'
import './Stats.css'
import * as CountUpModule from "react-countup";
import { motion } from "framer-motion";

const CountUp = CountUpModule.default;

import {
    FaFolderOpen,
    FaBriefcase,
    FaCode,
    FaLinkedin
} from 'react-icons/fa'

const stats =[
    {
        icon:<FaLinkedin/>,
        number:1950,
        suffix:"+",
        title:"LinkedIn Network"
    },
    {
        icon:<FaFolderOpen/>,
        number:8,
        suffix:"+",
        title:"Projects Completed"
    },
    {
        icon:<FaBriefcase/>,
        number:5,
        suffix:"+",
        title:"Certifications"
    },
    {
        icon:<FaCode/>,
        number:510,
        suffix:"+",
        title:"DSA Problems Solved"
    }
]

const Stats = () => {
    const CountUp = CountUpModule.default.default;

// console.log(typeof RealCountUp);//
  return (
    <section id='stats' className='stats'>
        {
            stats.map((item,index)=>{
                return(
                    <motion.div className='stat-card' 
                    key={index}
                    initial={{
                        opacity:0,
                        y:60
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    viewport={{
                        once:true
                    }}
                    transition={{
                        duration:0.5,
                        delay:index*0.2
                    }}
                    >
                        <div className='icon'>
                            {item.icon}
                        </div>  
                    <h2>
                        <CountUp
                            start={0}
                            end={item.number}
                            duration={3}
                        />
                        {item.suffix}
            
                    </h2>
                       
                        <p>{item.title}</p>
                    </motion.div>
                )
            })
        }
    </section>
  )
}

export default Stats
