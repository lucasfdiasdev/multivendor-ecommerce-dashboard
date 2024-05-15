"use client";

import Image from "next/image";
import { useState } from "react";

import { CiEdit } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi";

import { Input } from "@/components/global/input";
import CategoryForm from "@/components/forms/category-form";

const CategoriesPage = () => {
  const [parPage, setParPage] = useState(5);

  const categories = [
    {
      id: 1,
      name: "Camisas",
      imageUrl:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Jaquetas",
      imageUrl:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <main className="px-4 md:px-8 py-4 gap-4 space-y-8">
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="flex-[2] p-2 border rounded-md">
          <div className="flex items-center justify-between">
            <select
              onChange={(e) => setParPage(parseInt(e.target.value))}
              className="px-4 py-2 hover:border-indigo-500 outline-none bg-transparent border rounded-md cursor-pointer"
            >
              <option value="5">5</option>
              <option value="5">15</option>
              <option value="5">25</option>
            </select>
            <Input
              type="text"
              placeholder="Buscar categorias"
              className="max-w-fit"
            />
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-sm uppercase border-b border-slate-700">
                <tr>
                  <th scope="col" className="py-3 px-4">
                    NO
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Nome
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Imagem
                  </th>
                  <th scope="col" className="py-3 px-4">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td
                      scope="col"
                      className="py-3 px-4 font-medium whitespace-nowrap"
                    >
                      {category.id}
                    </td>
                    <td
                      scope="col"
                      className="py-3 px-4 font-medium whitespace-nowrap"
                    >
                      {category.name}
                    </td>
                    <td scope="col" className="py-3 px-4 font-medium">
                      <Image
                        width={40}
                        height={40}
                        className="rounded-md object-cover object-center"
                        src={category.imageUrl}
                        alt={category.name}
                      />
                    </td>
                    <td
                      scope="col"
                      className="py-3 px-4 font-medium whitespace-nowrap"
                    >
                      <div className="flex gap-4">
                        <CiEdit size={24} className="cursor-pointer" />
                        <HiOutlineTrash size={24} className="cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-[1] p-2 border rounded-md">
          <h2 className="text-sm font-semibold mb-4">Adicionar Categoria</h2>

          <CategoryForm />
        </div>
      </div>
    </main>
  );
};

export default CategoriesPage;
