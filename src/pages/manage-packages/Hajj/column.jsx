import { alt_img } from "@/assets/images";
import { FaRegEye, MdDelete, FaEdit, MdPermMedia } from "@/assets/icons";
import { Link } from "react-router-dom";
import { BASE_URL, FOLDER_NAME } from "@/lib/constants/options";

export const columns = (onDelete, onMediaAdd) => [
  {
    name: "Image",
    selector: ({ heading = "", thumbnail = "" }) => (
      <img
        src={`${BASE_URL}/${FOLDER_NAME}/${thumbnail}` || alt_img}
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
    name: "Hotel Rating",
    selector: ({ hotels_rating = "" }) => (
      <div className="rounded-full bg-primary px-3 py-1 mx-3 text-sm font-medium text-white">
        {hotels_rating === "2_star" && "Economy"}
        {hotels_rating === "3_star" && "3 Star"}
        {hotels_rating === "4_star" && "4 Star"}
        {hotels_rating === "5_star" && "5 Star"}
      </div>
    ),
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
        <Link to={`/packages/hajj/view/${_id}`}>
          <FaRegEye className="text-blue-400 hover:text-blue-600" />
        </Link>
        <button onClick={() => onDelete(_id)}>
          <MdDelete className="text-red-400 hover:text-red-600" />
        </button>
        <Link to={`/packages/hajj/update/${_id}`}>
          <FaEdit className="text-gray-800 hover:text-black" />
        </Link>
        <button
          onClick={() => onMediaAdd(_id)}
          className="text-violet-500 hover:to-violet-300"
        >
          <MdPermMedia />
        </button>
      </div>
    ),
  },
];
