import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import DefaultLayout from "@/layout/DefaultLayout";
import { deleteBlog, getBlogs } from "@/store/features/blogs/service";
import { BlogLoading, BlogsData } from "@/store/selector";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { columns } from "./column";
import { Table } from "@/common";
import { setCurrentPage, setPerPage } from "@/store/features/pagination/slice";
import DeleteModal from "@/components/Modals/DeleteModal";

const ManageBlogs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const { blogs = [], total = 0 } = useSelector(BlogsData) || {};
  const isLoading = useSelector(BlogLoading);
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
    await dispatch(deleteBlog(deleteId));
    await dispatch(getBlogs({ page: currentPage, limit: perPage }));
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(getBlogs({ page: currentPage, limit: perPage }));
  }, [dispatch, currentPage, perPage]);
  return (
    <DefaultLayout>
      <Breadcrumb />
      <div className="mb-2 text-end md:mb-4">
        <Button onClick={() => navigate("/blogs/create")}>Add New</Button>
      </div>
      <div className="rounded-lg border bg-white px-5 pb-2.5 pt-6 shadow-lg sm:px-7 xl:pb-1">
        <Table
          columns={columns(handleDelete)}
          data={blogs}
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
        handleDelete={confirmDelete}
      />
    </DefaultLayout>
  );
};

export default ManageBlogs;
