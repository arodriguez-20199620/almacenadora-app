import { useState } from "react";
import { useSuppliers } from "../hooks/useSuppliers";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import EditSupplier from "./EditSupplier";
import DeleteSupplier from "./DeleteSuppier";

const TableSupplier = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(15);
  const currentPage = Math.floor(first / rows) + 1;
  const { data, isLoading, isError, error } = useSuppliers({
    page: currentPage,
    limit: rows,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const actionBodyTemplate = (rowData) => (
    <div className="flex items-center !space-x-2">
      <EditSupplier supplier={rowData} />
      <DeleteSupplier supplier={rowData} />
    </div>
  );

  const onPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  return (
    <DataTable
      value={data.suppliers}
      paginator
      first={first}
      rows={rows}
      totalRecords={data.totalSuppliers}
      onPage={onPage}
      lazy
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      showGridlines
      stripedRows
      tableStyle={{ minWidth: "50rem" }}
    >
      <Column field="name" header="Name" />
      <Column field="email" header="Email" />
      <Column field="phone" header="Phone" />
      <Column field="address" header="Address" />
      <Column header="Actions" body={actionBodyTemplate} exportable={false} />
    </DataTable>
  );
};

export default TableSupplier;
