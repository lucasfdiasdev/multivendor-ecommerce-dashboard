"use client";

import Image from "next/image";
import { useState } from "react";

import { CiEdit } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi";

import Search from "@/components/global/search";
import Pagination from "@/components/global/pagination";

const AllProductsSellerAdmin = () => {
  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

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
    <main className="px-4 md:px-8 py-4">
      <div className="w-full p-2 border rounded-md space-y-8">
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
                  Categoria
                </th>
                <th scope="col" className="py-3 px-4">
                  Brand
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Estoque
                </th>
                <th scope="col" className="py-3 px-4">
                  Estoque
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
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
                    {category.name}
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
    </main>
  );
};

export default AllProductsSellerAdmin;
