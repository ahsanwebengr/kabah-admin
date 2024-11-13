import { Table } from "@/common";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/layout/DefaultLayout";
import { useNavigate } from "react-router-dom";
import { column } from "./column";
import DeleteModal from "@/components/Modals/DeleteModal";
import { useEffect, useState } from "react";
import { setCurrentPage, setPerPage } from "@/store/features/pagination/slice";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReview,
  getAllTestimonials,
} from "@/store/features/reviews/service";
import { TestimonialData } from "@/store/selector";

const Testimonials = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const { data: { data: { testimonials = [] } = {} } = {}, isLoading = "" } =
    useSelector(TestimonialData) || {};

  const { currentPage = 1, perPage = 12 } = useSelector(
    (state) => state.pagination,
  );

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handlePerRowsChange = (newPerPage) => {
    dispatch(setPerPage(newPerPage));
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setIsOpen(true);
  };

  const confirmDelete = async () => {
    await dispatch(deleteReview(deleteId));
    await dispatch(getAllTestimonials({ page: currentPage, limit: perPage }));
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(getAllTestimonials({ page: currentPage, limit: perPage }));
  }, [dispatch, currentPage, perPage]);

  return (
    <DefaultLayout>
      <Breadcrumb />
      <div className="mb-2 text-end md:mb-4">
        <Button onClick={() => navigate("/testimonials/create")}>
          Add New
        </Button>
      </div>
      <div className="rounded-lg border bg-white px-5 pb-2.5 pt-6 shadow-lg sm:px-7 xl:pb-1">
        <Table
          columns={column(handleDelete)}
          data={testimonials}
          paginationTotalRows={0}
          paginationPerPage={perPage}
          isPendding={isLoading}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
        />
      </div>
      <DeleteModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={confirmDelete}
      />
    </DefaultLayout>
  );
};

export default Testimonials;
