import clsx from "clsx";
import { Password } from "primereact/password";

export const PasswordField = ({ name, label, icon: Icon, error, ...rest }) => {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={clsx(
          { "text-red-500": !!error },
          "text-xs font-medium text-gray-900"
        )}
      >
        {label}
      </label>
      <Password
        id={name}
        pt={{
          iconField: {
            root: {
              style: { width: "100%" },
              className: clsx("group focus-within:text-primary-600", {
                "text-red-500": !!error,
              }),
            },
          },
          hideIcon: {
            className: clsx(
              { "text-red-500": !!error, "text-gray-400": !error },
              "group-focus-within:text-primary-600 absolute -top-1 right-1"
            ),
            style: { width: "24px", height: "24px" },
          },
          showIcon: {
            className: clsx(
              { "text-red-500": !!error, "text-gray-400": !error },
              "group-focus-within:text-primary-600 absolute -top-1 right-1"
            ),
            style: { width: "24px", height: "24px" },
          },
          input: {
            style: { width: "100%" },
            className: clsx("!w-full  !py-2 !text-sm !text-light", {
              "p-invalid border-red-500": !!error,
            }),
          },
          root: {
            style: { width: "100%" },
          },
        }}
        toggleMask
        feedback={false}
        {...rest}
      />
      {error && <span className="w-full text-red-500 text-xs">{error}</span>}
    </div>
  );
};
