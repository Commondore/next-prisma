import { RestaurantCardSkeleton } from "@/components/restaurant-card/skeleton";
import { RestaurantList } from "@/components/restaurant-list";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Популярные рестораны</h1>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <RestaurantCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <RestaurantList />
      </Suspense>
    </div>
  );
}
