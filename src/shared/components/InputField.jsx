import clsx from "clsx";
import { FloatLabel } from "primereact/floatlabel";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import React from "react";
/**
 * Componente reutilizable de campo de entrada para react-hook-form.
 * @param {string} name - Nombre del campo (obligatorio).
 * @param {string} label - Etiqueta flotante (obligatorio).
 * @param {object} register - Función register de react-hook-form (obligatorio).
 * @param {object} rules - Reglas de validación de react-hook-form (opcional).
 * @param {React.ElementType} icon - Icono a mostrar (opcional).
 * @param {string} error - Mensaje de error a mostrar (opcional).
 * @param {object} rest - Otros props para InputText.
 */
export const InputField = ({
  name,
  type = "text",
  label,
  icon: Icon = null,
  error,
  ...rest
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className={clsx(
          { "text-red-500": !!error },
          "text-xs font-medium text-gray-900 block mb-2"
        )}
      >
        {label}
      </label>
      {Icon ? (
        <IconField
          className={clsx("group focus-within:text-primary-600", {
            "text-red-500": !!error,
          })}
        >
          <InputIcon className="absolute inset-y-1/3 flex  items-center">
            <Icon
              className={clsx(
                { "text-red-500": !!error, "text-gray-400 ": !error },
                "group-focus-within:text-primary-600 h-6 w-6"
              )}
            />
          </InputIcon>
          <InputText
            type={type}
            id={name}
            pt={{
              root: {
                className: "!py-1.5",
              },
            }}
            className={clsx("w-full", { "p-invalid border-red-500": !!error })}
            {...rest}
          />
        </IconField>
      ) : (
        <>
          <InputText
            type={type}
            id={name}
            pt={{
              root: {
                className: "!py-2.5 !text-sm !text-light",
              },
            }}
            className={clsx("w-full", { "p-invalid border-red-500": !!error })}
            {...rest}
          />
        </>
      )}
      {error && (
        <span className="w-full text-red-500 text-xs mt-1 ml-2">{error}</span>
      )}
    </div>
  );
};
