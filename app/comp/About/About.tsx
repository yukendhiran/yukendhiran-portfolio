import React from 'react'
import Warpper from '../Hoc/Wrap'
import { useState, useEffect } from 'react'
import { client } from '../../lib/sanity'

function About() {
  const [about, setAbout] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "about"]`
    
    client.fetch(query).then((data) => {
      setAbout(data)
      setLoading(false)
    })

  }, [])

  

  if (isLoading) return <p>Loading...</p>
  if (!about) return <p>No profile data</p>
  return (
    <>
       <div className='text-primary'>
       <div className=' lg:text-sml sm:text-xs'>
            About.
        </div>
        <div className='lg:text-xs lg:w-1/2 sm:text-xxs  mb-10 indent-16 text-justify '>
          {about[0].about}
        </div>
       
        
       </div>
    </>
  )
}

export default Warpper(About)