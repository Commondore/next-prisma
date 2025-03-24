export interface NavbarItem {
  label: string;
  href: string;
}

export const navbarItems: NavbarItem[] = [
  { label: "Новости", href: "/news" },
  { label: "Категории", href: "/categories" },
];
