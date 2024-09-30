import { alt_img } from "@/assets/images";
import { FaRegEye, MdDelete, FaEdit, MdPermMedia } from "@/assets/icons";
import { Link } from "react-router-dom";
import { BASE_URL } from "@/lib/constants/options";

export const columns = (onDelete, onMediaAdd) => [
  {
    name: "Image",
    selector: ({ heading = "", thumbnail = "" }) => (
      <img
        src={`${BASE_URL}/thumbnails/${thumbnail}` || alt_img}
        onError={(e) => (e.target.src = alt_img)}
        alt={heading}
        className="size-16 rounded-md border p-2"
      />
    ),
  },
  {
    name: "Title",
    selector: ({ heading = "" }) => heading,
    sortable: true,
  },
  {
    name: "Price",
    selector: ({ price = 0 }) => `$ ${price}`,
    sortable: true,
  },
  {
    name: "Rating",
    selector: ({ hotels_rating = "" }) => `${hotels_rating.replace("_", " ")}`,
    sortable: true,
  },
  {
    name: "Duration",
    selector: ({ duration = 0 }) =>
      `${duration} ${duration > 1 ? "Days" : "Day"}`,
    sortable: true,
  },
  {
    name: "Actions",
    cell: ({ _id }) => (
      <div className="flex gap-2">
        <Link to={`/packages/umrah/view/${_id}`}>
          <FaRegEye className="text-blue-400 hover:text-blue-600" />
        </Link>
        <button onClick={() => onDelete(_id)}>
          <MdDelete className="text-red-400 hover:text-red-600" />
        </button>
        <Link to={`/packages/umrah/update/${_id}`}>
          <FaEdit className="text-gray-800 hover:text-black" />
        </Link>
        <button
          onClick={() => onMediaAdd(_id)}
          className="text-violet-500 hover:to-violet-600"
        >
          <MdPermMedia />
        </button>
      </div>
    ),
  },
];
