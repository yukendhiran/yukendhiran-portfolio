import React from 'react';

const Acad = () => {
  const acad = [
    {
      name: "B.Sc  Computer Science",
      year: "2020-2023",
      cgpa: "8.73",
      university: "Vellore Institute of Technology",
    },
    {
      name: "Master of Computer Application",
      year: "2023-2025",
      cgpa: "8.43",
      university: "Vellore Institute of Technology",
    },
  
  ];

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
              <td className="p-2 sm:text-xxs lg:text-xs border border-primary">{item.name}</td>
              <td className="p-2 sm:text-xxs lg:text-xs border border-primary">{item.year}</td>
              <td className="p-2 sm:text-xxs lg:text-xs border border-primary">{item.cgpa}</td>
              <td className="p-2 sm:text-xxs lg:text-xs border border-primary">{item.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className='lg:hidden sm:text-xxs p-4'>
        {acad.map((experience, index) => (
          <div key={index} className='mb-4'>
            
            <div>{experience.name}</div>
            <div>{experience.year}</div>
            <div>CGPA:{experience.cgpa}</div>
            <div>{experience.university}</div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acad;