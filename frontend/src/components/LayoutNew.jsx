import React from 'react';
import Background from './Background';

const LayoutNew = ({ children }) => {
  return (
    <div>
      <Background />
      {children}
    </div>
  );
};

export default LayoutNew;
