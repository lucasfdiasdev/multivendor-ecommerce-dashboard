"use client";

import { useState } from "react";

import Search from "@/components/global/search";
import Pagination from "@/components/global/pagination";

const PaymentsRequestPage = () => {
  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  return (
    <main className="px-4 md:px-8 py-4 space-y-8">
      <div className="w-full p-2 border rounded-md">
        <Search
          placeholder="Buscar em pagamentos..."
          searchValue={searchValue}
          setParPage={setParPage}
          setSearchValue={setSearchValue}
        />
        <div className="relative mt-4 overflow-x-auto">
          <div className="w-full text-sm text-left">
            <div className="text-sm uppercase border-b">
              <div className="flex justify-between items-start">
                <div className="py-3 w-[25%]">Payment ID</div>
                <div className="py-3 w-[13%]">Amount</div>
                <div className="py-3 w-[18%]">Status</div>
                <div className="py-3 w-[18%]">Data</div>
                <div className="py-3 w-[18%]">ACTION</div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-start border-b">
                <div className="py-4 w-[25%] font-medium">
                  #eec2wa3d2a15487w12
                </div>
                <div className="py-4 w-[13%] font-medium">R$ 655,93</div>
                <div className="py-4 w-[18%] font-medium">pending</div>
                <div className="py-4 w-[18%] font-medium">31, mai de 2024</div>
                <div className="py-4 w-[18%] font-medium">
                  <button className="bg-blue-500 hover:bg-blue-600 py-1 px-3 rounded-md text-white font-semibold">
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
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

export default PaymentsRequestPage;
