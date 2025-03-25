import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Создаем тестового пользователя
  const defaultUser = await prisma.user.create({
    data: {
      name: "Test User",
      email: "test@example.com",
      password: await hash("password123", 12),
    },
  });

  // Создаем категории
  const cafe = await prisma.category.create({
    data: {
      title: "Кафе",
      description: "Уютные кафе для отдыха и общения",
      image: "/categories/cafe.jpg",
      slug: "cafe",
    },
  });

  const restaurant = await prisma.category.create({
    data: {
      title: "Ресторан",
      description: "Рестораны высокой кухни",
      image: "/categories/restaurant.jpg",
      slug: "restaurant",
    },
  });

  const sushi = await prisma.category.create({
    data: {
      title: "Суши-бар",
      description: "Японская кухня и суши",
      image: "/categories/sushi.jpg",
      slug: "sushi",
    },
  });

  // Создаем рестораны
  await prisma.restaurant.create({
    data: {
      title: "Сладкий рай",
      description:
        "Уютное кафе с домашней выпечкой и десертами. Мы предлагаем широкий выбор тортов, пирожных и других сладостей, приготовленных по традиционным рецептам.",
      image: "/restaurants/sweet-paradise.jpg",
      price: 1500,
      slug: "sweet-paradise",
      categoryId: cafe.id,
      userId: defaultUser.id,
    },
  });

  await prisma.restaurant.create({
    data: {
      title: "Итальянский дворик",
      description:
        "Аутентичная итальянская кухня в уютной атмосфере. Паста, пицца и другие блюда готовятся из свежайших ингредиентов по классическим рецептам.",
      image: "/restaurants/italian-courtyard.jpg",
      price: 2500,
      slug: "italian-courtyard",
      categoryId: restaurant.id,
      userId: defaultUser.id,
    },
  });

  await prisma.restaurant.create({
    data: {
      title: "Суши-бар Сакура",
      description:
        "Современный суши-бар с широким выбором роллов, суши и других блюд японской кухни. Свежие ингредиенты и профессиональные повара.",
      image: "/restaurants/sakura-sushi.webp",
      price: 2000,
      slug: "sakura-sushi",
      categoryId: sushi.id,
      userId: defaultUser.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
