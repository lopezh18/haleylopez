import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinkContainer = ({ links, title }) => (
  <div className='flex flex-col'>
      <h2 className='text-2xl'>{title}</h2>
      {Object.keys(links).map((key) => {
        if (title === 'Extras') {
          return (
            <a 
              key={`${key}-link`}
              className='my-2 hover:underline'
              href={links[key]}
              rel='noreferrer'
              target='_blank'
            >
                {`${key[0].toUpperCase()}${key.slice(1)}`}
              </a>
          )
        }
        return (
          <Link key={`${key}-link`} className='my-2 hover:underline' to={links[key]}>{`${key[0].toUpperCase()}${key.slice(1)}`}</Link>
      );
      })}
  </div>
);

export default FooterLinkContainer;