import { useRef } from "react";
import { CircleAlert } from "lucide-react";
import { X } from "lucide-react";
import { Button } from "primereact/button";

const ConfirmationDialog = ({
  isOpen = true,
  title = "Are you sure you want to delete this user?",
  onClose,
  onConfirm,
  onCancel,
  loading = false,
}) => {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-50 bg-black/50 overflow-auto"
      onMouseDown={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative"
      >
        <Button
          icon={<X className="w-5 h-5" strokeWidth={3} />}
          size="small"
          onClick={onClose}
          severity="danger"
          aria-label="Close Modal"
          text
          pt={{
            root: { className: "!p-1 !absolute !top-2 !right-2" },
            icon: { className: "!text-gray-600" },
          }}
        />

        <div className="text-center">
          <CircleAlert
            className="w-20 h-20 text-red-600 mx-auto"
            strokeWidth={1.5}
          />
          <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">{title}</h3>
          <div className="flex justify-center gap-3">
            <Button
              label="No, Cancel"
              className="w-full sm:w-auto"
              onClick={onCancel}
              severity="secondary"
              outlined
              pt={{
                root: { className: "!py-3" },
                label: { className: "!font-medium !text-sm" },
              }}
            />
            <Button
              label="Yes, I'm sure"
              className="w-full sm:w-auto"
              onClick={onConfirm}
              severity="danger"
              loading={loading}
              raised
              pt={{
                root: { className: "!py-2" },
                label: { className: "!font-medium !text-sm" },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
