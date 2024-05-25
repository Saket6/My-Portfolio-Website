"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import linkedinIcon from '../../../public/images/li.svg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import XIcon from '@mui/icons-material/X';
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16  ">
      <div className="grid grid-cols-1  md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center px-2 md:px-0 text-center sm:text-left justify-center md:justify-self-start"
        >
          <h1 className="text-white my-5 md:mt-0 mt-10 mb-4 md:text-4xl text-3xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="lg:text-7xl md:mt-0 mt-10  md:text-6xl text-4xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent ">
              Hello, I&apos;m{" "}
              <br className="md:hidden"></br>
               {" "} SAKET NANDA
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Progammer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 text-pretty lg:text-xl">
          Passionate web developer with a knack for creating dynamic and responsive websites using the latest technologies.
          </p>
          <div className="p-8  md:p-0 flex text-center flex-col  md:flex-row md:justify-start  justify-center ">
            <Link
              href="/#contact"
              className="md:my-auto px-5 py-2  my-2  bg-pink-700 rounded-full"
            >
              Hire Me
              <motion.span
              >
              <ArrowCircleRightIcon className="ml-1  animate-trans transition-all duration-2000 ease-in-out " />
              </motion.span>
             
            </Link>
            <Link
              href="/"
              className="md:ml-3"
            >
              <span className="block border-2 my-2 md:my-0 hover:bg-pink-700 duration-200 border-pink-700 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
            <div className="flex mt-7 gap-5 justify-center md:justify-start  ">
              <Link
                href="https://www.linkedin.com/in/saket-nanda-106b55257/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className= " border-red-2 text-4xl rounded-full  hover:scale-110 transition-all duration-150" />
                
              </Link>

              <Link
                href="https://github.com/Saket6"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className= " border-red-2 text-4xl rounded-full hover:scale-110 transition-all duration-150" />
                
              </Link>

              <Link
                href="https://x.com/saketnanda6"
                target="_blank"
                rel="noreferrer"
              >
                <XIcon className= " border-red-2 text-4xl rounded-full hover:scale-110 transition-all duration-150" />
                
              </Link>
            </div>
          <div>

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" hidden md:block rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
            //   src="/images/file.png"
            src='/images/picofme.png'
              alt="hero image"
            //   className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={1000}
              height={1000}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
