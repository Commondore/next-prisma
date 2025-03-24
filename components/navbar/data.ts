export interface NavbarItem {
  label: string;
  href: string;
}

export const navbarItems: NavbarItem[] = [
  { label: "Категории", href: "/categories" },
  { label: "Новости", href: "/news" },
];
