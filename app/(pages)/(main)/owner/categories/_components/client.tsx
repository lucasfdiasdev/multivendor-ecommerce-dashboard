"use client";

import { useRouter } from "next/navigation";

import { AiOutlinePlus } from "react-icons/ai";

import { Button } from "@/components/ui/button";

import Heading from "@/components/global/heading";
import { DepartamentColumn, columns } from "./column";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

interface IDepartment {
  data: DepartamentColumn[];
}

const DepartamentClient: React.FC<IDepartment> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categoria (${data.length})`}
          description="Adicionar categorias no marketplace"
        />
        <Button onClick={() => router.push(`/owner/categories/new`)}>
          <AiOutlinePlus size={20} className="mr-2 h-4 w-4" />
          Add Categoria
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="departament_name" columns={columns} data={data} />
    </>
  );
};

export default DepartamentClient;
