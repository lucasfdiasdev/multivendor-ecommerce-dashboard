"use client";

import { MdAttachMoney } from "react-icons/md";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CardItem from "@/components/dashboard/card-item";
import CardContentSales from "@/components/dashboard/card-content-sales";

const PaymentsSellerPage = () => {
  const bodyContentSales = <CardContentSales change={20.9} amount={8930.63} />;
  const bodyContentProducts = <CardContentSales amount={80.57} />;
  const bodyContentWithdrawal = <CardContentSales amount={32.69} />;
  const bodyContentPending = <CardContentSales amount={0} />;

  const amount = [
    {
      id: 1,
      amount: "65,80",
      status: "pending",
      date: "20/09/2021",
    },
  ];

  return (
    <main className="px-4 md:px-8 py-4 space-y-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CardItem
          title="Total de Vendas"
          bodyContent={bodyContentSales}
          icon={MdAttachMoney}
        />
        <CardItem
          title="Quantidade Disponível"
          icon={MdAttachMoney}
          bodyContent={bodyContentProducts}
        />
        <CardItem
          title="Quantidade Retirada"
          icon={MdAttachMoney}
          bodyContent={bodyContentWithdrawal}
        />
        <CardItem
          title="Valor Pendente"
          icon={MdAttachMoney}
          bodyContent={bodyContentPending}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 border rounded-md p-2">
          <div className="w-full p-2 space-y-8">
            <div className="space-y-4">
              <h2>Send Request</h2>
              <form className="flex items-center gap-4">
                <Input min={0} type="number" name="amount" placeholder="0" />
                <Button type="submit">Enviar</Button>
              </form>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-sm uppercase border-b border-slate-700">
                  <tr>
                    <th scope="col" className="py-3 px-4">
                      NO
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Amount
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Status
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {amount.map((amount) => (
                    <tr key={amount.id}>
                      <td
                        scope="col"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        {amount.id}
                      </td>
                      <td
                        scope="col"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        {amount.amount}
                      </td>
                      <td
                        scope="col"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        {amount.status}
                      </td>
                      <td
                        scope="col"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        {amount.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex-1 border rounded-md p-2">
          <div className="w-full p-2 space-y-8">
            <div className="space-y-4">
              <h2>Success Widrow</h2>
              <div>
                <table className="w-full text-sm text-left">
                  <thead className="text-sm uppercase border-b border-slate-700">
                    <tr>
                      <th scope="col" className="py-3 px-4">
                        NO
                      </th>
                      <th scope="col" className="py-3 px-4">
                        Amount
                      </th>
                      <th scope="col" className="py-3 px-4">
                        status
                      </th>
                      <th scope="col" className="py-3 px-4">
                        Data
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {amount.map((amount) => (
                      <tr key={amount.id}>
                        <td
                          scope="col"
                          className="py-3 px-4 font-medium whitespace-nowrap"
                        >
                          {amount.id}
                        </td>

                        <td
                          scope="col"
                          className="py-3 px-4 font-medium whitespace-nowrap"
                        >
                          R$ {amount.amount}
                        </td>
                        <td
                          scope="col"
                          className="py-3 px-4 font-medium whitespace-nowrap"
                        >
                          {amount.status}
                        </td>
                        <td
                          scope="col"
                          className="py-3 px-4 font-medium whitespace-nowrap"
                        >
                          {amount.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentsSellerPage;
