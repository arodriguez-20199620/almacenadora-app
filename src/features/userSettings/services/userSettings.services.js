import { api } from "../../../app/api/apiClient";

export const getProfileService = async () => {
  const { data } = await api.get("/users/profile");
  return data;
};

export const updateAccountService = async (body) => {
  const { data } = await api.put("/users/edit-account", body);
  return data;
};

export const changePasswordService = async (body) => {
  const { data } = await api.put("/users/change-password", body);
  return data;
};
