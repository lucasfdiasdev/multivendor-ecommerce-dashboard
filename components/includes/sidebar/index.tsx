"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LuLogOut } from "react-icons/lu";
import { PiTeaBag } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { BsChatRightDots } from "react-icons/bs";
import { MdDashboard, MdAttachMoney } from "react-icons/md";
import {
  FaClipboardList,
  FaUserClock,
  FaUsers,
  FaUsersSlash,
} from "react-icons/fa";
import { useEffect, useState } from "react";

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
    label: "Dashboard",
    icon: AiOutlineHome,
    href: "/seller/dashboard",
    role: "SELLER",
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
  },
  {
    label: "Pagamentos Recebidos",
    icon: MdAttachMoney,
    href: "/payments-request",
  },
  {
    label: "Vendedores Inativos",
    icon: FaUsersSlash,
    href: "/inactive-sellers",
  },
  {
    label: "Solicitação de Vendedores",
    icon: FaUserClock,
    href: "/categoria",
  },
  {
    label: "Chat Seller",
    icon: BsChatRightDots,
    href: "/categoria",
  },
];

const getUserRole = () => {
  return "ADMIN";
};

const Sidebar = () => {
  const pathname = usePathname();
  const [allNav, setAllNav] = useState<IRoute[]>([]);

  useEffect(() => {
    const role = getUserRole();
    const filteredRoutes = routes.filter(
      (route) => !route.role || route.role === role
    );
    setAllNav(filteredRoutes);
  }, []);

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <div className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <PiTeaBag size={40} />
          </div>
          <h1 className="text-2xl font-bold">MarketPlace</h1>
        </div>
        <div className="space-y-1 overflow-y-auto">
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
