import React from 'react';

const Logo = ({ size, addedStyles }) => (
  <div className={`font-serif ${addedStyles && addedStyles}`}>
    <p id='logo' className={`${size}`}>HL</p>
  </div>
);

export default Logo;