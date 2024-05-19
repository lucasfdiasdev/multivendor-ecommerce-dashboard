"use client";

import Link from "next/link";
import { useState } from "react";

import { BsArrowBarDown } from "react-icons/bs";

import { Input } from "@/components/global/input";
import Pagination from "@/components/global/pagination";

const OrdersPage = () => {
  const [show, setShow] = useState(false);
  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

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
        <div className="relative mt-4 overflow-x-auto">
          <div className="w-full text-sm text-left">
            <div className="text-sm uppercase border-b">
              <div className="flex justify-between items-start">
                <div className="py-3 w-[25%]">Order Id</div>
                <div className="py-3 w-[13%]">Price</div>
                <div className="py-3 w-[18%]">Payment Status</div>
                <div className="py-3 w-[18%]">Order Status</div>
                <div className="py-3 w-[18%]">Active</div>
                <div className="py-3 w-[8%]">
                  <BsArrowBarDown />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-start border-b">
                <div className="py-4 w-[25%] font-medium">
                  #eec2wa3d2a15487w12
                </div>
                <div className="py-4 w-[13%] font-medium">R$ 655,93</div>
                <div className="py-4 w-[18%] font-medium">pending</div>
                <div className="py-4 w-[18%] font-medium">pending</div>
                <div className="py-4 w-[18%] font-medium">
                  <Link href={"/orders/1"}>View</Link>
                </div>
                <div
                  className="py-4 w-[8%] font-medium cursor-pointer"
                  onClick={(e) => setShow(!show)}
                >
                  <BsArrowBarDown />
                </div>
              </div>
              {/* dropdown state */}
              <div className={show ? "block border-b" : "hidden"}>
                <div className="flex justify-start items-start">
                  <div className="py-4 px-4 w-[25%] font-medium">
                    #eec2wa3d2a15487w12
                  </div>
                  <div className="py-4 w-[13%] font-medium">R$ 655,93</div>
                  <div className="py-4 w-[18%] font-medium">pending</div>
                  <div className="py-4 w-[18%] font-medium">pending</div>
                </div>

                <div className="flex justify-start items-start">
                  <div className="py-4 px-4 w-[25%] font-medium">
                    #eec2wa3d2a15487w12
                  </div>
                  <div className="py-4 w-[13%] font-medium">R$ 655,93</div>
                  <div className="py-4 w-[18%] font-medium">pending</div>
                  <div className="py-4 w-[18%] font-medium">pending</div>
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

export default OrdersPage;
