import React from 'react';
import Image from 'next/image';
import { SellerCardProps } from '@/types';

const SellerCard: React.FC<SellerCardProps> = ({ seller }) => {
  const getRatingStyle = (rating: number) => {
    if (rating === 5.0) {
      return {
        backgroundColor: 'rgba(29, 180, 98, 0.08)',
        textColor: '#1DB462',
        starColor: '#1DB462'
      };
    } else if (rating < 3.0) {
      return {
        backgroundColor: 'rgba(255, 92, 92, 0.08)',
        textColor: '#FF5C5C',
        starColor: '#FF5C5C'
      };
    } else if (rating >= 4.0 && rating < 5.0) {
      return {
        backgroundColor: 'rgba(255, 229, 0, 0.08)',
        textColor: '#FFE500',
        starColor: '#FFE500'
      };
    } else if (rating >= 3.0 && rating < 4.0) {
      return {
        backgroundColor: 'rgba(255, 142, 38, 0.08)',
        textColor: '#FF8E26',
        starColor: '#FF8E26'
      };
    }
    
    return {
      backgroundColor: 'rgba(255, 229, 0, 0.08)',
      textColor: '#FFE500',
      starColor: '#FFE500'
    };
  };

  const ratingStyle = getRatingStyle(seller.rating);

  return (
    <div className="flex items-start space-x-2">
      <div className="relative">
        <Image 
          src={seller.avatar} 
          alt={seller.nickname}
          width={32}
          height={32}
          className="rounded-full object-cover mt-0"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://ui-avatars.com/api/?name=${seller.nickname}&background=6366f1&color=fff&size=32`;
          }}
        />
       
        <div 
          className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${
            seller.isOnline ? 'bg-green-500' : 'bg-gray-400'
          }`}
        />
      </div>
      
      <div className="flex flex-col min-w-0">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-sm text-[#6E7076] truncate">
            {seller.nickname}
          </span>
          <div 
            className="flex items-center space-x-1 px-2 py-1 rounded-full"
            style={{ backgroundColor: ratingStyle.backgroundColor }}
          >
            <svg 
              className="w-3 h-3 fill-current" 
              viewBox="0 0 20 20"
              style={{ color: ratingStyle.starColor }}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span 
              className="text-xs font-medium"
              style={{ color: ratingStyle.textColor }}
            >
              {seller.rating.toFixed(1)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-xs text-[#36394A] dark:text-[var(--text-secondary)]">
          <span style={{ textWrap: 'nowrap' }}>На сайте: {seller.timeOnSite}</span>
          <span style={{ textWrap: 'nowrap' }}>{seller.reviewsCount} отзывов</span>
        </div>
      </div>
    </div>
  );
};

export default SellerCard; 