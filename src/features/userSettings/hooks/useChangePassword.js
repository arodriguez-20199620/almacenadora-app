import { changePasswordService } from "../services/userSettings.services";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

export const useChangePassword = () => {
  return useMutation({
    mutationFn: changePasswordService,
    onSuccess: () => {
      toast.success("Password changed successfully");
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Failed to change password";
      toast.error(errorMessage);
    },
  });
};


