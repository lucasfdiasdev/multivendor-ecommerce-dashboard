"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import useUser from "@/hooks/useUser";

import Sidebar from "@/components/includes/sidebar";
import HeaderDashboard from "@/components/includes/header/header-dashboard";

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useUser();
  const pathname = usePathname();

  const userRole = user?.role;

  // Verificar acesso ao carregar o componente
  useEffect(() => {
    // se o usuario nao for owner sera redirecionado para seller/dashboard
    if (userRole === "seller" && pathname === "/admin/dashboard") {
      router.push(`/${userRole}/dashboard`);

      // se o usuario for owner sera redirecionado para owner/dashboard
    } else if (userRole === "owner" && pathname === "/seller/dashboard") {
      router.push(`/${userRole}/dashboard`);
    }
  }, [userRole, router, pathname]);

  return (
    <>
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 md:w-72 z-[80] bg-gray-900">
          <Sidebar />
        </div>
        <main className="md:pl-72">
          <div>
            <HeaderDashboard />
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default LayoutDashboard;
