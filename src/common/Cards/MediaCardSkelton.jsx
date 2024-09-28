import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const MediaCardSkeleton = () => {
  return (
    <Card className="animate-pulse hover:border hover:border-primary">
      <CardHeader>
        {/* Skeleton for image */}
        <div className="h-60 w-full rounded-md bg-gray-200"></div>
      </CardHeader>
      <CardContent>
        {/* Skeleton for heading */}
        <div className="mb-2 h-4 w-3/4 rounded-md bg-gray-200"></div>
        <div className="h-4 w-1/2 rounded-md bg-gray-200"></div>
      </CardContent>
      <CardFooter>
        {/* Skeleton for category */}
        <div className="h-8 w-24 rounded-full bg-gray-200"></div>
      </CardFooter>
    </Card>
  );
};

export default MediaCardSkeleton;
