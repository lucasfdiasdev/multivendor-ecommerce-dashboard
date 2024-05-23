"use client";

import { FaUser } from "react-icons/fa";
import { BsChatRightDots } from "react-icons/bs";

import useUser from "@/hooks/useUser";

import { Input } from "@/components/global/input";
import UserButton from "@/components/global/user-button";
import MobileSidebar from "@/components/includes/sidebar/mobile-sidebar";

const HeaderDashboard = () => {
  const { user } = useUser();

  return (
    <header className="flex items-center gap-4 px-4 md:px-8 py-4">
      <MobileSidebar />
      <div className="w-full gap-4 flex items-center md:justify-between">
        <Input placeholder="Buscar..." className="w-full md:max-w-fit" />

        <div className="md:w-full flex items-center gap-4 justify-end">
          <BsChatRightDots size={24} />

          {user?.imageUrl ? (
            <UserButton
              email={user?.email || ""}
              avatar={user.imageUrl || ""}
              role={user?.role || ""}
            />
          ) : (
            <FaUser size={24} />
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
