"use client";

import { useState } from "react";

import { MdClose } from "react-icons/md";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const SellersChatAdminPage = () => {
  const [show, setShow] = useState(false);
  const sellerId = 1;

  const sellersChat = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sheikh Farid",
      message: "hello, how are u ?",
    },
  ];

  return (
    <main className="px-4 md:px-8 py-4 gap-4 space-y-8">
      <div className="w-full p-4 rounded-md border h-[calc(100vh-120px)]">
        <div className="flex w-full h-full relative">
          {/* left */}
          <div
            className={cn(
              "w-[280px] border-r h-full absolute z-10 md:left-0 md:relative transition-all",
              show ? "-left-[16px]" : "-[336px]"
            )}
          >
            <div className="w-full h-[calc(100vh-150px)] overflow-y-auto">
              <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3">
                <h2>Sellers</h2>
                <span
                  onClick={() => setShow(!show)}
                  className="block cursor-pointer md:hidden"
                >
                  <MdClose />
                </span>
              </div>
              {sellersChat.map((seller) => (
                <div
                  key={seller.id}
                  className={cn(
                    "h-16 flex justify-start gap-2 items-center p-2 rounded-tl-sm rounded-bl-sm cursor-pointer bg-slate-200"
                  )}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage
                        width={60}
                        height={60}
                        src={seller.imageUrl}
                        alt="Avatar name"
                      />
                    </Avatar>
                    <div className="absolute rounded-full w-2.5 h-2.5 right-0 bottom-0 bg-green-500"></div>
                  </div>
                  <div className="flex justify-center items-start flex-col w-full">
                    <div className="flex justify-between items-center w-full">
                      <h2 className="text-base font-semibold">{seller.name}</h2>
                    </div>
                    <span className="text-sm">{seller.message}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className="w-full md:w-[calc(100%-200px)] md:pl-4">
            <div className="flex justify-between items-center">
              {sellerId && (
                <div className="flex justify-center items-center gap-4">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage
                        width={40}
                        height={40}
                        src={
                          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        alt="Avatar name"
                      />
                    </Avatar>
                    <div className="absolute rounded-full w-2.5 h-2.5 right-0 bottom-0 bg-green-500"></div>
                  </div>
                </div>
              )}
            </div>
            <div className="py-4">
              <div className="border h-[calc(100vh-280px)] p-3 rounded-md overflow-y-auto">
                {/* left */}
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex justify-center items-start flex-col w-fit bg-slate-600 text-white py-1 px-3 rounded-sm">
                      <span className="text-base">How are you?</span>
                    </div>
                  </div>
                </div>
                {/* right */}
                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex justify-center items-start flex-col w-fit bg-rose-500 text-white py-1 px-3 rounded-sm">
                      <span className="text-base">Im fine</span>
                    </div>
                  </div>
                </div>

                {/* left */}
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex justify-center items-start flex-col w-fit bg-slate-600 text-white py-1 px-3 rounded-sm">
                      <span className="text-base">Ok</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="flex items-center gap-4">
              <Input placeholder="Escreva uma mensagem"></Input>
              <Button type="submit">Enviar</Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SellersChatAdminPage;
