import { Button } from "primereact/button";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { InputField } from "../../../../shared/components";
import { Modal } from "../../../../shared/components/Modal";

const SupplierForm = ({
  title = "Add Supplier",
  buttonLabel = "Save Supplier",
  isOpen = false,
  onClose = () => {},
  initialValues = { name: "", phone: "", email: "", address: "" },
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
            required: "Supplier name is required.",
            minLength: {
              value: 3,
              message: "Supplier name must be at least 3 characters long.",
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              type="text"
              name={field.name}
              label="Supplier Name"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Phone is required.",
            minLength: {
              value: 7,
              message: "Phone must be at least 7 characters long.",
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              type="text"
              name={field.name}
              label="Phone"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address.",
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              type="email"
              name={field.name}
              label="Email"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          rules={{
            required: "Address is required.",
            minLength: {
              value: 5,
              message: "Address must be at least 5 characters long.",
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              type="text"
              name={field.name}
              label="Address"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Button
          label={buttonLabel}
          type="submit"
          severity="primary"
          className="w-full sm:w-auto mt-4"
        />
      </form>
    </Modal>
  );
};

export default SupplierForm;
