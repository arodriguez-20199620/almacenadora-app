import { Lock, Mail } from "lucide-react";
import { Button } from "primereact/button";
import { Controller, useForm } from "react-hook-form";
import { InputField, PasswordField } from "../../../shared/components";
import { useLogin } from "../hooks/useAuth";

const LoginForm = () => {
  const login = useLogin();
  const { control, handleSubmit, reset } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    await login.mutateAsync(data);
    if (login.isSuccess) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-12"
      autoComplete="off"
    >
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
      <Button
        type="submit"
        label={login.isPending ? "Loading..." : "Login"}
        disabled={login.isPending}
        raised
        pt={{
          root: {
            className: "!py-2.5 rounded-lg ",
          },
          label: {
            className: "!font-semibold !text-sm",
          },
        }}
      />
    </form>
  );
};

export default LoginForm;
