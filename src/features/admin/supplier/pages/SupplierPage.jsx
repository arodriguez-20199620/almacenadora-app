import AddSupplier from "../components/AddSupplier";
import TableSupplier from "../components/TableSupplier";

const SupplierPage = () => {
  return (
    <div>
      <div className="lg:p-4 p-2 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div className="mb-1 w-full">
          <h1 className=" text-xl sm:text-2xl font-semibold text-gray-900">
            All Suppliers
          </h1>
          <div className="block sm:flex items-center md:divide-x md:divide-gray-100">
            <div className="flex items-center sm:justify-end w-full">
              <AddSupplier />
            </div>
          </div>
        </div>
      </div>
      <TableSupplier />
    </div>
  );
};

export default SupplierPage;
