import { FaRegEye, FaEdit } from "@/assets/icons";
import { Link } from "react-router-dom";

export const columns = () => [
  {
    name: "Full Name",
    selector: ({ full_name = "" }) => full_name,
    sortable: true,
  },
  {
    name: "Email Address",
    selector: ({ email = "" }) => email,
    sortable: true,
  },
  {
    name: "Contact Number",
    selector: ({ contact_no = "" }) => contact_no,
    sortable: true,
  },
  {
    name: "Hotel",
    selector: ({ hotel_category = "" }) => hotel_category,
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
      </div>
    ),
  },
];
