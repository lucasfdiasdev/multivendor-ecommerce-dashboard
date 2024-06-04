import { create } from "zustand";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

import { endpoints } from "@/utils/endpoints";

export interface IProduct {
  _id: string;
  product_name: string;
  product_description: string;
  product_price: string;
  product_stock: string;
  product_discount: string;
  product_brand: string;
  images: string[];
  createdAt: string;
}

interface IProductStore {
  products: IProduct[];
  addProduct: (info: {
    _id: string;
    product_name: string;
    product_description: string;
    departament: string;
    product_price: string;
    product_stock: string;
    product_discount: string;
    product_brand: string;
    images: File[];
    sellerId: string;
  }) => Promise<IProduct | void>;
  getProducts: () => Promise<IProduct[]>;
}

const useProductStore = create<IProductStore>((set) => ({
  products: [],
  addProduct: async (info) => {
    try {
      const formData = new FormData();
      formData.append("product_name", info.product_name);
      formData.append("product_description", info.product_description);
      formData.append("product_price", info.product_price);
      formData.append("product_stock", info.product_stock);
      formData.append("departament", info.departament);
      formData.append("shopName", "Farid Fashion");
      formData.append("product_discount", info.product_discount);
      formData.append("product_brand", info.product_brand);
      formData.append("sellerId", info.sellerId);
      info.images.forEach((images) => {
        formData.append("images", images);
      });

      const { data } = await axios.post(
        `http://localhost:5000/api/product/${info.sellerId}/add-product`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Product adicionado com sucesso!");

      set((state) => ({
        products: [...state.products, data.product],
      }));

      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getProducts: async () => {
    try {
      const { data } = await axios.get(endpoints.get_all_products, {
        withCredentials: true,
      });

      set({ products: data.data.products });

      return data.data.products;
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useProductStore;
