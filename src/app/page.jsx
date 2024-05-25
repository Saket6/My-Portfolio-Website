import Image from "next/image";
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import AboutSection from "./Components/AboutSection";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import UpArrow from "./Components/UpArrow";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-950">
      <Navbar/>
      <div className="container1 lg:px-32 md:px-25 px-10">
        <HeroSection/>
        {/* <div className="animate-bounce">
        <ArrowCircleUpIcon className="text-6xl"/>
      </div> */}
        <UpArrow/>
        <AboutSection/>
        <Skills/>
        <Projects/>
        <EmailSection/>
      
      </div>
      <Footer/>
      {/* <div className="fixed right-4 bottom-6 animate-bounce">
        <ArrowCircleUpIcon className="text-6xl"/>
      </div> */}
    </main>
  );
}
