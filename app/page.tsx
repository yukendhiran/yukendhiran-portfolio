'use client'
import SideBar from "./comp/SideBar/SideBar";
import Hero from "./comp/Hero/Hero";
import About from "./comp/About/About";
import Exp from "./comp/Exp/Exp";
import Projects from "./comp/Projrcts/Projects";
import Contact from "./comp/Contact/Contact";
export default function Home() {
   

  return (
    <div className="bg-secondary text-primary">
      <SideBar />
      <Hero />
      <About/>
      <Exp/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}