import { lazy, Suspense, useState } from "react";
import { useCreateCategory } from "../hooks/useCreateCategory";
import { Button } from "primereact/button";
import { Plus } from "lucide-react";
import { Spinner } from "../../../../shared/components";
const CategoryForm = lazy(() => import("./CategoryForm"));

const AddCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const createCategory = useCreateCategory();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = (data) => {
    createCategory.mutate(data, {
      onSuccess: () => handleClose(),
    });
  };

  return (
    <>
      <Button
        label="Add Category"
        icon={<Plus className="w-5 h-5 mr-2" />}
        className="w-full sm:w-auto mb-2 sm:mb-0"
        onClick={handleOpen}
        aria-label="Add Category"
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
          <CategoryForm
            title="Add Category"
            buttonLabel="Save Category"
            isOpen={isOpen}
            onClose={handleClose}
            initialValues={{ name: "", description: "" }}
            onSubmit={handleSubmit}
          />
        )}
      </Suspense>
    </>
  );
};

export default AddCategory;
