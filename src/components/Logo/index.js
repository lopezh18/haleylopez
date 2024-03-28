import React from 'react';

const Logo = ({ size, addedStyles }) => (
  <div className={`font-serif ${size} ${addedStyles && addedStyles}`}>
    <p>HL</p>
  </div>
);

export default Logo;