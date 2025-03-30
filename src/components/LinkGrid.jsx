import React from 'react';
import LinkCard from './LinkCard';
import { links } from '../data/links';

const LinkGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {links.map((link, index) => (
        <LinkCard
          key={index}
          title={link.title}
          url={link.url}
          imageUrl={link.imageUrl}
        />
      ))}
    </div>
  );
};

export default LinkGrid;