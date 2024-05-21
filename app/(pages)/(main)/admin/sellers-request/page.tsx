"use client";

import { useState } from "react";

import { BsEye } from "react-icons/bs";

import Search from "@/components/global/search";
import Pagination from "@/components/global/pagination";

const SellersRequestAdminPage = () => {
  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const sellers = [
    {
      id: 1,
      name: "Joe Doe",
      shopName: "Tanamao",
      status: "Pending",
      email: "email@exemplo.com",
    },
  ];

  return (
    <main className="px-4 md:px-8 py-4 space-y-8">
      <div className="w-full p-2 border rounded-md">
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
                  Seller ID
                </th>
                <th scope="col" className="py-3 px-4">
                  Email
                </th>
                <th scope="col" className="py-3 px-4">
                  Nome
                </th>
                <th scope="col" className="py-3 px-4">
                  Loja
                </th>
                <th scope="col" className="py-3 px-4">
                  Status
                </th>
                <th scope="col" className="py-3 px-4">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller) => (
                <tr key={seller.id} className="border-b">
                  <td
                    scope="col"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    {seller.id}
                  </td>
                  <td
                    scope="col"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    {seller.email}
                  </td>
                  <td
                    scope="col"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    {seller.name}
                  </td>
                  <td scope="col" className="py-3 px-4 font-medium">
                    {seller.shopName}
                  </td>
                  <td scope="col" className="py-3 px-4 font-medium">
                    {seller.status}
                  </td>
                  <td
                    scope="col"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <div className="flex gap-4">
                      <BsEye size={20} className="cursor-pointer" />
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

export default SellersRequestAdminPage;
