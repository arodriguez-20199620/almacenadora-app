import { lazy, Suspense, useState } from "react";
import { useUpdateCategory } from "../hooks/useUpdateCategory";
import { Button } from "primereact/button";
import { Edit } from "lucide-react";
import { Spinner } from "../../../../shared/components";
const CategoryForm = lazy(() => import("./CategoryForm"));

const EditCategory = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const updateCategory = useUpdateCategory();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = (data) => {
    updateCategory.mutate(
      { id: category._id, body: data },
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
          <CategoryForm
            title="Edit Category"
            buttonLabel="Update Category"
            isOpen={isOpen}
            onClose={handleClose}
            initialValues={{
              name: category.name,
              description: category.description,
            }}
            onSubmit={handleSubmit}
          />
        )}
      </Suspense>
    </>
  );
};

export default EditCategory;
