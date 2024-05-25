import { useEffect } from "react";
import useCategoryStore from "@/store/use-category-store";

const useCategory = () => {
  const { categories, getCategories } = useCategoryStore((state) => ({
    categories: state.categories,
    getCategories: state.getCategories,
  }));

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const getCategory = () => categories;

  return { categories: getCategory() };
};

export default useCategory;
