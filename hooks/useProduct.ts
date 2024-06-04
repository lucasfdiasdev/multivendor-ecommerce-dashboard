import { useEffect } from "react";
import useProductStore from "@/store/use-product-store";

const useProduct = () => {
  const { products, getProducts } = useProductStore((state) => ({
    products: state.products,
    getProducts: state.getProducts,
  }));

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const getProduct = () => products;

  return { products: getProduct() };
};

export default useProduct;
