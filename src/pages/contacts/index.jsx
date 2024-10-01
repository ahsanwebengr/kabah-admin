import Breadcrumb from "@/components/Breadcrumb";
import DefaultLayout from "@/layout/DefaultLayout";
import { getContacts } from "@/store/features/contacts/service";
import { ContactLoading, ContactsData } from "@/store/selector";
import { Table } from "@/common";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { columns } from "./column";
import { setCurrentPage, setPerPage } from "@/store/features/pagination/slice";

const Contacts = () => {
  const dispatch = useDispatch();

  const { contacts = [], total = 0 } = useSelector(ContactsData) || {};
  const isLoading = useSelector(ContactLoading);

  const { currentPage = 1, perPage = 12 } = useSelector(
    (state) => state.pagination,
  );

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handlePerRowsChange = (newPerPage) => {
    dispatch(setPerPage(newPerPage));
  };

  useEffect(() => {
    dispatch(getContacts({ page: currentPage, limit: perPage }));
  }, [dispatch, currentPage, perPage]);

  return (
    <DefaultLayout>
      <Breadcrumb />
      <div className="rounded-lg border bg-white px-5 pb-2.5 pt-6 shadow-lg sm:px-7 xl:pb-1">
        <Table
          columns={columns()}
          data={contacts}
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

export default Contacts;
