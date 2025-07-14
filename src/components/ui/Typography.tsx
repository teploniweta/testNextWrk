import React from 'react';
import { TypographyProps } from '@/types';

const Typography: React.FC<TypographyProps> = ({ 
  variant, 
  children, 
  className = '' 
}) => {
  const baseClasses = '';
  
  const variantClasses = {
    heading: 'text-2xl font-semibold',
    paragraph: 'text-base font-normal',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (variant === 'heading') {
    return <h2 className={classes}>{children}</h2>;
  }
  
  return <p className={classes}>{children}</p>;
};

export default Typography; 