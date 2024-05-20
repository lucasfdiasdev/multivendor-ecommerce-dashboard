import { create } from "zustand";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

import { endpoints } from "@/utils/endpoints";

interface IAdminStore {
  admin_login: (info: { email: string; password: string }) => Promise<void>;
}

export const useAdminStore = create<IAdminStore>((set) => ({
  admin_login: async (info) => {
    try {
      const { data } = await axios.post(endpoints.admin_login, info, {
        withCredentials: true,
      });

      localStorage.setItem("access_token", data.accessToken);

      set(data);
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

interface IAdminSession {
  get_session: (session: {
    userId?: string;
    name?: string;
    imageUrl?: string;
    role?: string;
  }) => Promise<void>;
}

export const useAdminSession = create<IAdminSession>((set) => ({
  get_session: async (session) => {
    try {
    } catch (error) {}
  },
}));
