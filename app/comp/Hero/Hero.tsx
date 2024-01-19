'use client'
import React from 'react';
import withMaskEffect from '../Hoc/Mask';

const OffScr = ({ onMouseEnter, onMouseLeave }) => (
  <>
    <p className=' font-space text-sml ml-96 mt-96' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    Yukendhiran
  </p>
  </>
  
);

const OnScr = () =>(
  <>
  <p className='text-white  font-space ml-96 mt-96 text-sml'>Yukendhiran</p>
  </>
)

const CustomComponentWithMask = withMaskEffect(OnScr,OffScr);

export default CustomComponentWithMask;
