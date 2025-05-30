import { lazy, Suspense, useState } from "react";
import { useUpdateSupplier } from "../hooks/useUpdateSupplier";
import { Button } from "primereact/button";
import { Edit } from "lucide-react";
import { Spinner } from "../../../../shared/components";
const SupplierForm = lazy(() => import("./SupplierForm"));

const EditSupplier = ({ supplier }) => {
  const [isOpen, setIsOpen] = useState(false);
  const updateSupplier = useUpdateSupplier();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = (data) => {
    updateSupplier.mutate(
      { id: supplier._id, body: data },
      {
        onSuccess: () => handleClose(),
      }
    );
  };

  return (
    <>
      <Button
        label="Edit"
        className="w-full sm:w-auto mb-2 sm:mb-0"
        icon={<Edit className="w-4 h-4 mr-2" />}
        onClick={handleOpen}
        size="small"
        aria-label="Edit"
        pt={{
          root: { className: "!py-2" },
          label: { className: "!font-light !text-xs" },
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
          <SupplierForm
            title="Edit Supplier"
            buttonLabel="Update Supplier"
            isOpen={isOpen}
            onClose={handleClose}
            initialValues={{
              name: supplier.name,
              phone: supplier.phone,
              email: supplier.email,
              address: supplier.address,
            }}
            onSubmit={handleSubmit}
          />
        )}
      </Suspense>
    </>
  );
};

export default EditSupplier;