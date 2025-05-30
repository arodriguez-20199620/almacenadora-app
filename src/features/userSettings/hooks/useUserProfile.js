import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { getProfileService } from "../services/userSettings.services";

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: getProfileService,
    onSuccess: (data) => {
      toast.success("Profile fetched successfully");
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch profile";
      toast.error(errorMessage);
    },
  });
};
