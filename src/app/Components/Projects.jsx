"use client"
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
export default function Projects() {

  const projectsData = [
    {
      id: 1,
      title: "Chat Web Application",
      description: "Created a simple text chat web application using React, Node JS and Socket.io",
      image: "/images/chat.png",
      tag: ["All", "Full Stack"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Scramble Game",
      description: "Created a simple scramble game using HTML, CSS and JavaScript",
      image: "/images/scramble.png",
      tag: ["All", "Frontend"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Curriculum Design Portal",
      description: "Created a Curriculum design portal where designers can design curriculum using React, NodeJS and Express JS",
      image: "/images/aicte.png",
      tag: ["All", "Full Stack"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Social Media Web Application",
      description: "Created a social media app where users can create, delete, like, and comment posts using MERN stack",
      image: "/images/social media.png",
      tag: ["All", "Full Stack"],
      gitUrl: "/",
      previewUrl: "https://social-media-app-1-n8hx.onrender.com/",
    },
    {
      id: 5,
      title: "Dance Website",
      description: "Created a landing page for a Dance Website and enabled user authentication",
      image: "/images/dance.png",
      tag: ["All", "Backend"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Food Delivery Web App",
      description: "Created a full stack food delivery web app using React, NodeJS, ExpressJS",
      image: "/images/food.jpg.png",
      tag: ["All", "Full Stack"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

  const tags = [
    {
      id: 1,
      name: 'All'
    },
    {
      id: 2,
      name: 'Frontend'
    },
    {
      id: 3,
      name: 'Backend'
    },
    {
      id: 4,
      name: 'Full Stack'
    }
  ]

  const transitionDurations = [0.5, 1, 1.5];

  const [currTag, setTag] = useState('All');

  return (
    <div className='flex flex-col justify-center items-center mb-48 mt-10 md:pt-32' id='projects'>
      <h1 className='text-4xl text-center mb-14 '>My <span className='text-yellow-500 font-bold'>Projects</span></h1>
      <ul className='text-center flex md:p-2 '>
        {
          tags.map((tag, index) => {
            return (
              <li
                key={index}
                onClick={() => setTag(tag.name)}
                className={
                  currTag === tag.name
                    ? 'py-1 text-sm px-2 mx-1  rounded-full md:px-5 md:py-2 border-1 md:border-2 font-bold bg-slate-50 text-black md:text-xl mb-8 hover:bg-slate-50 hover:text-black transition-all duration-200 hover:border-black md:mx-2  border-white cursor-pointer list-none'
                    : 'py-1 text-sm px-2 mx-1 rounded-full md:px-5 md:py-2 border-1 md:border-2 font-bold  md:text-xl mb-8 hover:bg-slate-50 hover:text-black transition-all duration-200 hover:border-black md:mx-2  border-white cursor-pointer list-none'
                }
              >
                {tag.name}
              </li>
            );
          })
        }
      </ul>
      <div className="cards grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
        {
          projectsData.filter((project)=>
          {
            return(
              project.tag.includes(currTag) ||
              currTag === 'All'
            )
          }).map((project, index) => {
            const cardTransitionDuration = transitionDurations[index % transitionDurations.length]; // Use modulo to cycle through durations
  
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 200 }}
                whileInView={
                  {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: cardTransitionDuration
                    }
                  }
                }
                viewport={{ once: true }}
                // animate={{ opacity: 1, y:0 }}
                // transition={{ duration: cardTransitionDuration }}
                className="project-card"
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })
        }
      </div>
    </div>
  );

};
