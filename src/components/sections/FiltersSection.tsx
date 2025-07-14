import React, { useState } from 'react';
import FilterCell from '@/components/ui/FilterCell';
import Select from '@/components/ui/Select';
import Switcher from '@/components/ui/Switcher';
import SearchInput from '@/components/ui/SearchInput';
import SupportModal from '@/components/ui/SupportModal';

interface FiltersSectionProps {
  categoryFilters: Array<{ name: string }>;
  selectedCategory: string;
  onCategoryToggle: (categoryName: string) => void;
  deliveryOptions: Array<{ value: string; label: string }>;
  deliveryMethod: string;
  onDeliveryMethodChange: (value: string) => void;
  showOnlyAvailable: boolean;
  onShowOnlyAvailableChange: (value: boolean) => void;
  fastDelivery: boolean;
  onFastDeliveryChange: (value: boolean) => void;
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
}

const FiltersSection: React.FC<FiltersSectionProps> = ({
  categoryFilters,
  selectedCategory,
  onCategoryToggle,
  deliveryOptions,
  deliveryMethod,
  onDeliveryMethodChange,
  showOnlyAvailable,
  onShowOnlyAvailableChange,
  fastDelivery,
  onFastDeliveryChange,
  searchQuery,
  onSearchQueryChange
}) => {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-16 responsive-padding pt-4">
        <div className="flex items-center gap-1.5">
          <div className="flex flex-wrap gap-1.5">
            {categoryFilters.map((category) => (
              <FilterCell
                key={category.name}
                gameName={category.name}
                isSelected={selectedCategory === category.name}
                onClick={() => onCategoryToggle(category.name)}
              />
            ))}
          </div>
          <Select
            options={deliveryOptions}
            value={deliveryMethod}
            onChange={onDeliveryMethodChange}
            placeholder="Способ доставки"
            className="max-w-[180px]"
          />
        </div>
        
        <div className="ml-6">
          <button
            onClick={() => setIsSupportModalOpen(true)}
            className="px-4 py-2 bg-[#5C80FD] text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
          >
            Продать Blox Fruits
          </button>
        </div>
      </div>
    
      <div className="flex items-center justify-between gap-4 mb-6 px-16 responsive-padding mt-2">
        <div className="flex items-center gap-1">
          <Switcher
            label="Только продавцы онлайн"
            checked={showOnlyAvailable}
            onChange={onShowOnlyAvailableChange}
          />
          <Switcher
            label="Моментальная доставка"
            checked={fastDelivery}
            onChange={onFastDeliveryChange}
            icon={
              <svg className="w-4 h-4" fill="#4E75FF" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            }
          />
          <SearchInput
            value={searchQuery}
            onChange={onSearchQueryChange}
            placeholder="Поиск по описанию лота..."
            className="w-full"
          />
        </div>
      </div>

  
      <SupportModal 
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />
    </>
  );
};

export default FiltersSection; 