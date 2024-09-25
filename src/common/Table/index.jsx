import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";
import { setCurrentPage, setPerPage } from "@/store/features/pagination/slice";
import TableLoader from "./loader";

const Table = ({
  columns,
  data,
  paginationTotalRows,
  paginationPerPage,
  onChangePage,
  onChangeRowsPerPage,
  isPendding,
}) => {
  const dispatch = useDispatch();

  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "18px",
      },
    },
    cells: {
      style: {
        fontSize: "16px",
        padding: "6px",
      },
    },
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      progressPending={isPendding}
      progressComponent={<TableLoader />}
      pagination
      paginationServer
      paginationTotalRows={paginationTotalRows}
      paginationPerPage={paginationPerPage}
      paginationRowsPerPageOptions={[12, 25, 50]}
      onChangePage={onChangePage || ((page) => dispatch(setCurrentPage(page)))}
      onChangeRowsPerPage={
        onChangeRowsPerPage ||
        ((newPerPage) => dispatch(setPerPage(newPerPage)))
      }
      selectableRows
      highlightOnHover
      striped
    />
  );
};

export default Table;
