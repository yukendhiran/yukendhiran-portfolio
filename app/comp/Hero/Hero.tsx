"use client"
import React from 'react';
import Warpper from '../Hoc/Wrap'
import { useState, useEffect } from 'react'
import { client } from '../../lib/sanity'
import { urlForImage } from '@/app/lib/image';

import { useScroll, motion, useTransform } from "framer-motion";


function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], ['0%', '150%']);

  const [home, setHome] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "home"]`
    
    client.fetch(query).then((data) => {
      setHome(data)
      setLoading(false)
    })

  }, [])

  

  if (isLoading) return <p>Loading...</p>
  if (!home) return <p>No  data</p>

  return (
    <>
  <div className='lg:hidden sm:block  text-primary min-h-screen '>
    <motion.div className='flex flex-col items-center justify-center my-auto mx-auto '
    >
    <motion.div className='mt-24' >
      <img src={urlForImage(home[0].image)} alt="hero" width={300} height={300} className='rounded-lg' />
    </motion.div>
    <motion.div className=' mt-10 mb-10 text-xs ' >
        {home[0].name}  
    </motion.div>  
  </motion.div>
  <div className='text-xxs w-full indent-16 text-justify'> 
    {home[0].proverb}
    </div>
  </div>

  <div className='sm:hidden lg:block  text-primary min-h-screen '>
    <motion.div className='flex flex-col w-1/2  '>
      <motion.div className=' mt-10 mb-16 text-sml ' >
        {home[0].name}
      </motion.div>
   
  </motion.div> 
  <motion.div className=''  >
      <div className='flex '>
        <div className='text-xs w-1/2 indent-16 text-justify'> 
        {home[0].proverb}
           </div>
      <motion.div className='ml-16' style={{y}}> 
        <img src={urlForImage(home[0].image)} alt="hero" width={400} height={400} className='rounded-lg' />
      </motion.div>
      </div>
      
      </motion.div>
  </div>
    </>
  )
}

export default Warpper(Hero);