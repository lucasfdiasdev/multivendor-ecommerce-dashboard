"use client";

import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";

import DepartamentCellAction from "./cell-action";

export type DepartamentColumn = {
  _id: string;
  departament_name: string;
  departament_image: string;
  createdAt: string;
};

export const columns: ColumnDef<DepartamentColumn>[] = [
  {
    accessorKey: "departament_image",
    header: "Imagem",
    cell: ({ row }) => (
      <Image
        src={row.original.departament_image}
        alt={row.original.departament_name}
        width={30}
        height={30}
        className="rounded-md object-cover object-center"
      />
    ),
  },
  {
    accessorKey: "departament_name",
    header: "Nome",
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
