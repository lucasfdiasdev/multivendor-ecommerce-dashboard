"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  FaUsers,
  FaUserClock,
  FaUsersSlash,
  FaClipboardList,
} from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { PiTeaBag } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";
import { MdDashboard, MdAttachMoney } from "react-icons/md";
import { BsBagPlus, BsChatRightDots } from "react-icons/bs";
import { AiOutlineHome, AiOutlineProduct } from "react-icons/ai";

interface IRoute {
  label: string;
  icon: React.ElementType;
  href: string;
  role?: string;
}

const routes: IRoute[] = [
  {
    label: "Dashboard",
    icon: AiOutlineHome,
    href: "/dashboard",
    role: "ADMIN",
  },
  {
    label: "Ordens",
    icon: FaClipboardList,
    href: "/orders",
    role: "ADMIN",
  },
  {
    label: "Categoria",
    icon: MdDashboard,
    href: "/categories",
    role: "ADMIN",
  },
  {
    label: "Vendedores",
    icon: FaUsers,
    href: "/sellers",
    role: "ADMIN",
  },
  {
    label: "Pagamentos Recebidos",
    icon: MdAttachMoney,
    href: "/payments-request",
    role: "ADMIN",
  },
  {
    label: "Vendedores Inativos",
    icon: FaUsersSlash,
    href: "/sellers-inactive",
    role: "ADMIN",
  },
  {
    label: "Solicitação de Vendedores",
    icon: FaUserClock,
    href: "/sellers-request",
    role: "ADMIN",
  },
  {
    label: "Chat Vendedores",
    icon: BsChatRightDots,
    href: "/sellers-chat",
    role: "ADMIN",
  },

  // seller routes
  {
    label: "Dashboard",
    icon: AiOutlineHome,
    href: "/seller/dashboard",
    role: "SELLER",
  },
  {
    label: "Adicionar Produtos",
    icon: BsBagPlus,
    href: "/seller/add-product",
    role: "SELLER",
  },
  {
    label: "Todos os produtos",
    icon: AiOutlineProduct,
    href: "/seller/all-products",
    role: "SELLER",
  },
  {
    label: "Descontos de produtos",
    icon: CiDiscount1,
    href: "/seller/discount-products",
    role: "SELLER",
  },
  {
    label: "Ordens",
    icon: FaClipboardList,
    href: "/seller/orders",
    role: "SELLER",
  },
  {
    label: "Pagamentos",
    icon: MdAttachMoney,
    href: "/seller/payments",
    role: "SELLER",
  },
  {
    label: "Chat Suporte",
    icon: BsChatRightDots,
    href: "/seller/support-chat",
    role: "SELLER",
  },
  {
    label: "Chat Compradores",
    icon: BsChatRightDots,
    href: "/seller/costumers-chat",
    role: "SELLER",
  },
];

const getUserRole = () => {
  return "ADMIN";
};

const Sidebar = () => {
  const pathname = usePathname();
  const [allNav, setAllNav] = useState<IRoute[]>([]);

  useEffect(() => {
    const roles = getUserRole();
    const filteredRoutes = routes.filter((route) => {
      if (!route.role) return true;
      if (roles.includes(route.role)) return true;
      if (roles.includes("ADMIN") && route.role === "SELLER") return true;
      return false;
    });
    setAllNav(filteredRoutes);
  }, []);

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white overflow-y-auto">
      <div className="px-3 py-2 flex-1">
        <div className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <PiTeaBag size={40} />
          </div>
          <h1 className="text-2xl font-bold">MarketPlace</h1>
        </div>
        <div className="space-y-1">
          {allNav.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={clsx(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center">
                <route.icon className="h-5 w-5 mr-3" />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        <div className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">
          <div className="flex items-center">
            <LuLogOut className="h-5 w-5 mr-3" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
