import { alt_img } from "@/assets/images";
import { FaRegEye, MdDelete, FaEdit } from "@/assets/icons";
import { Link } from "react-router-dom";
import { BASE_URL, BLOGS_FOLDER } from "@/lib/constants/options";

export const columns = (onDelete) => [
  {
    width: "150px",
    name: "Image",
    selector: ({ title = "", image = "" }) => (
      <img
        src={`${BASE_URL}/${BLOGS_FOLDER}/${image}` || alt_img}
        onError={(e) => (e.target.src = alt_img)}
        alt={title}
        className="size-16 rounded-md border p-2"
      />
    ),
  },
  {
    width: "250px",
    name: "Title",
    selector: ({ title = "" }) => title,
    sortable: true,
  },

  {
    width: "450px",
    name: "Description",
    selector: ({ description = "0" }) => description,
    sortable: true,
  },
  {
    name: "Actions",
    cell: ({ _id }) => (
      <div className="flex gap-2">
        <Link to={`/blogs/view/${_id}`}>
          <FaRegEye className="text-blue-400 hover:text-blue-600" />
        </Link>
        <button onClick={() => onDelete(_id)}>
          <MdDelete className="text-red-400 hover:text-red-600" />
        </button>
        <Link to={`/blogs/update/${_id}`}>
          <FaEdit className="text-gray-800 hover:text-black" />
        </Link>
      </div>
    ),
  },
];
