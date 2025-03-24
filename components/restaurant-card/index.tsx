import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Restaurant } from "@/interfaces/restaurant";

export const RestaurantCard = ({
  title,
  description,
  image,
  price,
  category,
  href,
}: Restaurant) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-56 w-full -mt-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="secondary">{category}</Badge>
        </div>
        <CardDescription className="flex items-center gap-1">
          Средний чек: <span className="font-bold">{price.toLocaleString("ru-RU")} </span>
          <span className="text-lg">⃀</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={href}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
