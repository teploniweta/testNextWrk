import React from 'react';
import { SearchInputProps } from '@/types';

const SearchInput: React.FC<SearchInputProps> = ({ 
  value, 
  onChange, 
  placeholder = 'Поиск...',
  className = '' 
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg 
          className="w-5 h-5 text-gray-400 dark:text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </div>
      
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="block w-full pl-10 pr-3 py-2 border border-[#E8EBF0] rounded-md leading-5 bg-white text-[#36394A] placeholder-gray-500 dark:bg-[var(--input-bg-color)] dark:border-[var(--item-border-color)] dark:text-[var(--text-color)] dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 placeholder:text-sm"
      />
    </div>
  );
};

export default SearchInput; 