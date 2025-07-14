import React from 'react';
import Typography from '@/components/ui/Typography';
import FilterCell from '@/components/ui/FilterCell';
import Image from 'next/image';

interface HeroSectionProps {
  gameFilters: Array<{ name: string; count: number }>;
  selectedGames: string[];
  onGameToggle: (gameName: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  gameFilters,
  selectedGames,
  onGameToggle
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="px-16 py-6 flex-1 responsive-hero-text">
          <Typography variant="heading" className="text-title mb-1">
            Робуксы Roblox
          </Typography>
          <Typography variant="paragraph" className="text-body mb-6">
            Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую вы сейчас смотрите. Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую вы сейчас смотрите. 
          </Typography>

          <div>
            <div className="flex flex-wrap gap-2">
              {gameFilters.map((game) => (
                <FilterCell
                  key={game.name}
                  gameName={game.name}
                  offersCount={game.count}
                  href="#"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/hero_pic.png"
            alt="Description"
            width={475}
            height={555}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 