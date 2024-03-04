import React from 'react';
import Wrapper from '../Hoc/Wrap';
import { Icon } from '@iconify/react';

const Contact: React.FC = () => {
  const contactData = [
    { name: "mdi:linkedin", link: "https://www.linkedin.com/in/your-linkedin-profile" },
    { name: "mdi:github", link: "https://github.com/your-github-profile" },
    { name: "mdi:email", link: "mailto:yukendhiranelango@gmail.com" },
    { name: "mdi:phone-outline", link: "tel:+919361491461" },
    { name: "mdi:download-box-outline", link: "" }
  ];

  return (
    <div className='sm:mb-16 lg:mb-0'>
    <div className='lg:text-sml sm:text-xs'>Contact.</div>
    <div className="mx-auto grid  grid-cols-3 justify-center place-items-center sm:space-x-1 lg:space-x-2 gap-6  sm:mb-4 lg:mb-0">
      {contactData.map((contact, index) => (
        <a key={index} href={contact.link} target="_blank" rel="noreferrer" className="">
          <Icon icon={contact.name} className="lg:text-sml sm:text-4xl" />
        </a>
      ))}
    </div>
    <div className='mt-10'></div>
    <div className='mx-auto text-center lg:text-xs sm:text-xxs'>
        Grateful for your interest!
    </div>
    <div className='mt-5 mx-auto text-center lg:text-xs sm:text-xxs'>###</div>
  </div>
  );
};

export default Wrapper(Contact);