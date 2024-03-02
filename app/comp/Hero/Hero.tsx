"use client"
import React from 'react';
import Image from 'next/image';
import Warpper from '../Hoc/Wrap'

import { useScroll, motion, useTransform } from "framer-motion";

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], ['0%', '170%']);
  

  return (
    <>
  <div className='lg:hidden sm:block  text-primary min-h-screen '>
    <motion.div className='flex flex-col items-center justify-center my-auto mx-auto '
    >
    <motion.div className='mt-24' >
      <Image src="/yuki.png" alt="hero" width={300} height={300} className='rounded-lg' />
    </motion.div>
    <motion.div className=' mt-10 mb-10 text-xs ' >
        yukendhiran.  
    </motion.div>  
  </motion.div>
  <div className='text-xxs w-full'> 
    "Jack of all trades, master of none, but better than a master of one."
    </div>
  </div>

  <div className='sm:hidden lg:block  text-primary min-h-screen '>
    <motion.div className='flex flex-col w-1/2  '>
      <motion.div className=' mt-10 mb-16 text-sml ' >
        yukendhiran.
      </motion.div>
   
  </motion.div> 
  <motion.div className=''  >
      <div className='flex '>
        <div className='text-xs w-1/2'> 
           "Jack of all trades, master of none, but better than a master of one."
         </div>
      <motion.div className='ml-16' style={{y}}> 
        <Image src="/yuki.png" alt="hero" width={400} height={400} className='rounded-lg' />
      </motion.div>
      </div>
      
      </motion.div>
  </div>
    </>
  )
}

export default Warpper(Hero);