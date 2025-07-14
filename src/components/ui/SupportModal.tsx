import React, { useState } from 'react';
import Select from './Select';
import Button from './Button';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const reasonOptions = [
    { value: '', label: 'Выберите причину жалобы' },
    { value: 'fraud', label: 'Мошенничество' },
    { value: 'inappropriate', label: 'Неуместное поведение' },
    { value: 'spam', label: 'Спам' },
    { value: 'technical', label: 'Техническая проблема' },
    { value: 'other', label: 'Другое' }
  ];

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative">
          <div 
            className="bg-white dark:bg-[var(--white)] rounded-lg shadow-xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#36394A] dark:text-[var(--text-muted)]">
                Жалоба на 0xHearts.com
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-[var(--text-secondary)] mb-2">
                  Причина жалобы
                </label>
                <Select
                  options={reasonOptions}
                  value={reason}
                  onChange={setReason}
                  placeholder="Выберите причину жалобы"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-[var(--text-secondary)] mb-2">
                  Опишите проблему
                </label>
                <textarea
                  value={description}
                  onChange={(e) => {
                    if (e.target.value.length <= 200) {
                      setDescription(e.target.value);
                    }
                  }}
                  placeholder="Введите ваш текст"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md resize-none h-[100px] bg-white dark:bg-[var(--white)] text-[#36394A] dark:text-[var(--text-muted)] placeholder-gray-500 dark:placeholder-gray-400"
                />
                <div className="text-right text-sm text-gray-500 dark:text-[var(--text-secondary)] mt-1">
                  {description.length}/200
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-[var(--text-secondary)] mb-2">
                  Доказательства
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-[var(--item-border-color)] rounded-lg p-6 text-center hover:border-gray-400 dark:hover:border-gray-500 transition-colors bg-white dark:bg-[var(--white)]">
                  <input
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <svg className="w-8 h-8 text-gray-400 dark:text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-[var(--text-secondary)]">
                        {file ? file.name : 'Выберите файл или перетащите его сюда'}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-[var(--text-secondary)] mt-1">
                        JPEG или PNG до 5 МБ
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={onClose}
                  variant="outline"
                  size="medium"
                  className="flex-1 whitespace-nowrap"
                >
                  Мне нужна поддержка
                </Button>
                <Button
                  onClick={onClose}
                  variant="primary"
                  size="medium"
                  className="flex-1 whitespace-nowrap"
                >
                  Пожаловаться
                </Button>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-0 right-[-64px] w-12 h-12 bg-white dark:bg-[var(--white)] rounded-lg shadow-lg flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors border border-gray-200 dark:border-[var(--item-border-color)]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportModal; 