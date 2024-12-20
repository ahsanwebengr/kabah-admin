import { MdDelete, FaEdit } from "@/assets/icons";
import { Link } from "react-router-dom";

export const columns = (onDelete) => [
  {
    width: "200px",
    name: "Airline",
    selector: ({ airline = "" }) => airline,
    sortable: true,
  },

  {
    width: "200px",
    name: "From",
    selector: ({ from = "" }) => <div className="capitalize">{from}</div>,
    sortable: true,
  },

  {
    width: "200px",
    name: "To",
    selector: ({ to = "" }) => <div className="capitalize">{to}</div>,
    sortable: true,
  },
  {
    width: "200px",
    name: "Price",
    selector: ({ price = "" }) => <span>£ {price}</span>,
    sortable: true,
  },
  {
    width: "200px",
    name: "Flight No.",
    selector: ({ flightsNumber = "" }) => flightsNumber,
    sortable: true,
  },

  {
    name: "Actions",
    cell: ({ _id }) => (
      <div className="flex gap-2">
        <button onClick={() => onDelete(_id)}>
          <MdDelete className="text-red-400 hover:text-red-600" />
        </button>
        <Link to={`/flights/update/${_id}`}>
          <FaEdit className="text-gray-800 hover:text-black" />
        </Link>
      </div>
    ),
  },
];
