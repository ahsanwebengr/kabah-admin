import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/layout/DefaultLayout";
import { useNavigate } from "react-router-dom";
import { Table } from "@/common";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePackage, getPackages } from "@/store/features/packages/service";
import { PackagesData, PackagesLoading } from "@/store/selector";
import { setCurrentPage, setPerPage } from "@/store/features/pagination/slice";
import { columns } from "./column";
import { UMRAH_PARAM } from "@/lib/constants/options";

const Umrah = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { plans = [], total = 0 } = useSelector(PackagesData) || {};
  const isLoading = useSelector(PackagesLoading);
  const { currentPage = 1, perPage = 12 } = useSelector(
    (state) => state.pagination,
  );

  useEffect(() => {
    dispatch(
      getPackages({ page: currentPage, limit: perPage, category: UMRAH_PARAM }),
    );
  }, [dispatch, currentPage, perPage]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handlePerRowsChange = (newPerPage) => {
    dispatch(setPerPage(newPerPage));
  };

  const handleDelete = async (id) => {
    await dispatch(deletePackage(id)).unwrap();
    await dispatch(getPackages({ page: currentPage, limit: perPage }));
  };

  return (
    <DefaultLayout>
      <Breadcrumb />
      <div className="mb-2 text-end md:mb-4">
        <Button onClick={() => navigate("/packages/umrah/create")}>
          Add New
        </Button>
      </div>
      <div className="rounded-lg border bg-white px-5 pb-2.5 pt-6 shadow-lg sm:px-7 xl:pb-1">
        <Table
          columns={columns(handleDelete)}
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
