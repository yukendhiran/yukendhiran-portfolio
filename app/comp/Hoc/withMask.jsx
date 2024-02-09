// cursorHOC.js
import React from 'react';
import Cursor from './Mask';

const withCursorEffect = (WrappedComponent) => {
  return function CursorEffectWrapper(props) {
    return (
      <div>
        <WrappedComponent {...props} />
        <Cursor />
      </div>
    );
  };
};

export default withCursorEffect;
