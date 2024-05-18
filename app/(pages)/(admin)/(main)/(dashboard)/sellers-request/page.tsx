"use client";

import { useState } from "react";

import { BsEye } from "react-icons/bs";

import { Input } from "@/components/global/input";
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
            placeholder="Buscar em orders"
            className="max-w-fit"
          />
        </div>

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
