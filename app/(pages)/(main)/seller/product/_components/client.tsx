"use client";

import { useRouter } from "next/navigation";
import { AiOutlinePlus } from "react-icons/ai";

import { Button } from "@/components/ui/button";
import { ProductColumn, columns } from "./column";
import Heading from "@/components/global/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

interface IProduct {
  data: ProductColumn[];
}

const ProductClient: React.FC<IProduct> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Meus Produtos (${data.length})`}
          description="Adicionar categorias no marketplace"
        />
        <Button onClick={() => router.push(`/seller/product/new`)}>
          <AiOutlinePlus size={20} className="mr-2 h-4 w-4" />
          Novo Produto
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="product_name" columns={columns} data={data} />
    </>
  );
};

export default ProductClient;
