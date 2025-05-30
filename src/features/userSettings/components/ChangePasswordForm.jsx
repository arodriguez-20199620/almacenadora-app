import { Lock } from "lucide-react";
import { Button } from "primereact/button";
import { Controller, useForm } from "react-hook-form";
import { useChangePassword } from "../hooks/useChangePassword";
import { PasswordField } from "../../../shared/components";

const ChangePasswordForm = () => {
  const changePassword = useChangePassword();
  const { control, handleSubmit, reset } = useForm({
    mode: "onBlur",
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    await changePassword.mutateAsync(data);
    if (changePassword.isSuccess) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 w-full"
      autoComplete="off"
    >
      <Controller
        name="oldPassword"
        control={control}
        rules={{ required: "Old password is required." }}
        render={({ field, fieldState }) => (
          <PasswordField
            name={field.name}
            label={"Old Password"}
            icon={Lock}
            error={fieldState.error?.message}
            feedback={false}
            {...field}
          />
        )}
      />
      <Controller
        name="newPassword"
        control={control}
        rules={{ required: "New password is required." }}
        render={({ field, fieldState }) => (
          <PasswordField
            name={field.name}
            label={"New Password"}
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
          required: "Confirm password is required.",
          validate: (value, { newPassword }) =>
            value === newPassword || "Passwords do not match.",
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
      />{" "}
      <div className="flex lg:flex-row flex-col gap-3 justify-end ">
        <Button
          type="submit"
          label="Change Password"
          pt={{
            root: {
              className: "!py-2.5",
            },
            label: {
              className: "!font-light !text-xs",
            },
          }}
        />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
