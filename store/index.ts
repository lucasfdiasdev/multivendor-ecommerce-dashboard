import axios from "axios";
import { create } from "zustand";
import { endpoints } from "@/utils/endpoints";

export const useAdminStore = create((set) => ({
  admin_login: async (info: { email: string; password: string }) => {
    console.log(info);
    try {
      const { data } = await axios.post(endpoints.admin_login, info, {
        withCredentials: true,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
}));
