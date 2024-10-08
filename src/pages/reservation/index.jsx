import Breadcrumb from "@/components/Breadcrumb";
import DefaultLayout from "@/layout/DefaultLayout";
import {
  deleteReservation,
  getReservations,
} from "@/store/features/contacts/service";
import { ReservationsData, ReservationsLoading } from "@/store/selector";
import { Table } from "@/common";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { columns } from "./column";
import { setCurrentPage, setPerPage } from "@/store/features/pagination/slice";
import DeleteModal from "@/components/Modals/DeleteModal";

const Reservation = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const { order = [], total = 0 } = useSelector(ReservationsData) || {};
  const isLoading = useSelector(ReservationsLoading);

  const { currentPage = 1, perPage = 12 } = useSelector(
    (state) => state.pagination,
  );

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handlePerRowsChange = (newPerPage) => {
    dispatch(setPerPage(newPerPage));
  };

  const confirmDelete = (id) => {
    setSelectedId(id);
    setIsOpen(true);
  };

  const handleDelete = async () => {
    await dispatch(deleteReservation(selectedId)).unwrap();
    await dispatch(
      getReservations({
        page: currentPage,
        limit: perPage,
      }),
    );
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(getReservations({ page: currentPage, limit: perPage }));
  }, [dispatch, currentPage, perPage]);

  return (
    <DefaultLayout>
      <Breadcrumb />
      <div className="rounded-lg border bg-white px-5 pb-2.5 pt-6 shadow-lg sm:px-7 xl:pb-1">
        <Table
          columns={columns(confirmDelete)}
          data={order}
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
    </DefaultLayout>
  );
};

export default Reservation;