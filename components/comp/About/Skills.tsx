"use client"
import React from 'react';
import { Icon } from '@iconify/react';
import Wrapper from '../Hoc/Wrap';
import { client } from '../../../app/lib/sanity'
import {  useState, useEffect } from "react";

interface Skill {
  name: string;
  site: string;
}

const Skills = () => {
  const [icon, setIcon] = useState<Skill[]>([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "skill"]`
    
    client.fetch(query).then((data: Skill[]) => {
      setIcon(data)
      setLoading(false)
    })
  }, [])


  if (isLoading) return <p>Loading...</p>
  if (!icon) return <p>No  data</p>


  return (
    <>
      <div className='lg:text-sml sm:text-xs mt-14'>Skills.</div>
      <div className="flex justify-center">
        <div className="grid  sm:grid-cols-4  lg:grid-cols-6 gap-0 mx-auto border border-primary">
          {icon.map((icon, index) => (
            <a key={index} href={icon.site} target="_blank" rel="noreferrer" className="border border-primary p-2 flex items-center justify-center">
              <Icon icon={icon.name} className="lg:text-sml sm:text-6xl " />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Wrapper(Skills);