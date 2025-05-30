import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../../store/auth.store";

export function ProtectedRoute({ children }) {
  const { user, isLoading, fetchUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) fetchUser();
  }, []);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/auth/login");
    }
  }, [user, isLoading]);

  if (isLoading) return <p>Cargando...</p>;

  return user ? children : null;
}
