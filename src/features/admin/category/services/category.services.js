import { api } from "../../../../app/api/apiClient";

export const getCategoriesService = async (params = {}) => {
  const { data } = await api.get("/categories", { params });
  return data;
};

export const getCategoryByIdService = async (id) => {
  const { data } = await api.get(`/categories/${id}`);
  return data;
};

export const createCategoryService = async (body) => {
  const { data } = await api.post("/categories", body);
  return data;
};

export const updateCategoryService = async (id, body) => {
  const { data } = await api.put(`/categories/${id}`, body);
  return data;
};

export const deleteCategoryService = async (id) => {
  const { data } = await api.delete(`/categories/${id}`);
  return data;
};
