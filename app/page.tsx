"use client"

import SideBar from "./comp/SideBar/SideBar";
import Hero from "./comp/Hero/Hero";
import About from "./comp/About/About";
import Exp from "./comp/Exp/Exp";
import Projects from "./comp/Projrcts/Projects";
import Contact from "./comp/Contact/Contact";

import Cert from './comp/About/Cert'
import Acad from './comp/About/Acad'
import Skills from './comp/About/Skills'
export default function Home() {
   

  return (
    <div className="bg-secondary text-primary">
      <SideBar />
      <Hero />
      <About/>
      <Acad/>
      <Cert/>
      <Skills/>
      <Exp/>
      <Projects/>
      <Contact/>
     
      
    </div>
  );
}