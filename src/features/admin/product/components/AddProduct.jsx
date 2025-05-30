import { lazy, Suspense, useState } from "react";
import { useCreateProduct } from "../hooks/useCreateProduct";
import { Button } from "primereact/button";
import { Plus } from "lucide-react";
import { Spinner } from "../../../../shared/components";

const ProductForm = lazy(() => import("./ProductForm"));
const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const createProduct = useCreateProduct();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = (data) => {
    const formData = new FormData();

    // Agregar campos al FormData
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("minimumStock", data.minimumStock);
    formData.append("category", data.category);
    formData.append("supplier", data.supplier);
    formData.append("isPerishable", data.isPerishable);
    formData.append("expirationDate", data.expirationDate);

    // Agregar archivo si existe
    if (data.image) {
      formData.append("image", data.image);
    }

    // Llamar al servicio con FormData
    createProduct.mutate(formData, {
      onSuccess: () => handleClose(),
    });
  };
  return (
    <>
      <Button
        label="Add Product"
        icon={<Plus className="w-5 h-5 mr-2" />}
        className="w-full sm:w-auto mb-2 sm:mb-0"
        onClick={handleOpen}
        aria-label="Add Product"
        pt={{
          root: { className: "!py-2 !px-3" },
          label: { className: "!font-light !text-sm" },
        }}
      />
      <Suspense
        fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <Spinner />
          </div>
        }
      >
        {isOpen && (
          <ProductForm
            title="Add Product"
            buttonLabel="Save Product"
            isOpen={isOpen}
            onClose={handleClose}
            initialValues={{
              name: "",
              description: "",
              price: "",
              stock: "",
              minimumStock: "",
              category: "",
              supplier: "",
              isPerishable: false,
              expirationDate: "",
              image: null,
            }}
            onSubmit={handleSubmit}
          />
        )}
      </Suspense>
    </>
  );
};

export default AddProduct;
