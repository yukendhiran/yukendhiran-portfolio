import React from 'react';
import Wrapper from '../Hoc/Wrap';
import { client } from '../../../app/lib/sanity'
import {  useState, useEffect } from "react";
interface Project {
  name: string;
  year: string;
  link: string;
  description: string;
  technologies: string[];
}


const Projects: React.FC = () => {

  const [project, setProject] = useState<Project[]>([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "project"]`
    
    client.fetch(query).then((data: Project[]) => {
      setProject(data)
      setLoading(false)
    })
  }, [])

 
  if (isLoading) return <p>Loading...</p>
  if (!project) return <p>No  data</p>

  return (
    <section id='projects'>
      <div >
        <div className='lg:text-sml sm:text-xs'>Projects.</div>
        <div className='lg:hidden sm:text-xxs p-4 mx-auto'>
        {project.map((project, index) => (
          <div key={index} className='mb-4'>
            <div><a href={project.link} target="_blank" rel="noreferrer">{project.name}</a></div>
            <div>{project.year}</div>
            <div>{project.description}</div>
            <ul className='grid grid-cols-2 text-xxs'>
              {project.technologies.map((tech, index) => (
                <div key={index}>{tech}</div>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='sm:hidden lg:block' >
        <table className='w-full table-auto border-collapse border-2 border-primary'>
          <thead>
            <tr>
              <th className='border border-primary p-2'>Name</th>
              <th className='border border-primary p-2'>Year</th>
              <th className='border border-primary p-2'>Description</th>
              <th className='border border-primary p-2'>Technologies</th>
            </tr>
          </thead>
          <tbody>
            {project.map((project, index) => (
              <tr key={index}>
                <td className='border border-primary p-2'><a href={project.link} target="_blank" rel="noreferrer">{project.name}</a></td>
                <td className='border border-primary p-2'>{project.year}</td>
                <td className='border border-primary p-2'>{project.description}</td>
                <td className='border border-primary p-2'>
                  <ul className='grid grid-cols-2 '>
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </section>
  );
};

export default Wrapper(Projects);