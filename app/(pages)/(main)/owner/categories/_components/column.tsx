"use client";

import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";

import CategoryCellAction from "./cell-action";

export type CategoryColumn = {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
};

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "image",
    header: "Imagem",
    cell: ({ row }) => (
      <Image
        src={row.original.image}
        alt={row.original.name}
        width={30}
        height={30}
        className="rounded-md object-cover object-center"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "createdAt",
    header: "Data",
  },
  {
    id: "actions",
    cell: ({ row }) => <CategoryCellAction data={row.original} />,
  },
];
