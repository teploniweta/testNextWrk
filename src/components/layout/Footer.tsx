import React from 'react';
import { FooterProps } from '@/types';
import Image from 'next/image';

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-white text-[#36394A]  ${className}`}>
      <div className="max-w-[1128px] mx-auto py-12 px-10 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
         
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="STARVELL"
                  width={118}
                  height={24}
                  className="rounded-lg"
                />
              </div>
            </div>
            <p className="text-[#36394A] dark:text-[var(--text-secondary)] text-sm mb-4">
              © 2024 STARVELL, лучший маркетплейс цифровых товаров и услуг
            </p>
            <p className="text-[#36394A] dark:text-[var(--text-secondary)] text-xs">
              Дизайн сделан в 0xHearts.com
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#36394A] dark:text-[var(--text-muted)]">Поддержка</h3>
            <ul className="text-[#36394A] dark:text-[var(--text-secondary)] space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Написать в поддержку</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Пользовательское соглашение</a></li>
            </ul>
          </div>
          <div className="md:col-span-2 flex flex-col items-center md:items-end">
            <div className="flex space-x-4 justify-center md:justify-end">
              <a href="#" className="w-10 h-10  rounded-lg flex items-center justify-center transition-colors">
                <Image
                  src="/images/logo_tg.png"
                  alt="Telegram"
                  width={44}
                  height={44}
                />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <Image
                  src="/images/logo_ds.png"
                  alt="Discord"
                  width={44}
                  height={44}
                />
              </a>
              <a href="#" className="w-10 h-10  rounded-lg flex items-center justify-center transition-colors">
                <Image
                  src="/images/logo_vk.png"
                  alt="VK"
                  width={44}
                  height={44}
                />
              </a>
              <a href="#" className="w-10 h-10  rounded-lg flex items-center justify-center transition-colors">
                <Image
                  src="/images/logo_yt.png"
                  alt="YouTube"
                  width={44}
                  height={44}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 