import React from 'react'
import Warpper from '../Hoc/Wrap'
function About() {
  return (
    <>
       <div className='text-primary'>
       <div className=' lg:text-sml sm:text-xs'>
            About.
        </div>
        <div className='lg:text-xs lg:w-1/2 sm:text-xxs'>Hi, I'm Yukendhiran. I'm a versatile professional with expertise in design, development, and administration. With a passion for crafting elegant solutions, I thrive in creating impactful experiences through technology. My diverse skill set allows me to approach challenges from multiple perspectives, ensuring holistic and innovative solutions.</div>
        
       </div>
    </>
  )
}

export default Warpper(About)