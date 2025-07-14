export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface HeaderProps {
  className?: string;
  toggleDarkMode?: () => void;
  isDark?: boolean;
}

export interface FooterProps {
  className?: string;
}

// New components for gaming marketplace
export interface TypographyProps {
  variant: 'heading' | 'paragraph';
  children: React.ReactNode;
  className?: string;
}

export interface FilterCellProps {
  gameName: string;
  offersCount?: number;
  onClick?: () => void;
  isActive?: boolean;
  isSelected?: boolean;
  href?: string;
}

export interface SwitcherProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface SelectProps {
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export interface Seller {
  id: string;
  avatar: string;
  nickname: string;
  rating: number;
  timeOnSite: string;
  reviewsCount: number;
  isOnline: boolean;
}

export interface OfferData {
  id: string;
  description: string;
  seller: Seller;
  availability: number;
  price: number;
  deliveryMethod: 'instant' | 'manual' | 'automated';
}

export interface TableProps {
  data: OfferData[];
  onLoadMore: () => void;
  hasMore: boolean;
  loading?: boolean;
  onSort: (field: 'availability' | 'price', direction: 'asc' | 'desc') => void;
  sortField?: 'availability' | 'price';
  sortDirection?: 'asc' | 'desc';
}

export interface SellerCardProps {
  seller: Seller;
} 