import { User, Mail, Lock } from "lucide-react";
import { Button } from "primereact/button";
import { Controller, useForm } from "react-hook-form";
import { InputField, PasswordField } from "../../../shared/components";
import { useRegister } from "../hooks/useAuth";

const RegisterForm = () => {
  const register = useRegister();
  const { control, handleSubmit, reset } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (data) => {
    await register.mutateAsync(data);
    if (register.isSuccess) {
      reset();
    }
  };

  return (
    <form
      className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-4"
      onSubmit={handleSubmit(onSubmit)}
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
      <div className="lg:col-span-2">
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
      </div>

      <Controller
        name="password"
        control={control}
        rules={{ required: "Password is required." }}
        render={({ field, fieldState }) => (
          <PasswordField
            name={field.name}
            label={"Password"}
            icon={Lock}
            error={fieldState.error?.message}
            feedback={false}
            {...field}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: "Confirm Password is required.",
          validate: (value, { password }) =>
            value === password || "Passwords do not match.",
        }}
        render={({ field, fieldState }) => (
          <PasswordField
            name={field.name}
            label={"Confirm Password"}
            icon={Lock}
            error={fieldState.error?.message}
            feedback={false}
            {...field}
          />
        )}
      />

      <Button
        type="submit"
        label={register.isPending ? "Loading..." : "Register"}
        disabled={register.isPending}
           raised
        pt={{
          root: {
            className: "!py-2.5 lg:col-span-2",
          },
          label: {
            className: "!font-semibold !text-sm",
          },
        }}
     
      />
    </form>
  );
};

export default RegisterForm;
