export interface IActiveNavbar {
  id: number;
  title: string;
  href: string;
  isActive: boolean;
}

export type ActiveNavbarKeys = keyof IActiveNavbar;

export type INavbarHandler<T> = (key: T, other: number | string) => void;
