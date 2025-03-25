import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const RestaurantCardSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-56 w-full -mt-6">
        <Skeleton className="h-full w-full" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-5 w-16" />
        </div>
        <CardDescription className="flex items-center gap-1">
          <Skeleton className="h-4 w-24" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-12 w-full" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
};
