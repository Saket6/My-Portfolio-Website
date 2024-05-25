"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import LabTabs from "./TabsContainer";
// import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  // const [tab, setTab] = useState("skills");
  // const [isPending, startTransition] = useTransition();

  // const handleTabChange = (id) => {
  //   startTransition(() => {
  //     setTab(id);
  //   });
  // };

  const Education=[
    {
      id:1,
      duration: '2009-2019',
      institution: 'Kendriya Vidyalaya, Angul, Odisha'
    },
    {
      id:2,
      duration: '2019-2021',
      institution: 'Lajpatr Rai DAV Public School, Gandarpur, Cuttack'
    },
    {
      id:3,
      duration: '2021-Present',
      institution: 'BTECH in Computer Science in Odisha University of Technology and Research, Ghatikia, Bhubaneswar'
    }
  ]

  const Experience=[
    {
      id:1,
      text: 'Participated in Smart India Hackathon with a team of developers and built a Curriculum Design Portal using MERN Stack'
    },
    {
      id:2,
      text: 'Participated in Kavach Hackathon with a team of developers and built a Spam Detection Website'
    }
  ]

  const tabItems={
    education: Education,
    experience: Experience
  }

  return (
    <section className="text-white mt-10 h-max " id="about">
      <div className="min-h-screen  md:grid lg:grid lg:grid-cols-[40%,1fr] gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex items-center justify-center md:block">
        <Image src="/images/picofme2.png " className="h-80 w-80 md:h-full md:w-full " alt="" width={500} height={500} />
        </div>
        <div className="mt-4 md:mt-0 text-left  md:text-left flex flex-col h-full justify-center ">
          <h2 className="md:text-5xl text-4xl md:mt-0 mt-10 font-bold  mb-8 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent ">About Me</h2>
          <p className="md:text-3xl text-2xl" >Hello, I&apos;m{" "}<span className=" text-yellow-400  ">Saket Nanda</span> </p>
          <p className="text-base lg:text-l">
            I am a full stack web developer with a strong passion for building 
            interactive and responsive web applications. My expertise includes JavaScript, 
            React, Redux, Node.js, Express, HTML, CSS, and Git. As a quick learner, I continuously 
            seek opportunities to expand my skills. I thrive in collaborative environments and am eager 
            to contribute to dynamic teams to create exceptional applications.
          </p>
          <div className="flex flex-col justify-start mt-8 min-h-80">
            <LabTabs tabItems={tabItems}/>
            {/* <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Contact Me</h3>
            <p className="text-white text-xl"><EmailIcon className="mr-3 mb-3" /> saketnanda164@gmail.com </p>
            <p className="text-white"><ContactPhoneIcon className="mr-3 mb-3"/> +91 7735626103 </p>
            <p className="text-white"><CalendarMonthIcon className="mr-3"/> 01-12-2002</p> */}

            
            {/* <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {/* {TAB_DATA.find((t) => t.id === tab).content} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
