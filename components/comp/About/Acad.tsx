"use client"
import React from 'react';
import Wrapper from '../Hoc/Wrap';
import { useState, useEffect } from 'react'
import { client } from '../../../app/lib/sanity'

interface Academics {
  degree: string;
  year: string;
  cgpa: string;
  uni: string;
}

const Acad = () => {
  const [acad, setAcad] =  useState<Academics[]>([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "acad"]`
    
    client.fetch(query).then((data: Academics[]) => {
      setAcad(data)
      setLoading(false)
    })

  }, [])
  
  if (isLoading) return <p>Loading...</p>
  if (!acad) return <p>No profile data</p>

  return (
    <div>
      <div className="overflow-x-auto ">
      <div className='lg:text-sml  sm:text-xs'>Academics.</div>
      <table className="w-full table-auto sm:hidden lg:block">
        <thead>
          <tr>
            <th className="p-2 sm:text-xxs lg:text-xs border border-primary">Degree</th>
            <th className="p-2 sm:text-xxs lg:text-xs border border-primary">Year</th>
            <th className="p-2 sm:text-xxs lg:text-xs border border-primary">CGPA</th>
            <th className="p-2 sm:text-xxs lg:text-xs border border-primary">University</th>
          </tr>
        </thead>
        <tbody>
          {acad.map((item, i) => (
            <tr key={i}>
              <td className="p-2 sm:text-xxs lg:text-xs border border-primary">{item.degree}</td>
              <td className="p-2 sm:text-xxs lg:text-xs border border-primary">{item.year}</td>
              <td className="p-2 sm:text-xxs lg:text-xs border border-primary">{item.cgpa}</td>
              <td className="p-2 sm:text-xxs lg:text-xs border border-primary">{item.uni}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className='lg:hidden sm:text-xxs p-4'>
        {acad.map((item, index) => (
          <div key={index} className='mb-4'>
            
            <div>{item.degree}</div>
            <div>{item.year}</div>
            <div>CGPA:{item.cgpa}</div>
            <div>{item.uni}</div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default  Wrapper(Acad);