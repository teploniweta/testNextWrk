import React from 'react';
import Link from 'next/link';
import { FilterCellProps } from '@/types';

const FilterCell: React.FC<FilterCellProps> = ({ 
  gameName, 
  offersCount, 
  onClick,
  isSelected = false,
  href
}) => {
  const baseClasses = 'inline-flex items-center justify-between h-8 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer hover:opacity-80 responsive-filter-cell';
  
  const selectedStyles = isSelected ? {
    backgroundColor: '#5C80FD',
    color: 'white'
  } : {
    backgroundColor: 'rgba(92, 128, 253, 0.08)',
    color: '#4280f8'
  };
  
  const classes = `${baseClasses}`;

  const content = (
    <>
      <span className={offersCount !== undefined ? "mr-2 responsive-text" : "responsive-text"}>{gameName}</span>
      {offersCount !== undefined && (
        <span className="pl-1.5 py-0.5 rounded-full text-xs opacity-70 responsive-text">
          {offersCount}
        </span>
      )}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} legacyBehavior>
        <a className={classes} style={selectedStyles}>
          {content}
        </a>
      </Link>
    );
  }

  return (
    <div className={classes} style={selectedStyles} onClick={onClick}>
      {content}
    </div>
  );
};

export default FilterCell; 