import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/layout/DefaultLayout";
import { MdDelete, FaEdit, FaRegEye } from "@/assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "@/common";

const Umrah = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Umrah Package 1",
      price: "$1000",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      title: "Umrah Package 2",
      price: "$1500",
    },
  ];

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <img
          src={row.image}
          alt={row.title}
          width={80}
          className="rounded-md p-1"
        />
      ),
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Actions",
      cell: ({ id }) => (
        <div className="flex gap-2">
          <Link to={`/packages/umrah/view/${id}`}>
            <FaRegEye className="text-blue-400 hover:text-blue-600" />
          </Link>
          <button>
            <MdDelete className="text-red-400 hover:text-red-600" />
          </button>
          <Link to={`/packages/umrah/update/${id}`}>
            <FaEdit className="text-gray-800 hover:text-black" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <DefaultLayout>
      <Breadcrumb />
      <div className="mb-2 text-end md:mb-4">
        <Button onClick={() => navigate("/packages/umrah/create")}>
          Add New
        </Button>
      </div>

      <div className="sm:px-7.5 rounded-lg border bg-white px-5 pb-2.5 pt-6 shadow-lg xl:pb-1">
        <Table columns={columns} data={data} />
      </div>
    </DefaultLayout>
  );
};

export default Umrah;
