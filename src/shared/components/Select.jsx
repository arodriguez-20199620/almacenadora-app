import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Select = ({
  label = "Select",
  name = "select",
  value,
  onChange,
  options = [],
  placeholder = "Please select",
  onPageChange,
  currentPage = 1,
  totalPages = 1,
  error,
  ...rest
}) => {
  const selectRef = useRef(null);

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
    if (selectRef.current) {
      selectRef.current.focus();
      if (typeof selectRef.current.showDropdown === "function") {
        selectRef.current.showDropdown();
      }
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={name} className="block mr-3">
          <span className="text-sm font-semibold text-gray-800">{label}</span>
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-50 transition"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            aria-label="Página anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-xs font-medium text-gray-700 text-center min-w-[40px] inline-block">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-50 transition"
            disabled={currentPage >= totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            aria-label="Página siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative">
        <select
          ref={selectRef}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          {...rest}
          className="block w-full py-2 px-3 pr-8 text-sm text-gray-800 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm appearance-none"
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
      {error && (
        <span className="w-full text-red-500 text-xs mt-1 ml-2">{error}</span>
      )}
    </div>
  );
};

export default Select;
