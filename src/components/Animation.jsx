import React from 'react';

const Animation = () => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="50" fill="#F56565" />
      <rect x="80" y="80" width="40" height="40" fill="#ECC94B">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};

export default Animation;
