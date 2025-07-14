import React from 'react';
import { SwitcherProps } from '@/types';

const Switcher: React.FC<SwitcherProps> = ({ 
  label, 
  checked, 
  onChange, 
  icon, 
  disabled = false 
}) => {
  return (
    <div className="flex items-center justify-between px-3 py-[6px] border border-[#E8EBF0] border-solid rounded-md gap-2">
      <div className="flex items-center space-x-2">
        {icon && <div className="w-4 h-4">{icon}</div>}
        <span className={`text-sm whitespace-nowrap ${disabled ? 'text-gray-400' : 'text-[#36394A]'}`}>
          {label}
        </span>
      </div>
      
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div 
          className={`w-9 h-5 rounded-full transition-colors duration-200 ${
            checked 
              ? 'bg-blue-600' 
              : 'bg-gray-200'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div 
            className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ${
              checked ? 'translate-x-4' : 'translate-x-0'
            }`}
            style={{ marginTop: '2.1px', marginLeft: '2px' }}
          />
        </div>
      </label>
    </div>
  );
};

export default Switcher; 