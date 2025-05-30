import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import {
  loginService,
  registerService
} from "../services/auth.service";
// import { useAuthStore } from "./../store/auth.store";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      toast.success("Login successful!");
      navigate("/");
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "Login failed";
      toast.error(errorMessage);
    },
  });
};

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerService,
    onSuccess: (data) => {
      toast.success(`Registration successful!`);
      navigate("/auth/login");
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Registration failed";
      toast.error(errorMessage);
    },
  });
};
