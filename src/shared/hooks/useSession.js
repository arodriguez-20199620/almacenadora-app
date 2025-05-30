import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { logoutService} from "../services/session.services";
import { useAuthStore } from "../../store/auth.store";

// export const useProfile = () => {
//   return useQuery({
//     queryKey: ["profile"],
//     queryFn: getProfileService,
//     onError: (error) => {
//       const errorMessage =
//         error.response?.data?.message || "Failed to fetch profile";
//       toast.error(errorMessage);
//     },
//   });
// };

export const useLogout = () => {
  const queryClient = useQueryClient();
  const clearUser = useAuthStore((state) => state.clearUser);

  return useMutation({
    mutationFn: logoutService,
    onSuccess: () => {
      toast.success("Logout successful!");
      queryClient.removeQueries(["token"]);
      clearUser();
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "Logout failed";
      toast.error(errorMessage);
    },
  });
};
