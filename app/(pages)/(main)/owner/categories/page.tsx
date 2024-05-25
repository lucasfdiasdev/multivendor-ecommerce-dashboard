"use client";

import Image from "next/image";
import { useState } from "react";

import { CiEdit } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi";

import useCategory from "@/hooks/useCategory";

import Search from "@/components/global/search";
import Pagination from "@/components/global/pagination";
import CategoryForm from "@/components/forms/category-form";

const CategoriesPage = () => {
  const { categories } = useCategory();

  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  console.log(categories);

  return (
    <main className="px-4 md:px-8 py-4 gap-4">
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="flex-[2] p-2 border rounded-md">
          <Search
            placeholder="Buscar em vendedores..."
            searchValue={searchValue}
            setParPage={setParPage}
            setSearchValue={setSearchValue}
          />
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-sm uppercase border-b border-slate-700">
                <tr>
                  <th scope="col" className="py-3 px-4">
                    NO
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Imagem
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Nome
                  </th>
                  <th scope="col" className="py-3 px-4">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(categories) && categories.length > 0 ? (
                  categories.map((category: any, index: number) => (
                    <tr key={index}>
                      <td
                        scope="col"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        {category._id}
                      </td>
                      <td scope="col" className="py-3 px-4 font-medium">
                        <Image
                          width={40}
                          height={40}
                          className="rounded-md object-cover object-center"
                          src={category.image}
                          alt={category.name}
                        />
                      </td>
                      <td
                        scope="col"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        {category.name}
                      </td>
                      <td
                        scope="col"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        <div className="flex gap-4">
                          <CiEdit size={24} className="cursor-pointer" />
                          <HiOutlineTrash
                            size={24}
                            className="cursor-pointer"
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center py-3 px-4">
                      Nenhuma categoria encontrada.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4 bottom-4 right-4">
            <Pagination
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
              totalItem={50}
              parPage={parPage}
              showItem={3}
            />
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
