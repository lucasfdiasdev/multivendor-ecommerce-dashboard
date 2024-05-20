import { create } from "zustand";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

import { endpoints } from "@/utils/endpoints";

interface ISellerStore {
  seller_register: (info: {
    name: string;
    email: string;
    password: string;
    confirmCheck: boolean;
  }) => Promise<void>;
  seller_login: (info: { email: string; password: string }) => Promise<void>;
}

export const useSellerStore = create<ISellerStore>((set) => ({
  seller_register: async (info) => {
    try {
      const { data } = await axios.post(endpoints.seller_register, info, {
        withCredentials: true,
      });

      localStorage.setItem("access_token", data.accessToken);

      set(data);
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

      localStorage.setItem("access_token", data.accessToken);

      set(data);
      console.log(data);
      toast.success("Login efetuado com sucesso!");
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
      }
    }
  },
}));
