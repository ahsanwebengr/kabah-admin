import { alt_img } from "@/assets/images";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BASE_URL } from "@/lib/constants/options";

const MediaCard = ({ media }) => {
  const { thumbnail = "", heading = "", category = "" } = media || {};
  return (
    <Card className="hover:border hover:border-primary">
      <CardHeader>
        <img
          src={`${BASE_URL}/thumbnails/${thumbnail}` || alt_img}
          onError={(e) => (e.target.src = alt_img)}
          className="h-60 w-full"
          alt={heading}
        />
      </CardHeader>
      <CardContent>
        <h5 className="text-sm font-semibold md:text-lg">{heading}</h5>
      </CardContent>
      <CardFooter>
        <span className="rounded-full bg-primary px-5 py-1 font-semibold text-white">
          {category}
        </span>
      </CardFooter>
    </Card>
  );
};

export default MediaCard;
