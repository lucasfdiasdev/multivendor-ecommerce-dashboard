import axios from "axios";
import { create } from "zustand";

import { endpoints } from "@/utils/endpoints";

interface ICategory {
  _id: string;
  name: string;
  image: string;
  slug: string;
  createdAt: string;
}

interface ICategoryStore {
  categories: ICategory[];
  addCategory: (info: {
    name: string;
    image: File;
  }) => Promise<ICategory | void>;
  getCategories: () => Promise<void>;
}

const useCategoryStore = create<ICategoryStore>((setState) => ({
  categories: [],
  addCategory: async (info) => {
    try {
      const formData = new FormData();
      formData.append("name", info.name);
      formData.append("image", info.image);

      const { data } = await axios.post(endpoints.add_category, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setState((state) => ({
        categories: [...state.categories, data.category],
      }));

      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getCategories: async () => {
    try {
      const { data } = await axios.get(endpoints.get_category, {
        withCredentials: true,
      });

      setState({ categories: data.data.categories });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useCategoryStore;
