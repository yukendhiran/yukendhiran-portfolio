'use client'
import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../../utils/useMousePosition';

const withMask = (Component1, Component2) => {
  return function MaskEffectWrapper(props) {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 400 : 40;

    return (
      <div className=" flex flex-col ">
        {/* Render Component1 on normal screen */}
        <Component1 {...props} />

        {/* Render Component2 under mask */}
        <motion.div
          className='mask absolute'
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        >
          <Component2
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </motion.div>
      </div>
    );
  };
};

export default withMask;
