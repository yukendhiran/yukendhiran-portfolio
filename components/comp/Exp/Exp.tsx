import React from 'react';
import Wrapper from '../Hoc/Wrap';
import { client } from '../../../app/lib/sanity'
import {  useState, useEffect } from "react";

interface Experience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  website: string;
}

const Exp = () => {

  const [exp, setExp] = useState<Experience[]>([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "exp"]`
    
    client.fetch(query).then((data: Experience[]) => {
      setExp(data)
      setLoading(false)
    })
  }, [])

  

  if (isLoading) return <p>Loading...</p>
  if (!exp) return <p>No  data</p>

  return (
    <section id='experience' >
      <div className='lg:text-sml sm:text-xs mt-10'>Experience.</div>
      <div className='hidden lg:block '>
        <table className='w-full table-auto border-collapse border-2 border-primary'>
          <thead>
            <tr>
              <th className='border border-primary p-2'>Company</th>
              <th className='border border-primary p-2'>Position</th>
              <th className='border border-primary p-2'>Duration</th>
              <th className='border border-primary p-2'>Responsibilities</th>
            </tr>
          </thead>
          <tbody>
            {exp.map((experience, index) => (
              <tr key={index}>
                <td className='border border-primary p-2'><a href={experience.website} target="_blank" rel="noreferrer">{experience.company}</a></td>
                <td className='border border-primary p-2'>{experience.position}</td>
                <td className='border border-primary p-2'>{experience.duration}</td>
                <td className='border border-primary p-2'>
                  <ul>
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='lg:hidden sm:text-xxs p-4'>
        {exp.map((experience, index) => (
          <div key={index} className='mb-4'>
            <div><a href={experience.website} target="_blank" rel="noreferrer">{experience.company}</a></div>
            <div>{experience.position}</div>
            <div>{experience.duration}</div>
            <ul>
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wrapper(Exp);