"use client";

import { format } from "date-fns";

import useCategory from "@/hooks/useCategory";

import CategoryClient from "./_components/client";
import { CategoryColumn } from "./_components/column";

const CategoriesPage = () => {
  const { categories } = useCategory();

  const formatedCategory: CategoryColumn[] = categories.map((item) => ({
    _id: item._id,
    name: item.name,
    image: item.image,
    createdAt: format(new Date(item.createdAt), "dd/MM/yyyy"),
  }));

  return (
    <main className="flex-col">
      <div className="flex-1 space-y-4 p-8">
        <CategoryClient data={formatedCategory} />
      </div>
    </main>
  );
};

export default CategoriesPage;
