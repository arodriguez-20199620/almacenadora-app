import { api } from "../../../../app/api/apiClient";

export const getProductsService = async (params = {}) => {
  const { data } = await api.get("/products", { params });
  return data;
};

export const getProductByIdService = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export const createProductService = async (body) => {
  const { data } = await api.post("/products", body);
  return data;
};

export const updateProductService = async (id, body) => {
  const { data } = await api.put(`/products/${id}`, body);
  return data;
};

export const deleteProductService = async (id) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};
