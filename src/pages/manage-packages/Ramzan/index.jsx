import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/layout/DefaultLayout";
import { useNavigate } from "react-router-dom";
import { Table } from "@/common";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePackage, getPackages } from "@/store/features/packages/service";
import { PackagesData, PackagesLoading } from "@/store/selector";
import { setCurrentPage, setPerPage } from "@/store/features/pagination/slice";
import { columns } from "./column";
import DeleteModal from "@/components/Modals/DeleteModal";
import AddMediaModal from "@/components/Modals/AddMediaModal";
import { updatePlanMedia } from "@/store/features/media/service";

const Ramzan = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

  const { plans = [], total = 0 } = useSelector(PackagesData) || {};
  const isLoading = useSelector(PackagesLoading);
  const { currentPage = 1, perPage = 12 } = useSelector(
    (state) => state.pagination,
  );

  useEffect(() => {
    dispatch(
      getPackages({ page: currentPage, limit: perPage, category: "ramzan" }),
    );
  }, [dispatch, currentPage, perPage]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handlePerRowsChange = (newPerPage) => {
    dispatch(setPerPage(newPerPage));
  };

  const confirmDelete = (id) => {
    setSelectedPackageId(id);
    setIsOpen(true);
  };

  const handleDelete = async () => {
    await dispatch(deletePackage(selectedPackageId)).unwrap();
    await dispatch(
      getPackages({ page: currentPage, limit: perPage, category: "ramzan" }),
    );
    setIsOpen(false);
  };

  const onMediaAdd = (id) => {
    setSelectedPackageId(id);
    setIsMediaModalOpen(true);
  };

  const handleSubmit = async (formData) => {
    try {
      await dispatch(
        updatePlanMedia({ id: selectedPackageId, data: formData }),
      );
      dispatch(
        getPackages({
          page: currentPage,
          limit: perPage,
          category: "ramzan",
        }),
      );
      setSelectedPackageId(null);
      setIsMediaModalOpen(false);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb />
      <div className="mb-2 text-end md:mb-4">
        <Button onClick={() => navigate("/packages/ramzan/create")}>
          Add New
        </Button>
      </div>
      <div className="rounded-lg border bg-white px-5 pb-2.5 pt-6 shadow-lg sm:px-7 xl:pb-1">
        <Table
          columns={columns(confirmDelete, onMediaAdd)}
          data={plans}
          paginationTotalRows={total}
          paginationPerPage={perPage}
          isPendding={isLoading}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
        />
      </div>

      <DeleteModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      />

      <AddMediaModal
        isOpen={isMediaModalOpen}
        setIsOpen={setIsMediaModalOpen}
        handleSubmit={handleSubmit}
      />
    </DefaultLayout>
  );
};

export default Ramzan;
