"use client";

import { format } from "date-fns";

import useDepartament from "@/hooks/useDepartament";

import CategoryClient from "./_components/client";
import { DepartamentColumn } from "./_components/column";

const CategoriesPage = () => {
  const { departaments } = useDepartament();

  const formatedDepartment: DepartamentColumn[] = departaments.map(
    (item: any) => ({
      _id: item._id,
      departament_name: item.departament_name,
      departament_image: item.departament_image,
      createdAt: format(new Date(item?.createdAt), "dd/MM/yyyy"),
    })
  );

  return (
    <main className="flex-col">
      <div className="flex-1 space-y-4 p-8">
        <CategoryClient data={formatedDepartment} />
      </div>
    </main>
  );
};

export default CategoriesPage;
