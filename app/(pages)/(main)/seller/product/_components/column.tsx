"use client";

import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";

import DepartamentCellAction from "./cell-action";

export type ProductColumn = {
  _id: string;
  product_brand: string;
  product_stock: string;
  product_price: string;
  product_discount: string;
  departament: string;
  product_name: string;
  product_image: string;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    header: "Imagem",
    cell: ({ row }) => (
      <Image
        src={row.original.product_image}
        alt={row.original.product_name}
        width={30}
        height={30}
        className="rounded-md object-cover object-center"
      />
    ),
  },
  {
    accessorKey: "product_name",
    header: "Nome",
  },
  {
    accessorKey: "departament",
    header: "Categoria",
  },
  {
    accessorKey: "product_brand",
    header: "Marca",
  },
  {
    accessorKey: "product_stock",
    header: "Estoque",
  },
  {
    accessorKey: "product_discount",
    header: "Desconto",
  },
  {
    accessorKey: "product_price",
    header: "Preço",
  },
  {
    accessorKey: "createdAt",
    header: "Data",
  },
  {
    id: "actions",
    cell: ({ row }) => <DepartamentCellAction data={row.original} />,
  },
];
