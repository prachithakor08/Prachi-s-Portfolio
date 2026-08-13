import React from 'react'
import './Hero.css'
import profile from "../../assets/images/profile.jpg"
import { motion } from "framer-motion";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
FaCode} from "react-icons/fa"


const Hero = () => {
  return (
    <section id='home' className='hero'>
        <motion.div 
        className='hero-left'
        initial={{opacity :0,x:-88}}
        animate={{opacity:1,x:0}}
        transition={{
            duration:0.8,
            ease:"easeOut"
        }}>
            <span className='badge'>
                Software Developer
            </span>

            <h3>Hi I'm</h3>

            <h1>Prachi Thakor</h1>

            <h2>Building Intelligent Web Applications</h2>

            <p>
                Passionate Software Developer specializing in
                MERN Stack, AI/ML and scalable web applications.
            </p>

            <div className='hero-buttons'>
               <a href="#projects" className="primary-btn">
                    View My Work
                </a>

                <a
    href="/Prachi_Thakor_SDE.pdf"
    download
    className="secondary-btn"
>
    Download Resume
</a>
            </div>

            <div className='social-icons'>
               <a
    href="https://github.com/prachithakor08"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
>
    <FaGithub />
</a>

               <a
    href="https://linkedin.com/in/prachi-thakor-64b42a228/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
>
    <FaLinkedin />
</a>

                           <a
    href="https://leetcode.com/u/Prachithakor008/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LeetCode"
>
    <FaCode />
</a>

               <a
    href="mailto:thakorprachi08@gmail.com"
    aria-label="Email"
>
    <FaEnvelope />
</a>

            </div>
        </motion.div>

        <motion.div className='hero-right'
        initial={{opacity:0,x:80}}
        animate={{opacity:1,x:0}}
        transition={{
            duration:0.8,
            delay:0.3
        }}>
           <div className='image-circle'>
                <img src={profile}
                alt='prachi'/>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero
