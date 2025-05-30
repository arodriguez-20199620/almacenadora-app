import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const TableProduct = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(15);
  const currentPage = Math.floor(first / rows) + 1;

  const { data, isLoading, isError, error } = useProducts({
    page: currentPage,
    limit: rows,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const onPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const imgBodyTemplate = (rowData) => {
    return <img src={rowData.image} alt={rowData.name} />;
  };

  const isPerishableBodyTemplate = (rowData) => {
    return rowData.isPerishable ? "Yes" : "No";
  };

  const expirationDateBodyTemplate = (rowData) => {
    return rowData.isPerishable ? rowData.expirationDate : "N/A";
  };

  return (
    <DataTable
      value={data.products}
      paginator
      first={first}
      rows={rows}
      totalRecords={data.totalProducts}
      onPage={onPage}
      size="small"
      lazy
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      showGridlines
      stripedRows
      tableStyle={{ minWidth: "50rem" }}
    >
      <Column header="Image" body={imgBodyTemplate} style={{ width: "10%" }} />
      <Column field="name" header="Name" />
      <Column field="description" header="Description" />
      <Column field="price" header="Price" />
      <Column field="stock" header="Stock" />
      <Column field="minimumStock" header="Minimum Stock" />
      <Column field="category.name" header="Category" />
      <Column field="supplier.name" header="Supplier" />
      <Column header="Perishable Product" body={isPerishableBodyTemplate} />
      <Column header="Expiration Date" body={expirationDateBodyTemplate} />
      <Column field="user.email" header="Created By (Email)" />
    </DataTable>
  );
};

export default TableProduct;
