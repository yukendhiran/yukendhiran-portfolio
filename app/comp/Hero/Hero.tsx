"use client"
import React from 'react';
import Image from 'next/image';
import Warpper from '../Hoc/Wrap'

import { useScroll, motion, useTransform } from "framer-motion";

function Hero() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  let scale = useTransform(scrollYProgress, [0, 1], ["100%", "90%"]);

  return (
    <>
  <div className='lg:hidden sm:block  text-primary min-h-screen '>
    <motion.div className='flex flex-col items-center justify-center my-auto mx-auto '
    >
    <motion.div className='mt-24' >
      <Image src="/yuki.png" alt="hero" width={500} height={500} className='rounded-lg' />
    </motion.div>
    <motion.div className=' mt-10 mb-24 text-xs ' >
        yukendhiran.
    </motion.div>
  </motion.div>
  </div>

  <div className='sm:hidden lg:block  text-primary min-h-screen '>
    <motion.div className='flex flex-col w-1/2  '>
      <motion.div className=' mt-10 mb-24 text-sml ' >
        yukendhiran.
    </motion.div>
    <div>" Jack of All Trades, Master of None but Often Better than Master of One "</div>
  </motion.div> 
  <motion.div className='ml-[700px]' style={{ y }} >
      <Image src="/yuki.png" alt="hero" width={500} height={500} className='rounded-lg' />
    </motion.div>
  </div>
    </>
  )
}

export default Warpper(Hero);