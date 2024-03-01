'use client'
import SideBar from "./comp/SideBar/SideBar";
import Hero from "./comp/Hero/Hero";
import About from "./comp/About/About";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], ['0%', '5%']); // Adjust the range and output values as needed
  const scale = useTransform(scrollY, [0, 200], [1, 0.9]); // Adjust the range and output values as needed

  return (
    <div className="bg-secondary">
      <SideBar />
      <motion.div style={{y}}>
        <Hero />
      </motion.div>
      <About/>
      
    </div>
  );
}