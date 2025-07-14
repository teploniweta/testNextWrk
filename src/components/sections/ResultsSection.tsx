import React from 'react';
import Typography from '@/components/ui/Typography';
import Select from '@/components/ui/Select';
import Table from '@/components/ui/Table';
import { OfferData } from '@/types';

interface ResultsSectionProps {
  sortedOffers: OfferData[];
  displayedOffers: OfferData[];
  sortOptions: Array<{ value: string; label: string }>;
  sortBy: string;
  onSortByChange: (value: string) => void;
  onLoadMore: () => void;
  hasMoreOffers: boolean;
  onSort: (field: 'availability' | 'price', direction: 'asc' | 'desc') => void;
  sortField?: 'availability' | 'price';
  sortDirection: 'asc' | 'desc';
  isTableTransitioning: boolean;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({
  sortedOffers,
  displayedOffers,
  sortOptions,
  sortBy,
  onSortByChange,
  onLoadMore,
  hasMoreOffers,
  onSort,
  sortField,
  sortDirection,
  isTableTransitioning
}) => {
  return (
    <>
      <div 
        className={`transition-all duration-300 ${isTableTransitioning ? 'opacity-50 transform' : 'opacity-100'}`}
      >
        <Table
          data={displayedOffers}
          onLoadMore={onLoadMore}
          hasMore={hasMoreOffers}
          loading={false}
          onSort={onSort}
          sortField={sortField}
          sortDirection={sortDirection}
        />
      </div>
    </>
  );
};

export default ResultsSection; 