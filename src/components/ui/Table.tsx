import React from 'react';
import Image from 'next/image';
import { TableProps } from '@/types';
import SellerCard from './SellerCard';
import Button from './Button';

const Table: React.FC<TableProps> = ({ 
  data, 
  onLoadMore, 
  hasMore, 
  loading = false,
  onSort,
  sortField,
  sortDirection
}) => {
  const handleSort = (field: 'availability' | 'price') => {
    const newDirection = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
    onSort(field, newDirection);
  };
  
  const SortIcon = ({ field }: { field: 'availability' | 'price' }) => {
    const isActive = sortField === field;
    const isAsc = sortDirection === 'asc';
    const isDesc = sortDirection === 'desc';
  
    return (
      <div className="flex flex-col ml-1">
        <Image
          src="/images/sort_arrow_top.svg"
          alt="Sort Ascending"
          width={8}
          height={4}
          className={`${isActive && isAsc ? 'filter-blue' : ''}`}
        />
        <Image
          src="/images/sort_arrow_bottom.svg"
          alt="Sort Descending"
          width={8}
          height={4}
          className={`mt-1 ${isActive && isDesc ? 'filter-blue' : ''}`}
        />
      </div>
    );
  };
  
  return (
    <div className="bg-white dark:bg-[var(--white)] shadow-sm rounded-lg overflow-hidden px-16 responsive-padding">
      <table className="w-full table-fixed">
        <thead className="bg-white dark:bg-[var(--white)]">
          <tr>
            <th className="pr-2 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-1/2">
              Описание
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-400  uppercase tracking-wider w-1/4">
              Продавец
            </th>
            <th 
              className="px-2 py-2 text-right text-xs font-medium text-gray-400  uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-[var(--item-border-color)] select-none w-[15%]"
              onClick={() => handleSort('availability')}
            >
              <div className="flex items-center justify-end">
                Наличие
                <SortIcon field="availability" />
              </div>
            </th>
            <th 
              className="pl-2 py-2 text-right text-xs font-medium text-gray-400  uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-[var(--item-border-color)] select-none w-[15%]"
              onClick={() => handleSort('price')}
            >
              <div className="flex items-center justify-end">
                Цена
                <SortIcon field="price" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr><td colSpan={4} className="h-0"></td></tr>
          {data.map((offer) => (
            <tr 
              key={offer.id} 
              className="group hover:bg-gray-50 transition-all duration-300 ease-in-out border-b border-[#E8EBF0] last:border-b-0"
            >
              <td className="pr-2 py-2 w-1/2 group-hover:rounded-l-md">
                <div className="text-sm break-words pl-[3px] text-title">
                  {offer.description}
                </div>
              </td>
              <td className="px-2 py-2 w-1/4">
                <SellerCard seller={offer.seller} />
              </td>
              <td className="px-2 py-2 w-[15%] text-right">
                <div className="text-sm whitespace-nowrap text-title">
                  {offer.availability === Infinity ? '∞' : offer.availability}
                </div>
              </td>
              <td className="pl-2 py-2 w-[15%] group-hover:rounded-r-md">
                <div className="text-sm font-semibold text-right pr-[3px] text-title">
                  {offer.price.toLocaleString('ru-RU')} ₽
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="py-4">
        <button 
          onClick={onLoadMore}
          disabled={loading}
          className="w-full py-3 px-4 text-sm font-medium text-[#36394A] dark:text-[var(--text-secondary)] bg-white dark:bg-[var(--white)] border border-[#C1C7D0] dark:border-[var(--item-border-color)] rounded-md hover:bg-gray-50 dark:hover:bg-[var(--item-border-color)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Загрузка...' : hasMore ? 'Показать больше предложений' : 'Показать меньше предложений'}
        </button>
      </div>
      
      {data.length === 0 && (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400 dark:text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-[#36394A] dark:text-[var(--text-muted)]">Нет предложений</h3>
          <p className="mt-1 text-sm text-[#36394A] dark:text-[var(--text-secondary)]">Попробуйте изменить фильтры поиска.</p>
        </div>
      )}
    </div>
  );
};

export default Table; 