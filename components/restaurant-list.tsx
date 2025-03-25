import { RestaurantCard } from "@/components/restaurant-card";
import { RestaurantCardProps } from "@/interfaces/restaurant";
import prisma from "@/lib/prisma";

export async function RestaurantList() {
  const restaurants = await prisma.restaurant.findMany({
    include: {
      category: true,
    },
  });

  const restaurantCards: RestaurantCardProps[] = restaurants.map((restaurant) => ({
    title: restaurant.title,
    description: restaurant.description,
    image: restaurant.image,
    price: restaurant.price,
    category: restaurant.category.title,
    href: `/restaurants/${restaurant.slug}`,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurantCards.map((restaurant) => (
        <RestaurantCard key={restaurant.href} {...restaurant} />
      ))}
    </div>
  );
}
