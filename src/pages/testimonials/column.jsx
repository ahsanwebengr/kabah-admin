import { MdDelete, FaEdit } from "@/assets/icons";
import { alt_img } from "@/assets/images";
import { BASE_URL } from "@/lib/constants/options";
import { Link } from "react-router-dom";

export const column = (onDelete) => [
  {
    name: "image",
    selector: ({ title = "", image = "" }) => (
      <img
        src={`${BASE_URL}/testimonials/${image}` || alt_img}
        onError={(e) => (e.target.src = alt_img)}
        alt={title}
        className="size-16 rounded-md border p-2"
      />
    ),
    sortable: true,
  },
  {
    name: "Name",
    selector: ({ name = "" }) => name,
    sortable: true,
  },
  {
    name: "Review",
    selector: ({ review = "" }) => <div className="capitalize">{review}</div>,
    sortable: true,
  },
  {
    name: "Platform",
    selector: ({ platform = "" }) => <span>{platform}</span>,
    sortable: true,
  },
  {
    name: "Rating",
    selector: ({ rating = "" }) => rating,
    sortable: true,
  },

  {
    name: "Actions",
    cell: ({ _id }) => (
      <div className="flex gap-2">
        <button onClick={() => onDelete(_id)}>
          <MdDelete className="text-red-400 hover:text-red-600" />
        </button>
        <Link to={`/testimonials/update/${_id}`}>
          <FaEdit className="text-gray-800 hover:text-black" />
        </Link>
      </div>
    ),
  },
];
