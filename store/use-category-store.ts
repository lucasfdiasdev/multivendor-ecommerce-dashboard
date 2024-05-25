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
  get_categories: () => Promise<void>;
  add_category: (info: {
    name: string;
    image: File;
  }) => Promise<ICategory | void>;
}

const useCategoryStore = create<ICategoryStore>((set) => ({
  categories: [],
  add_category: async (info) => {
    try {
      const formData = new FormData();
      formData.append("name", info.name);
      formData.append("image", info.image);

      const { data } = await axios.post(endpoints.add_category, info, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      set((state) => ({ categories: [...state.categories, data.category] }));

      return data;
    } catch (error) {
      console.log(error);
    }
  },
  get_categories: async () => {
    try {
      const { data } = await axios.get(endpoints.get_category, {
        withCredentials: true,
      });

      set({ categories: data.category.categories });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useCategoryStore;
