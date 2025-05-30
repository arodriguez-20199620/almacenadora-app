import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { InputField } from "../../../../shared/components";
import { Modal } from "../../../../shared/components/Modal";
import { useCategories } from "../../category/hooks/useCategories";
import { useSuppliers } from "../../supplier/hooks/useSuppliers";
import Select from "../../../../shared/components/Select";

const ProductForm = ({
  title = "Add Product",
  buttonLabel = "Save Product",
  isOpen = false,
  onClose = () => {},
  initialValues = {
    name: "",
    description: "",
    price: 0,
    stock: 0,
    minimumStock: 0,
    category: "",
    supplier: "",
    isPerishable: false,
    expirationDate: null,
    image: null,
  },
  onSubmit = (data) => {},
}) => {
  const { control, handleSubmit, reset } = useForm({
    mode: "onBlur",
    defaultValues: initialValues,
  });

  const [categoryPage, setCategoryPage] = useState(1);
  const [supplierPage, setSupplierPage] = useState(1);

  const { data: categoryData, isLoading: isLoadingCategories } = useCategories({
    page: categoryPage,
    limit: 10,
  });

  const { data: supplierData, isLoading: isLoadingSuppliers } = useSuppliers({
    page: supplierPage,
    limit: 10,
  });

  const categoryOptions =
    categoryData?.categories?.map((category) => ({
      value: category._id,
      label: category.name,
    })) || [];

  const supplierOptions =
    supplierData?.suppliers?.map((supplier) => ({
      value: supplier._id,
      label: supplier.name,
    })) || [];

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
            required: "Product name is required.",
            minLength: {
              value: 3,
              message: "Product name must be at least 3 characters long.",
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              type="text"
              name={field.name}
              label="Product Name"
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
          }}
          render={({ field, fieldState }) => (
            <InputField
              type="text"
              name={field.name}
              label="description"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          rules={{
            required: "Price is required.",
            pattern: {
              value: /^[0-9]+(\.[0-9]+)?$/,
              message: "Price must be a positive number.",
            },
            min: {
              value: 0,
              message: "Price must be a positive number.",
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              type="number"
              name={field.name}
              label="Price"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="stock"
          control={control}
          rules={{
            required: "Stock is required.",
            pattern: {
              value: /^[0-9]+$/,
              message: "Stock must be a positive integer.",
            },
            min: {
              value: 0,
              message: "Stock must be a positive integer.",
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              type="number"
              name={field.name}
              label="Stock"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="minimumStock"
          control={control}
          rules={{
            required: "Minimum stock is required.",
            pattern: {
              value: /^[0-9]+$/,
              message: "Stock must be a positive integer.",
            },
            validate: (value, { stock }) =>
              value >= stock ||
              "Minimum stock must be less than or equal to stock.",
          }}
          render={({ field, fieldState }) => (
            <InputField
              type="number"
              name={field.name}
              label="Minimum Stock"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="category"
          control={control}
          rules={{
            required: "Category is required.",
          }}
          render={({ field, fieldState }) => (
            <Select
              label="Category"
              name={field.name}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              options={categoryOptions}
              placeholder="Select a category"
              onPageChange={setCategoryPage}
              currentPage={categoryPage}
              totalPages={categoryData?.totalPages || 1}
              error={fieldState.error?.message}
              disabled={isLoadingCategories}
            />
          )}
        />

        <Controller
          name="supplier"
          control={control}
          rules={{
            required: "Supplier is required.",
          }}
          render={({ field, fieldState }) => (
            <Select
              label="Supplier"
              name={field.name}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              options={supplierOptions}
              placeholder="Select a supplier"
              onPageChange={setSupplierPage}
              currentPage={supplierPage}
              totalPages={supplierData?.totalPages || 1}
              error={fieldState.error?.message}
              disabled={isLoadingSuppliers}
            />
          )}
        />

        <Controller
          name="isPerishable"
          control={control}
          render={({ field }) => (
            <div className="flex items-center">
              <input
                id="isPerishable"
                type="checkbox"
                {...field}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
              <label htmlFor="isPerishable" className="ml-2">
                Is Perishable
              </label>
            </div>
          )}
        />
        <Controller
          name="expirationDate"
          control={control}
          rules={{
            validate: {
              isPerishable: (value, formValues) =>
                !formValues.isPerishable || value
                  ? true
                  : "Expiration date is required for perishable products.",
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              type="date"
              name={field.name}
              label="Expiration Date"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="image"
          control={control}
          render={({ field, fieldState }) => (
            <FileUpload
              name={field.name}
              mode="basic"
              accept="image/*"
              maxFileSize={1000000}
              onSelect={(e) => field.onChange(e.files[0])}
              onError={(e) => field.onChange(null)}
              chooseLabel="Choose Image"
              className="w-full"
            />
          )}
          rules={{
            required: "Image is required.",
            validate: {
              fileType: (value) =>
                value && value.type.startsWith("image/")
                  ? true
                  : "Selected file must be an image.",
              fileSize: (value) =>
                value && value.size <= 1000000
                  ? true
                  : "Image size must be less than 1MB.",
            },
          }}
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

export default ProductForm;
