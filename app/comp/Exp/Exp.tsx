import React from 'react';
import Wrapper from '../Hoc/Wrap';

const Exp = () => {
  const experienceData = [
    {
      company: "Aeira Advert.",
      position: "Full Stack Engineer",
      duration: "April 2023 - Present",
      responsibilities: [
        "Developed and maintained web applications",
        "Uses architecuture and design",
        "Implemented new features and enhancements"
      ],
      website: "https://www.abcinc.com" // Add the website for the company
    },
  
  ];

  return (
    <div >
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
            {experienceData.map((experience, index) => (
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
        {experienceData.map((experience, index) => (
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
    </div>
  );
}

export default Wrapper(Exp);