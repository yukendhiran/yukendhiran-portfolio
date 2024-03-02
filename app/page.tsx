'use client'
import SideBar from "./comp/SideBar/SideBar";
import Hero from "./comp/Hero/Hero";
import About from "./comp/About/About";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Home() {
   

  return (
    <div className="bg-secondary">
      <SideBar />
      <motion.div >
        <Hero />
      </motion.div>
      <About/>
      
    </div>
  );
}