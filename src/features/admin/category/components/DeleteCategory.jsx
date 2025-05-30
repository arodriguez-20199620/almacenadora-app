import { lazy, Suspense, useState } from "react";
import { useDeleteCategory } from "../hooks/useDeleteCategory";
import { Button } from "primereact/button";
import { Trash } from "lucide-react";
import { Spinner } from "../../../../shared/components";
const ConfirmationDialog = lazy(() =>
  import("../../../../shared/components/ConfirmationDialog")
);

const DeleteCategory = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const deleteCategory = useDeleteCategory();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleConfirm = () => {
    deleteCategory.mutate(category._id, {
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
            title={`Are you sure you want to delete the category "${category.name}"?`}
            onClose={handleClose}
            onConfirm={handleConfirm}
            onCancel={handleClose}
          />
        )}
      </Suspense>
    </>
  );
};

export default DeleteCategory;
