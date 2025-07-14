import React, { useState, useRef, useEffect } from 'react';
import { SelectProps } from '@/types';

const Select: React.FC<SelectProps> = ({ 
  options, 
  value, 
  onChange, 
  placeholder = 'Выберите опцию',
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  
  const selectedOption = options.find(option => option.value === value);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };
  
  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white dark:bg-[var(--white)] border border-gray-300 dark:border-[var(--item-border-color)] rounded-md px-3 py-1.5 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
      >
        <span className={`block truncate pr-8 ${selectedOption ? 'text-[#36394A] dark:text-[var(--text-muted)]' : 'text-gray-500 dark:text-[var(--text-secondary)]'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-[var(--white)] shadow-lg max-h-60 rounded-md py-1 text-sm overflow-auto focus:outline-none border border-gray-200 dark:border-[var(--item-border-color)]">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100 dark:hover:bg-[var(--item-border-color)] ${ 
                value === option.value ? 'text-[#36394A] dark:text-[var(--text-muted)]' : 'text-[#36394A] dark:text-[var(--text-muted)]'
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select; 