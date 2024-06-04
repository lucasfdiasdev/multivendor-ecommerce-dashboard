import { create } from "zustand";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

import { endpoints } from "@/utils/endpoints";

export interface IDepartament {
  _id: string;
  departament_name: string;
  departament_image: string;
  departament_slug: string;
  createdAt: string;
}

interface IDepartamentStore {
  departaments: IDepartament[];
  addDepartament: (info: {
    departament_name: string;
    departament_image: File;
  }) => Promise<IDepartament | void>;
  getDepartaments: () => Promise<void>;
  getDepartamentById: (_id: string) => Promise<IDepartament | void>;
}

const useCategoryStore = create<IDepartamentStore>((setState) => ({
  departaments: [],
  addDepartament: async (info) => {
    try {
      const formData = new FormData();
      formData.append("departament_name", info.departament_name);
      formData.append("departament_image", info.departament_image);

      const { data } = await axios.post(endpoints.add_departament, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Departamento adicionado com sucesso!");

      setState((state) => ({
        departaments: [...state.departaments, data.departament],
      }));

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>;
        if (axiosError.response?.status === 400) {
          console.error(
            "Erro 400 - Departament already exists:",
            axiosError.response.data.message
          );
          toast.error(axiosError.response.data.message);
        }
      }
    }
  },
  getDepartaments: async () => {
    try {
      const { data } = await axios.get(endpoints.get_all_departaments, {
        withCredentials: true,
      });

      setState({ departaments: data.data.departaments });
    } catch (error) {
      console.log(error);
    }
  },
  getDepartamentById: async (_id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/category/${_id}`,
        {
          withCredentials: true,
        }
      );
      setState({ departaments: data.data._id });
      console.log(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>;
        if (axiosError.response?.status === 404) {
          console.error(
            "Erro 404 - Category not found:",
            axiosError.response.data.message
          );
          toast.error(axiosError.response.data.message);
        }
      }
    }
  },
}));

export default useCategoryStore;
