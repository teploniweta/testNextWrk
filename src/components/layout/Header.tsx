import React from 'react';
import { HeaderProps } from '@/types';
import Image from 'next/image';
import Dropdown from '../ui/Dropdown';

const Header: React.FC<HeaderProps> = ({ className = '', toggleDarkMode, isDark }) => {
  return (
    <header className={`bg-white dark:bg-[var(--white)] shadow-sm ${className}`}>
      <div className="max-w-[1128px] mx-auto px-16 py-2 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
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
          </div>
          

          <div className="flex-1 max-w-md mx-6 responsive-search-container">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск игр и приложений..."
                className="w-full px-3 py-1.5 bg-gray-50 dark:bg-[var(--background)] text-[#36394A] dark:text-[var(--text-muted)] placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-[var(--item-border-color)] rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm responsive-search-input"
              />
              <svg className="absolute right-3 top-2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        
          <div className="flex items-center space-x-4 responsive-nav-container">
            <nav className="hidden md:flex space-x-6 responsive-nav-spacing">
             
              <Dropdown
                trigger={
                  <div className="text-gray-600 hover:text-[#36394A] dark:hover:text-[var(--text-muted)] transition-colors duration-200 text-sm flex items-center responsive-nav-text">
                    Поддержка
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                }
              >
                <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-[var(--white)] border border-gray-200 dark:border-[var(--item-border-color)] rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-[var(--text-secondary)] hover:bg-gray-100 dark:hover:bg-[var(--item-border-color)]">
                      Правила
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-[var(--text-secondary)] hover:bg-gray-100 dark:hover:bg-[var(--item-border-color)]">
                      База знаний
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-[var(--text-secondary)] hover:bg-gray-100 dark:hover:bg-[var(--item-border-color)]">
                      Написать в поддержку
                    </a>
                  </div>
                </div>
              </Dropdown>
              
              <Dropdown
                trigger={
                  <div className="text-gray-600 hover:text-[#36394A] dark:hover:text-[var(--text-muted)] transition-colors duration-200 text-sm flex items-center responsive-nav-text">
                    Русский
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                }
              >
                <div className="absolute top-full left-0 mt-1 w-32 bg-white dark:bg-[var(--white)] border border-gray-200 dark:border-[var(--item-border-color)] rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-[var(--text-secondary)] hover:bg-gray-100 dark:hover:bg-[var(--item-border-color)]">
                      Русский
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-[var(--text-secondary)] hover:bg-gray-100 dark:hover:bg-[var(--item-border-color)]">
                      English
                    </a>
                  </div>
                </div>
              </Dropdown>
            </nav>
            <div className="flex items-center space-x-3 responsive-buttons-container">
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 text-gray-700 dark:text-[var(--text-secondary)] bg-gray-100 dark:bg-[var(--item-border-color)] hover:bg-gray-200 dark:hover:bg-[var(--background)] rounded-md transition-colors duration-200 text-xs responsive-button whitespace-nowrap">
                  Вход
                </button>
                <button className="px-3 py-1.5 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 text-xs responsive-button whitespace-nowrap">
                  Регистрация
                </button>
              </div>

              {toggleDarkMode && (
                <button
                  onClick={toggleDarkMode}
                  className="p-1.5 rounded-md bg-gray-100 dark:bg-[var(--item-border-color)] hover:bg-gray-200 dark:hover:bg-[var(--background)] transition-colors duration-200"
                >
                  {isDark ? (
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 