import { create } from "zustand";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

import { endpoints } from "@/utils/endpoints";
import { useAuthStore } from "./use-auth-store";
import useUserStore, { User } from "./use-user-store";

export interface IAdminStore {
  user: User | null;
  setUser: (user: User) => void;
  admin_login: (info: { email: string; password: string }) => Promise<User>;
}

const useAdminStore = create<IAdminStore>((set) => ({
  user: null,
  setUser: (user) => {
    set({ user });
  },
  admin_login: async (info) => {
    try {
      const { data } = await axios.post(endpoints.admin_login, info, {
        withCredentials: true,
      });

      // armazena o token no local storage
      localStorage.setItem("access_token", data.accessToken);

      // Armazene o token e o user no estado global
      useAuthStore.getState().setAuth(data.accessToken, true);
      useUserStore.getState().setUser(data.user);

      set({ user: data.user });
      return data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>;

        if (axiosError.response?.status === 404) {
          console.error(
            "Erro 404 - Não autorizado:",
            axiosError.response.data.message
          );
          toast.error(axiosError.response.data.message);
        }
      }
    }
  },
}));

export default useAdminStore;
