import { create } from "zustand";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

import { User } from "./use-user-store";
import useUserStore from "./use-user-store";
import { endpoints } from "@/utils/endpoints";
import { useAuthStore } from "./use-auth-store";

interface ISellerStore {
  user: User | null;
  setUser: (user: User) => void;
  seller_register: (info: {
    name: string;
    email: string;
    password: string;
    confirmCheck: boolean;
  }) => Promise<void>;
  seller_login: (info: { email: string; password: string }) => Promise<void>;
}

export const useSellerStore = create<ISellerStore>((set) => ({
  user: null,
  setUser: (user) => {
    set({ user });
  },
  seller_register: async (info) => {
    try {
      const { data } = await axios.post(endpoints.seller_register, info, {
        withCredentials: true,
      });
      console.log(data);

      localStorage.setItem("access_token", data.accessToken);

      useAuthStore.getState().setAuth(data.accessToken, true);
      useUserStore.getState().setUser(data.user);

      set({ user: data.user });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>;
        if (axiosError.response?.status === 400) {
          console.error(
            "Erro 400 - User already exists:",
            axiosError.response.data.message
          );
          toast.error(axiosError.response.data.message);
        }
      }
    }
  },
  seller_login: async (info) => {
    try {
      const { data } = await axios.post(endpoints.seller_login, info, {
        withCredentials: true,
      });
      console.log(data);

      localStorage.setItem("access_token", data.accessToken);

      useAuthStore.getState().setAuth(data.accessToken, true);
      useUserStore.getState().setUser(data.user);

      set({ user: data.user });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>;
        if (axiosError.response?.status === 404) {
          console.error(
            "Erro 404 - User not found:",
            axiosError.response.data.message
          );
          toast.error(axiosError.response.data.message);
        }
        if (axiosError.response?.status === 400) {
          console.error(
            "Erro 404 - Password invalid:",
            axiosError.response.data.message
          );
          toast.error(axiosError.response.data.message);
        }
      }
    }
  },
}));
