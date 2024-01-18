'use client'

import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../../utils/useMousePosition';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className='ml-40 mr-40 '>
      <div className=" font-space text-sml flex ">
      <p className='text-white' >Yukendhiran</p>
      
        <motion.div 
        className=' mask absolute'
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          Yukendhiran
          </p>
      </motion.div>
      </div>
    </main>
  )
}