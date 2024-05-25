"use client"
import React, { useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

export default function SkillsCard({ topic, progress }) {


    const cardVariants = {
        initial: { y: 100, opacity: 0 },
        // animate: { y: 0, opacity: 1 },
      };

    // useEffect(() => {
    //     console.log("progress for" + topic + ": " + progress)
    // }, [])
    return (
        <motion.div className='flex flex-col justify-center items-center p-5 rounded-3xl cursor-pointer hover:scale-105 transition-all lg:bg-slate-900 '
        // variants={cardVariants}
        // initial="initial"
        // animate={isInView ? "animate" : "initial"}
        // whileInView={
        //     {
        //         opacity: 1,
        //         scale: 1,
        //         y: 0,
        //         transition: {
        //             duration: 1,
        //             // ease: [0.04, 0.62, 0.23, 0.98]
        //         }
        //     }
        // }
        // transition={{ duration: 0.3, delay: index * 0.4 }}
        
        >
            <h3 className='md:text-3xl text-xl text-white mb-5 md:mb-10'> {topic} </h3>

            <div className=' md:h-32 h-24 w-32 ' >
            <CircularProgressbar
                value={progress}
                text={`${progress}%`}
                styles={buildStyles({
                    rotation: 1,
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 3,
                    pathTransition: 'stroke-dashoffset 0.5s ease 0s ',
                    pathColor: `rgba(249, 206, 7, ${progress / 100})`,
                    textColor: 'white',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}
            />
            </div>

           
        </motion.div>
    );
};
