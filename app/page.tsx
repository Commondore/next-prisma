import { RestaurantCard } from "@/components/restaurant-card";
import { Restaurant } from "@/interfaces/restaurant";

const restaurants: Restaurant[] = [
  {
    title: "Сладкий рай",
    description:
      "Уютное кафе с домашней выпечкой и десертами. Мы предлагаем широкий выбор тортов, пирожных и других сладостей, приготовленных по традиционным рецептам.",
    image: "/restaurants/sweet-paradise.jpg",
    price: 1500,
    category: "Кафе",
    href: "/restaurants/sweet-paradise",
  },
  {
    title: "Итальянский дворик",
    description:
      "Аутентичная итальянская кухня в уютной атмосфере. Паста, пицца и другие блюда готовятся из свежайших ингредиентов по классическим рецептам.",
    image: "/restaurants/italian-courtyard.jpg",
    price: 2500,
    category: "Ресторан",
    href: "/restaurants/italian-courtyard",
  },
  {
    title: "Суши-бар Сакура",
    description:
      "Современный суши-бар с широким выбором роллов, суши и других блюд японской кухни. Свежие ингредиенты и профессиональные повара.",
    image: "/restaurants/sakura-sushi.webp",
    price: 2000,
    category: "Суши-бар",
    href: "/restaurants/sakura-sushi",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Популярные рестораны</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.href} {...restaurant} />
        ))}
      </div>
    </div>
  );
}
