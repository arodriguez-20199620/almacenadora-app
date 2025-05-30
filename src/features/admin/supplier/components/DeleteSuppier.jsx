import { lazy, Suspense, useState } from "react";
import { useDeleteSupplier } from "../hooks/useDeleteSupplier";
import { Button } from "primereact/button";
import { Trash } from "lucide-react";
import { Spinner } from "../../../../shared/components";
const ConfirmationDialog = lazy(() =>
  import("../../../../shared/components/ConfirmationDialog")
);

const DeleteSupplier = ({ supplier }) => {
  const [isOpen, setIsOpen] = useState(false);
  const deleteSupplier = useDeleteSupplier();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleConfirm = () => {
    deleteSupplier.mutate(supplier._id, {
      onSuccess: () => handleClose(),
    });
  };

  return (
    <>
      <Button
        label="Delete"
        severity="danger"
        className="w-full sm:w-auto mb-2 sm:mb-0"
        icon={<Trash className="w-4 h-4 mr-2" />}
        onClick={handleOpen}
        size="small"
        aria-label="Delete"
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
          <ConfirmationDialog
            isOpen={isOpen}
            title={`Are you sure you want to delete the supplier "${supplier.name}"?`}
            onClose={handleClose}
            onConfirm={handleConfirm}
            onCancel={handleClose}
          />
        )}
      </Suspense>
    </>
  );
};

export default DeleteSupplier;
