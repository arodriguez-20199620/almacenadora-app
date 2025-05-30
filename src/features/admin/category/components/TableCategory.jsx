import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";
import { useCategories } from "../hooks/useCategories";
import DeleteCategory from "./DeleteCategory";
import EditCategory from "./EditCategory";

const TableCategory = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(15);
  const currentPage = Math.floor(first / rows) + 1;

  const { data, isLoading, isError, error } = useCategories({
    page: currentPage,
    limit: rows,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  console.log("🚀 ~ TableCategory ~ data:", data);

  const actionBodyTemplate = (rowData) => (
    <div className="flex items-center !space-x-2">
      <EditCategory category={rowData} />
      <DeleteCategory category={rowData} />
    </div>
  );

  const onPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <DataTable
      value={data.categories}
      paginator
      first={first}
      rows={rows}
      totalRecords={data.totalCategories}
      onPage={onPage}
      lazy
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      showGridlines
      stripedRows
      tableStyle={{ minWidth: "50rem" }}
    >
      <Column field="name" header="Name" />
      <Column field="description" header="Description" />
      <Column header="Actions" body={actionBodyTemplate} exportable={false} />
    </DataTable>
  );
};

export default TableCategory;
