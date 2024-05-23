"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import useUser from "@/hooks/useUser";

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
  status?: string;
  visibility?: string[];
}
const routes: IRoute[] = [
  {
    label: "Dashboard",
    icon: AiOutlineHome,
    href: "/owner/dashboard",
    role: "owner",
    status: "active",
  },
  {
    label: "Ordens",
    icon: FaClipboardList,
    href: "/owner/orders",
    role: "owner",
    status: "active",
  },
  {
    label: "Categoria",
    icon: MdDashboard,
    href: "/owner/categories",
    role: "owner",
    status: "active",
  },
  {
    label: "Vendedores",
    icon: FaUsers,
    href: "/owner/sellers",
    role: "owner",
    status: "active",
  },
  {
    label: "Pagamentos Recebidos",
    icon: MdAttachMoney,
    href: "/owner/payments-request",
    role: "owner",
    status: "active",
  },
  {
    label: "Vendedores Inativos",
    icon: FaUsersSlash,
    href: "/owner/sellers-deactive",
    role: "owner",
    status: "active",
  },
  {
    label: "Solicitação de Vendedores",
    icon: FaUserClock,
    href: "/owner/sellers-request",
    role: "owner",
    status: "active",
  },
  {
    label: "Chat Vendedores",
    icon: BsChatRightDots,
    href: "/owner/sellers-chat",
    role: "owner",
    status: "active",
    visibility: ["active", "pending", "deactive"],
  },

  // seller routes
  {
    label: "Dashboard",
    icon: AiOutlineHome,
    href: "/seller/dashboard",
    role: "seller",
    status: "active",
  },
  {
    label: "Adicionar Produtos",
    icon: BsBagPlus,
    href: "/seller/add-product",
    role: "seller",
    status: "active",
  },
  {
    label: "Todos os produtos",
    icon: AiOutlineProduct,
    href: "/seller/all-products",
    role: "seller",
    status: "active",
  },
  {
    label: "Descontos de produtos",
    icon: CiDiscount1,
    href: "/seller/discount-products",
    role: "seller",
    status: "active",
  },
  {
    label: "Ordens",
    icon: FaClipboardList,
    href: "/seller/orders",
    role: "seller",
    visibility: ["active", "deactive"],
  },
  {
    label: "Pagamentos",
    icon: MdAttachMoney,
    href: "/seller/payments",
    role: "seller",
    status: "active",
  },
  {
    label: "Chat Suporte",
    icon: BsChatRightDots,
    href: "/seller/support-chat",
    role: "seller",
    status: "active",
    visibility: ["active", "pending", "deactive"],
  },
  {
    label: "Chat Compradores",
    icon: BsChatRightDots,
    href: "/seller/costumers-chat",
    role: "seller",
    status: "active",
    visibility: ["active", "deactive"],
  },
];

const Sidebar = () => {
  const { user } = useUser();
  const pathname = usePathname();
  const userStatus = user?.status;
  const userPayment = user?.payment;

  const userRole = user?.role;

  const [allNav, setAllNav] = useState<IRoute[]>([]);

  useEffect(() => {
    const filteredRoutes = routes.filter((route) => {
      // Inclui a rota se ela não tiver uma propriedade role
      if (!route.role) return true;

      if (userRole === "owner" && route.role === "owner") return true;

      // verifica se o role nao corresponde ao role do usuario
      if (route.role !== userRole) return false;

      if (route.visibility) {
        return route.visibility.includes(userStatus);
      }

      return route.status ? route.status === userStatus : true;
    });

    setAllNav(filteredRoutes);
  }, [userRole, userStatus]);

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
