export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
}
