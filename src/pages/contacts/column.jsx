import { FaRegEye, FaEdit, MdDelete } from "@/assets/icons";
import { Link } from "react-router-dom";

export const columns = (onDelete) => [
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
    name: "Type",
    selector: ({ type = "" }) => <span className="capitalize">{type}</span>,

    sortable: true,
  },
  {
    name: "Status",
    selector: ({ status = "" }) => (
      <div
        className={`rounded-full px-4 py-1 text-sm font-medium ${status === "pending" && "bg-yellow-50 text-yellow-500"} ${status === "complete" && "bg-green-50 text-green-500"} `}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>
    ),
    sortable: true,
  },
  {
    name: "Actions",
    cell: ({ _id }) => (
      <div className="flex gap-2">
        <Link to={`/contacts/view/${_id}`}>
          <FaRegEye className="text-blue-400 hover:text-blue-600" />
        </Link>
        <Link to={`/contacts/update/${_id}`}>
          <FaEdit className="text-gray-800 hover:text-black" />
        </Link>
        <button onClick={() => onDelete(_id)}>
          <MdDelete className="text-red-500 hover:text-red-700" />
        </button>
      </div>
    ),
  },
];
