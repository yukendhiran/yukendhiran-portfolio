import React from 'react';
import Wrapper from '../Hoc/Wrap';
import { Icon } from '@iconify/react';
import { client } from '../../../app/lib/sanity'
import {  useState, useEffect } from "react";

interface Contact {
  name: string;
  link: string;
}


const Contact: React.FC = () => {
 

  const [contact, setContact] = useState<Contact[]>([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "contact"]`
    
    client.fetch(query).then((data: Contact[]) => {
      setContact(data)
      setLoading(false)
    })
  }, [])
  

  if (isLoading) return <p>Loading...</p>
  if (!contact) return <p>No  data</p>

  return (
    <section id='contact' className='sm:mb-16 lg:mb-0'>
    <div className='lg:text-sml sm:text-xs'>Contact.</div>
    <div className="mx-auto grid  grid-cols-3 justify-center place-items-center sm:space-x-1 lg:space-x-2 gap-6  sm:mb-4 lg:mb-0">
      {contact.map((contact, index) => (
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
  </section>
  );
};

export default Wrapper(Contact);