import { MdDelete, FaEdit } from "@/assets/icons";
import { Link } from "react-router-dom";

export const column = (onDelete) => [
  {
    name: "Title",
    selector: ({ title = "" }) => title,
    sortable: true,
  },

  {
    name: "Slug",
    selector: ({ slug = "" }) => slug,
    sortable: true,
  },

  {
    width: "350px",
    name: "Content",
    selector: ({ content = "" }) => content,
    sortable: true,
  },

  {
    name: "Actions",
    cell: ({ _id }) => (
      <div className="flex gap-2">
        <button onClick={() => onDelete(_id)}>
          <MdDelete className="text-red-400 hover:text-red-600" />
        </button>
        <Link to={`/additional-pages/update/${_id}`}>
          <FaEdit className="text-gray-800 hover:text-black" />
        </Link>
      </div>
    ),
  },
];
