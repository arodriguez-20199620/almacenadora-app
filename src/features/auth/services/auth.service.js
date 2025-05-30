import { api } from "../../../app/api/apiClient";

export const loginService = async (body) => {
  const { data } = await api.post("/auth/login", body);
  return data;
};

export const registerService = async (body) => {
  const { data } = await api.post("/users", body);
  return data;
};

