"use client";

import Avatar from "@/components/global/avatar";
import { Button } from "@/components/global/button";

const SellerIdAdminPage = () => {
  return (
    <main className="px-4 md:px-8 py-4 gap-4 space-y-8">
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="flex-1 h-full border p-2 rounded-md">
          <div className="flex flex-col gap-4 items-center justify-center my-12">
            <Avatar
              width={160}
              height={160}
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Avatar name"
            />
            <div className="w-80 flex flex-col items-start border p-2 rounded-md space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <label htmlFor="">Nome:</label>
                <label htmlFor="">Joe doe</label>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <label htmlFor="">Email:</label>
                <label htmlFor="">email@exemplo.com</label>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <label htmlFor="">Role:</label>
                <label htmlFor="">admin</label>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <label htmlFor="">Status:</label>
                <label htmlFor="">Ativo</label>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <label htmlFor="">Payment Account:</label>
                <label htmlFor="">Ativo</label>
              </div>
            </div>
            <div className="flex items-center justify-between w-80">
              <select
                onChange={() => {
                  ("");
                }}
                className="px-4 py-2 hover:border-indigo-500 outline-none bg-transparent border rounded-md cursor-pointer"
              >
                <option value="">-- select status --</option>
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
              </select>
              <Button>Enviar</Button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-80 flex flex-col items-start border p-2 rounded-md space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <label htmlFor="">Shop Name:</label>
              <label htmlFor="">Tanamao</label>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <label htmlFor="">Divission:</label>
              <label htmlFor="">Brazil</label>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <label htmlFor="">District:</label>
              <label htmlFor="">Dhaka</label>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <label htmlFor="">Uploja:</label>
              <label htmlFor="">Ativo</label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SellerIdAdminPage;
