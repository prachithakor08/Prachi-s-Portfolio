import energy from "../assets/images/Smart_Ems.png";
import trackit from "../assets/images/trackit.png";
import scribbleNet from "../assets/images/scribbleNet.png";
import BreezyHomes from "../assets/images/BreezyHomes.png";
import heart_stroke from "../assets/images/heart_stroke.png";
import movie from "../assets/images/movie.png";



export const projects = [

    {
        id: 1,
        title: "AI-Powered Smart Energy Management System for Electrical Substations",
        image: energy,
        description:
            "AI-powered system for detecting power loss and monitoring electrical substations using machine learning and time-series data.",
        tech: ["React", "GRU", "Autoencoder", "Python", "ML"],
        github: "https://github.com/prachithakor08/Smart-Energy-Management-System"
    },

    {
        id: 2,
        title: "TrackIt - Version Control System with AWS S3 Storage",
        image: trackit,
        description:
            "Version control system with project management features, authentication, and AWS S3-based cloud storage.",
        tech: ["React", "Node.js", "AWS S3"],
        github: "https://github.com/prachithakor08/TrackIt-Version-Control-System"
    },

    {
        id: 3,
        title: "ScribbleNet - Multiplayer Distributed Draw & Guess Game",
        image: scribbleNet,
        description:
            "Multiplayer distributed draw-and-guess game built with React and Node.js.",
        tech: ["React", "Node.js", "Claude API"],
        github: "https://github.com/prachithakor08/ScribbleNet-Real-Time-Distributed-Gaming-Platform"
    },

    {
        id: 4,
        title: "BreezyHomes",
        image: BreezyHomes,
        description:
            "Full-stack web application built using React, Node.js, and MongoDB.",
        tech: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/prachithakor08/Breezy-Homes"
    },

    {
        id: 5,
        title: "Heart Stroke Prediction",
        image: heart_stroke,
        description:
            "Machine learning application for predicting heart stroke risk from input data.",
        tech: ["Python", "Machine Learning", "React"],
        github: "https://github.com/prachithakor08/Heart-Stroke-Prediction"
    },

    {
        id: 6,
        title: "Movie Recommendation System",
        image: movie,
        description:
            "Movie recommendation application that provides movie suggestions based on user input and recommendation logic.",
        tech: ["Python", "Machine Learning", "React"],
        github: "https://github.com/prachithakor08/Movie_Recommendation_System"
    }

];