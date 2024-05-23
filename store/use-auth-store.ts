import { create } from "zustand";

interface IAuthStore {
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (token: string | null, isAuthenticated: boolean) => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  token:
    typeof window !== "undefined"
      ? localStorage.getItem("access_token") || null
      : null,
  isAuthenticated:
    typeof window !== "undefined"
      ? !!localStorage.getItem("access_token")
      : false,
  setAuth: (token, isAuthenticated) => set({ token, isAuthenticated }),
}));
