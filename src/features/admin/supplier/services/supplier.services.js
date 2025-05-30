import { api } from "../../../../app/api/apiClient";

export const getSuppliersService = async (params = {}) => {
  const { data } = await api.get("/suppliers", { params });
  return data;
};

export const getSupplierByIdService = async (id) => {
  const { data } = await api.get(`/suppliers/${id}`);
  return data;
};

export const createSupplierService = async (body) => {
  const { data } = await api.post("/suppliers", body);
  return data;
};

export const updateSupplierService = async (id, body) => {
  const { data } = await api.put(`/suppliers/${id}`, body);
  return data;
};

export const deleteSupplierService = async (id) => {
  const { data } = await api.delete(`/suppliers/${id}`);
  return data;
};
