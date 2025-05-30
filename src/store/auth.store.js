import { create } from "zustand";
import { getProfileService } from "../shared/services/session.services";

export const useAuthStore = create((set) => ({
  user: null,
  isLoading: true,

  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  fetchUser: async () => {
    set({ isLoading: true });
    try {
      const data = await getProfileService();
      set({ user: data, isLoading: false });
    } catch {
      set({ user: null, isLoading: false });
    }
  },
}));
