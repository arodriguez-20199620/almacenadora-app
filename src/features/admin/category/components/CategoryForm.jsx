import { Button } from "primereact/button";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { InputField } from "../../../../shared/components";
import { Modal } from "../../../../shared/components/Modal";

const CategoryForm = ({
  title = "Add Category",
  buttonLabel = "Save Category",
  isOpen = false,
  onClose = () => {},
  initialValues = { name: "", description: "" },
  onSubmit = (data) => {},
}) => {
  const { control, handleSubmit, reset } = useForm({
    mode: "onBlur",
    defaultValues: initialValues,
  });
  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  return (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      <form
        className="flex flex-col space-y-6 mt-8"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Category name is required.",
            minLength: {
              value: 3,
              message: "Category name must be at least 3 characters long.",
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              type="text"
              name={field.name}
              label="Category Name"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{
            required: "Description is required.",
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters long.",
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              type="text"
              name={field.name}
              label="Description"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Button
          pt={{
            root: { className: "!py-2 !px-3" },
            label: { className: "!font-light !text-sm" },
          }}
          label={buttonLabel}
          className="w-full mt-4"
          type="submit"
        />
      </form>
    </Modal>
  );
};

export default CategoryForm;
