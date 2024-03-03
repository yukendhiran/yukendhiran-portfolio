import React from 'react';
import { Icon } from '@iconify/react';
import Wrapper from '../Hoc/Wrap';
const Skills = () => {
  const iconData = [
    { name: "logos:react", link: "https://www.reactjs.org" },
    { name: "teenyicons:react-outline", link: "https://www.reactjs.org" },
    { name: "mingcute:github-fill", link: "https://www.github.com" }
  ];

  return (
    <>
      <div className='lg:text-sml sm:text-xs'>Skills.</div>
      <div className="flex justify-center">
        <div className="grid  sm:grid-cols-4  lg:grid-cols-6 gap-0 mx-auto border border-primary">
          {iconData.map((icon, index) => (
            <a key={index} href={icon.link} target="_blank" rel="noreferrer" className="border border-primary p-2 flex items-center justify-center">
              <Icon icon={icon.name} className="lg:text-sml sm:text-6xl " />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Wrapper(Skills);