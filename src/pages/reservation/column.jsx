import { FaEdit, FaRegEye, MdDelete } from "@/assets/icons";
import { Link } from "react-router-dom";

export const columns = (handleDelete) => [
  {
    width: "200px",
    name: "Full Name",
    selector: ({ full_name = "" }) => full_name,
    sortable: true,
  },
  {
    width: "250px",
    name: "Email",
    selector: ({ email = "" }) => email,
    sortable: true,
  },
  {
    width: "200px",
    name: "Contact No.",
    selector: ({ contact_no = "" }) => contact_no,
    sortable: true,
  },
  {
    width: "200px",
    name: "Package",
    selector: ({ plan_id: { category = "" } = {} }) => (
      <div className="mx-1 rounded-full bg-green-50 px-4 py-2 capitalize text-green-500">
        {category}
      </div>
    ),
    sortable: true,
  },
  {
    width: "200px",
    name: "Status",
    selector: ({ status = "" }) => (
      <div
        className={`mx-1 rounded-full border border-current px-4 py-2 capitalize ${status === "complete" ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}
      >
        {status}
      </div>
    ),
    sortable: true,
  },
  {
    width: "200px",
    name: "Package Name",
    selector: ({ plan_id: { heading = "" } = {} }) => heading,
    sortable: true,
  },
  {
    name: "Actions",
    cell: ({ _id }) => (
      <div className="flex gap-2">
        <Link to={`/reservation/view/${_id}`}>
          <FaRegEye className="text-blue-400 hover:text-blue-600" />
        </Link>
        <Link to={`/reservation/update/${_id}`}>
          <FaEdit className="text-gray-800 hover:text-black" />
        </Link>
        <button onClick={() => handleDelete(_id)}>
          <MdDelete className="text-red-500 hover:text-red-700" />
        </button>
      </div>
    ),
  },
];
