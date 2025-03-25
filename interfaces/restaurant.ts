export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Restaurant {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  slug: string;
  categoryId: string;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}

export interface RestaurantCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  href: string;
}
