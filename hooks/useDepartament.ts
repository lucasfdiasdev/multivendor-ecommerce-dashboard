import { useEffect } from "react";
import useCategoryStore from "@/store/use-category-store";

const useDepartament = () => {
  const { departaments, getDepartaments } = useCategoryStore((state) => ({
    departaments: state.departaments,
    getDepartaments: state.getDepartaments,
  }));

  useEffect(() => {
    getDepartaments();
  }, [getDepartaments]);

  const getDepartament = () => departaments;

  return { departaments: getDepartament() };
};

export default useDepartament;
