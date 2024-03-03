import React from 'react';
import Wrapper from '../Hoc/Wrap';
import { Icon } from '@iconify/react';

const Contact: React.FC = () => {
  const linkedinLink = "https://www.linkedin.com/in/your-linkedin-profile";
  const githubLink = "https://github.com/your-github-profile";
  const emailAction = "mailto:example@example.com";
  const phoneAction = "tel:+1234567890";

  return (
    <div className='sm:mb-16 lg:mb-0'>
      <div className='lg:text-sml sm:text-xs '>Contact.</div>
      <div className="mx-auto flex  flex-row justify-center smt-3  sm:mb-10 lg:mb-0">
        <a href={linkedinLink} target="_blank" rel="noreferrer" className="">
          <Icon icon="mdi:linkedin" className="lg:text-sml sm:text-4xl" />
        </a>
        <a href={githubLink} target="_blank" rel="noreferrer" className="">
          <Icon icon="mdi:github" className="lg:text-sml sm:text-4xl" />
        </a>
        <a href={emailAction} className="">
          <Icon icon="mdi:email" className="lg:text-sml sm:text-4xl" />
        </a>
        <a href={phoneAction} className="">
          <Icon icon="mdi:phone-outline" className="lg:text-sml sm:text-4xl" />
        </a> 
      </div>
    </div>
  );
};

export default Wrapper(Contact);