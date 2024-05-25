"use client"
import React from 'react';
import SkillsCard from './SkillsCard';
import { motion } from 'framer-motion';
import ProgressBar from "@ramonak/react-progress-bar";
export default function Skills() {

    const skills1 = [
        {
            topic: 'HTML',
            progress: 90
        },
        {
            topic: 'CSS',
            progress: 80
        },
        {
            topic: 'JAVASCRIPT',
            progress: 75
        },

    ]

    const skills2 = [
        {
            topic: 'REACT',
            progress: 75
        },
        {
            topic: 'NEXT JS',
            progress: 65
        },
        {
            topic: 'NODE JS',
            progress: 80
        },
        {
            topic: 'EXPRESS JS',
            progress: 78
        },
        {
            topic: 'MONGO DB',
            progress: 70
        }
    ]


    return (
        <div id='skills' className='mb-40' >
            <h1 className='text-4xl text-center  mb-14 mt-20'>My <span className='text-yellow-500 font-bold'>Skills</span></h1>
            <div className=' grid  grid-cols-1 lg:grid-cols-3 px-14 justify-center text-center gap-x-7 gap-y-7'>
                {
                    skills1.map((skill, index) => {
                        return (
                           
                                <motion.div
                                    key={index}
                                    initial={
                                        {
                                            opacity: 0,
                                            // scale: 0.5,
                                            y: 100
                                        }
                                    }
                                    viewport={{ once: true }}
                                    whileInView={
                                        {
                                            opacity: 1,
                                            // scale: 1,
                                            y: 0,
                                            transition: {
                                                duration: 1,
                                                // ease: [0.04, 0.62, 0.23, 0.98]
                                            }
                                        }
                                    }
                                >
                                    <SkillsCard topic={skill.topic} progress={skill.progress} key={index} />
                                </motion.div>
                          

                        )
                    })
                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-64 md:gap-y-12 md:mt-10 gap-y-5 mt-10 p-5 md:p-10' >
                {
                    skills2.map((skill, index) => {
                        return (
                        
                                <motion.div
                                    key={index}
                                    initial={
                                        {
                                            opacity: 0,
                                            // scale: 0.5,
                                            y: 100
                                        }
                                    }
                                    whileInView={
                                        {
                                            opacity: 1,
                                            // scale: 1,
                                            y: 0,
                                            transition: {
                                                duration: 1,
                                                // ease: [0.04, 0.62, 0.23, 0.98]
                                            }
                                        }
                                    }
                                    viewport={{ once: true }}
                                >
                                    <div className='flex mb-2 justify-betwee'>
                                        <h3 className='mr-3'>{skill.topic}</h3>
                                        <h3>{skill.progress}%</h3>
                                    </div>

                                    <ProgressBar borderRadius='3px' topic={skill.topic} completed={skill.progress} key={index} />
                                </motion.div>

                        )
                    })
                }
            </div>
        </div>
    );
};
