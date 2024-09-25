import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/layout/DefaultLayout";
import { MdDelete, FaEdit, FaRegEye } from "@/assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "@/common";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPackages } from "@/store/features/packages/service";
import { PackagesData, PackagesLoading } from "@/store/selector";
import { setCurrentPage, setPerPage } from "@/store/features/pagination/slice";
import { alt_img } from "@/assets/images";

const Umrah = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { plans = [], total = 0 } = useSelector(PackagesData) || {};
  const isLoading = useSelector(PackagesLoading);

  const { currentPage = 1, perPage = 12 } = useSelector(
    (state) => state.pagination,
  );

  useEffect(() => {
    dispatch(getPackages({ page: currentPage, limit: perPage }));
  }, [dispatch, currentPage, perPage]);

  const columns = [
    {
      name: "Image",
      selector: ({ heading = "", thumbnail = "" }) => (
        <img
          src={thumbnail || alt_img}
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
      selector: ({ hotels_rating = "" }) =>
        `${hotels_rating.replace("_", " ")}`,
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
          <button>
            <MdDelete className="text-red-400 hover:text-red-600" />
          </button>
          <Link to={`/packages/umrah/update/${_id}`}>
            <FaEdit className="text-gray-800 hover:text-black" />
          </Link>
        </div>
      ),
    },
  ];

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handlePerRowsChange = (newPerPage) => {
    dispatch(setPerPage(newPerPage));
  };

  return (
    <DefaultLayout>
      <Breadcrumb />

      <div className="mb-2 text-end md:mb-4">
        <Button onClick={() => navigate("/packages/umrah/create")}>
          Add New
        </Button>
      </div>

      <div className="sm:px-7.5 rounded-lg border bg-white px-5 pb-2.5 pt-6 shadow-lg xl:pb-1">
        <Table
          columns={columns}
          data={plans}
          paginationTotalRows={total}
          paginationPerPage={perPage}
          isPendding={isLoading}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
        />
      </div>
    </DefaultLayout>
  );
};

export default Umrah;
