import React from 'react';
import Wrapper from '../Hoc/Wrap';

interface Project {
  name: string;
  year: string;
  link: string;
  description: string;
  technologies: string[];
}

const ProjectDetails: React.FC<Project> = ({ name, year, description, technologies }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{year}</td>
      <td>{description}</td>
      <td>{technologies.join(", ")}</td>
    </tr>
  );
};

const Projects: React.FC = () => {
  const projectData: Project[] = [
    {
      name: "Project 1",
      year: "2021",
      link:"/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "Project 2",
      year: "2022",
      link:"/",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      technologies: ["Angular", "Express", "MySQL"],
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <div >
        <div className='lg:text-sml sm:text-xs'>Projects.</div>
        <div className='lg:hidden sm:text-xxs p-4'>
        {projectData.map((project, index) => (
          <div key={index} className='mb-4'>
            <div><a href={project.link} target="_blank" rel="noreferrer">{project.name}</a></div>
            <div>{project.year}</div>
            <div>{project.description}</div>
            <ul className='grid grid-cols-3'>
              {project.technologies.map((tech, index) => (
                <div key={index}>{tech}</div>
              ))}
            </ul>
          </div>
        ))}
      </div>
        <table className='w-full sm:hidden lg:block table-auto border-collapse border- border-primary'>
          <thead>
            <tr>
              <th className='border border-primary p-2'>Name</th>
              <th className='border border-primary p-2'>Year</th>
              <th className='border border-primary p-2'>Description</th>
              <th className='border border-primary p-2'>Technologies</th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((project, index) => (
              <tr key={index}>
                <td className='border border-primary p-2'><a href={project.link} target="_blank" rel="noreferrer">{project.name}</a></td>
                <td className='border border-primary p-2'>{project.year}</td>
                <td className='border border-primary p-2'>{project.description}</td>
                <td className='border border-primary p-2'>
                  <ul>
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
  );
};

export default Wrapper(Projects);