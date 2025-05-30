import Select from "../../../shared/components/Select";
import { useCategories } from "../../admin/category/hooks/useCategories";
import { useState } from "react";

const AboutPage = () => {
  const [page, setPage] = useState(1); // Estado para manejar la página actual
  const { data, isLoading, isError, error } = useCategories({
    page,
    limit: 10,
  });

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const options =
    data?.categories?.map((category) => ({
      value: category.id,
      label: category.name,
    })) || [];

  return (
    <div className="lg:p-4 p-2 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
      <div className="mb-1 w-full">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Sobre mí
        </h1>
        <div className="block sm:flex items-center md:divide-x md:divide-gray-100">
          <div className="flex items-center sm:justify-end w-full">
            <Select
              label="Selecciona una categoría"
              name="categories"
              options={options}
              placeholder="Por favor selecciona"
              onPageChange={setPage} // Pasar el manejador de cambio de página
              currentPage={page} // Pasar la página actual
              totalPages={data?.totalPages || 1} // Pasar el total de páginas
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
