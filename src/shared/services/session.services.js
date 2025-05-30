import { api } from "../../app/api/apiClient";

export const getProfileService = async () => {
  const { data } = await api.get("/users/profile");
  return data;
};

export const logoutService = async () => {
  const { data } = await api.post("/auth/logout");
  return data;
};
