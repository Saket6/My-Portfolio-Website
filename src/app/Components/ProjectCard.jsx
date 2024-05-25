import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
export default function ProjectCard({ project }) {
    return (
        <div className='relative rounded-2xl flex flex-col justify-center'>
            <div className='relative h-50'>
                <div className='h-72 relative'>
                <Image
                    src={project.image}
                    className='rounded-t-2xl h-56'
                   
                    layout="fill"
                    // objectFit="cover"
                    alt={project.title}
                />
                </div>
                
                <div className='absolute inset-0 bg-slate-900 cursor-pointer bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-row gap-5 items-center justify-center'>
                    <Link href={project.gitUrl} target='_blank'>
                        <div className='text-white text-lg bg-black bg-opacity-50 p-5  rounded-full hover:bg-black transition-all duration-150'>
                            <GitHubIcon/>
                        </div>
                    </Link>
                    <Link href={project.previewUrl} target='_blank'>
                        <div className='text-white text-lg bg-black bg-opacity-50 p-5 rounded-full  hover:bg-black transition-all duration-150'>
                           <VisibilityOutlinedIcon/>
                        </div>
                    </Link>
                </div>
            </div>
            <h1 className='text-2xl pt-7 font-bold'>{project.title}</h1>
            <h3 className='py-2'>{project.description}</h3>
        </div>
    );
}