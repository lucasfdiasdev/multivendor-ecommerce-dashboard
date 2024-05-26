"use client";

import { ColumnDef } from "@tanstack/react-table";

import CategoryCellAction from "./cell-action";

export type CategoryColumn = {
  _id: string;
  name: string;
  createdAt: string;
};

export const columns: ColumnDef<CategoryColumn>[] = [
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
