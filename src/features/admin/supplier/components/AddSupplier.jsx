import { lazy, Suspense, useState } from "react";
import { Button } from "primereact/button";
import { Plus } from "lucide-react";
import { Spinner } from "../../../../shared/components";
import { useCreateSupplier } from "../hooks/useCreateSupplier";
const SupplierForm = lazy(() => import("./SupplierForm"));

const AddSupplier = () => {
  const [isOpen, setIsOpen] = useState(false);
  const createSupplier = useCreateSupplier();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = (data) => {
    createSupplier.mutate(data, {
      onSuccess: () => handleClose(),
    });
  };

  return (
    <>
      <Button
        label="Add Supplier"
        icon={<Plus className="w-5 h-5 mr-2" />}
        className="w-full sm:w-auto mb-2 sm:mb-0"
        onClick={handleOpen}
        aria-label="Add Supplier"
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
          <SupplierForm
            title="Add Supplier"
            buttonLabel="Save Supplier"
            isOpen={isOpen}
            onClose={handleClose}
            initialValues={{ name: "", phone: "", email: "", address: "" }}
            onSubmit={handleSubmit}
          />
        )}
      </Suspense>
    </>
  );
};

export default AddSupplier;
