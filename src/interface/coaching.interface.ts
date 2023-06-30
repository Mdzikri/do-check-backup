export interface ICoaching {
  id: number;
  icon: string;
  name: string;
  isPopular: boolean;
  price?: number | null;
  denomination?: string | null;
  description: string;
}
