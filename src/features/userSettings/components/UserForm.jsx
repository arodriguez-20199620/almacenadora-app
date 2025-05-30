import { InputField, Spinner } from "../../../shared/components";
import { useUpdateAccount } from "../hooks/useUpdateAccount";
import { Button } from "primereact/button";
import { Controller, useForm } from "react-hook-form";
import { User, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const UserForm = ({ user }) => {
  const updateUser = useUpdateAccount();
  const initialValues = useRef({
    name: "",
    lastName: "",
    email: "",
  });

  const { control, handleSubmit, reset, watch, formState } = useForm({
    mode: "onBlur",
    defaultValues: initialValues.current,
  });

  useEffect(() => {
    if (user) {
      const values = {
        name: user.name || "",
        lastName: user.lastName || "",
        email: user.email || "",
      };
      initialValues.current = values;
      reset(values);
    }
  }, [user, reset]);

  const watchedValues = watch();

  const isSameAsInitial = () => {
    const initial = initialValues.current;
    return (
      watchedValues.name === initial.name &&
      watchedValues.lastName === initial.lastName &&
      watchedValues.email === initial.email
    );
  };

  const onSubmit = async (data) => {
    await updateUser.mutateAsync(data);
    if (updateUser.isSuccess) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4"
      autoComplete="off"
    >
      <Controller
        name="name"
        control={control}
        rules={{ required: "Name is required." }}
        render={({ field, fieldState }) => (
          <InputField
            type="text"
            name={field.name}
            label="Name"
            icon={User}
            error={fieldState.error?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        rules={{ required: "Last Name is required." }}
        render={({ field, fieldState }) => (
          <InputField
            type="text"
            name={field.name}
            label="Last Name"
            icon={User}
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
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address. E.g. example@email.com",
          },
        }}
        render={({ field, fieldState }) => (
          <InputField
            type="email"
            name={field.name}
            label="Email"
            icon={Mail}
            error={fieldState.error?.message}
            {...field}
          />
        )}
      />
     <div className="flex lg:flex-row flex-col gap-3 justify-end ">
        {updateUser.isPending ? (
          <div className="">
            <Spinner size={24} />
          </div>
        ) : (
          <>
            {" "}
            <Button
              type="button"
              label="Cancel"
              pt={{
                root: {
                  className: "!py-2.5",
                },
                label: {
                  className: "!font-light !text-xs",
                },
              }}
              outlined
              severity="secondary"
              className="w-full md:w-auto"
              disabled={!formState.isDirty}
              onClick={() => reset(initialValues.current)}
            />
            <Button
              type="submit"
              label="Update Profile"
              pt={{
                root: {
                  className: "!py-2.5",
                },
                label: {
                  className: "!font-light !text-xs",
                }, 
              }}
              disabled={!formState.isDirty || isSameAsInitial()}
            />
          </>
        )}
      </div>
    </form>
  );
};

export default UserForm;
