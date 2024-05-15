"use client";

import { MdAttachMoney } from "react-icons/md";
import { FaClipboardList, FaCubes, FaUsers } from "react-icons/fa";

import Chart from "react-apexcharts";
import Card from "@/components/global/card";
import CardContentSales from "@/components/dashboard/card-content-sales";
import Link from "next/link";
import Image from "next/image";
import Avatar from "@/components/global/avatar";

const DashboardAdminPage = () => {
  const bodyContentSales = <CardContentSales change={20.9} amount={8930.63} />;
  const bodyContentProducts = (
    <h2 className="text-xl md:text-2xl font-semibold">6</h2>
  );
  const bodyContentSellers = (
    <h2 className="text-xl md:text-2xl font-semibold">5</h2>
  );
  const bodyContentOrders = (
    <h2 className="text-xl md:text-2xl font-semibold">20</h2>
  );

  const state = {
    options: {
      colors: ["#181ee8", "#f00a00"],
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: ["#f0f0f0"],
        width: 5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ],
      },
      legend: {
        position: "top" as const,
      },
      responsive: [
        {
          breakpoint: 565,
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: 550,
            },
            yaxis: {
              categories: [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez",
              ],
            },
          },
        },
      ],
    },
    series: [
      {
        name: "Ordens",
        data: [34, 65, 343, 65, 35, 34, 56, 23, 67, 45, 12],
      },
      {
        name: "Revenue",
        data: [350, 69, 41, 698, 230, 36, 59, 230, 207, 215, 132],
      },
      {
        name: "Sellers",
        data: [79, 81, 368, 3620, 1235, 3547, 601, 269, 266, 515, 232],
      },
    ],
  };

  return (
    <main className="px-4 md:px-8 py-4 space-y-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card
          title="Total de Vendas"
          bodyContent={bodyContentSales}
          icon={MdAttachMoney}
        />
        <Card
          title="Produtos"
          icon={FaCubes}
          bodyContent={bodyContentProducts}
        />
        <Card
          title="Vendedores"
          icon={FaUsers}
          bodyContent={bodyContentSellers}
        />
        <Card
          title="Ordens"
          icon={FaClipboardList}
          bodyContent={bodyContentOrders}
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full flex-[2] p-2 border rounded-md">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width={"100%"}
            height={350}
          />
        </div>
        <div className="w-full flex-[1] p-4 border rounded-md">
          <div className="flex items-center justify-between">
            <h2>Messagens Recentes</h2>
            <Link
              href={"/chat-sellers"}
              className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
            >
              Ver Todas
            </Link>
          </div>

          <div className="flex flex-col gap-2 pt-6">
            <ol className="relative border-1 border-slate-600 ml-4">
              <li className="mb-4 ml-10">
                <div className="flex absolute -left-6 p-[6px] z-10">
                  <Avatar src="" alt="" width={32} height={32} />
                </div>
                <div className="p-2 border rounded-md border-slate-600">
                  <div className="flex items-center justify-between mb-2">
                    <Link href={"/"} className="text-base">
                      Admin
                    </Link>
                    <time className="mb-1 text-sm font-normal sm:order-last sm:mb-2">
                      4 day ago
                    </time>
                  </div>
                  <div className="p-2 text-xs font-normal border border-slate-800 rounded-md">
                    How are you?
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="w-full p-4 border rounded-md">
        <div className="flex justify-between items-center">
          <h2>Recent seller message</h2>
          <Link
            href={"/seller-message"}
            className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
          >
            Ver Todas
          </Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-sm uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Active
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  scope="col"
                  className="py-3 px-4 font-medium whitespace-nowrap"
                >
                  #45fas65879aeccqq265
                </td>
                <td
                  scope="col"
                  className="py-3 px-4 font-medium whitespace-nowrap"
                >
                  R$ 655,93
                </td>
                <td
                  scope="col"
                  className="py-3 px-4 font-medium whitespace-nowrap"
                >
                  <span className="">pending</span>
                </td>
                <td
                  scope="col"
                  className="py-3 px-4 font-medium whitespace-nowrap"
                >
                  <span className="">pending</span>
                </td>
                <td
                  scope="col"
                  className="py-3 px-4 font-medium whitespace-nowrap"
                >
                  <Link href={"/"}>View</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default DashboardAdminPage;
