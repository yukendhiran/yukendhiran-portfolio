"use client"
import React from 'react';
import Image from 'next/image';
import Warpper from '../Hoc/Wrap'
import { motion, } from 'framer-motion';
function Hero() {

  const { scrollYProgress } = useViewportScroll()
const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return(
  <div className=' bg-secondary text-primary relative'>
    <motion.div style={{scale}} className=' right-0 ' >
      <Image src="/yuki.png" alt="hero" width={500} height={500}  className='  rounded-lg'/>
    </motion.div>
    <motion.div className=' font-space text-white text-sml ' >
      Yukendhiran
    </motion.div>
    
  </div>
  )
  
  
}

export default Warpper(Hero);
