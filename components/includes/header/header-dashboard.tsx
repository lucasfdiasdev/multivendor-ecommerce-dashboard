"use client";

import { BsChatRightDots } from "react-icons/bs";

import useUser from "@/hooks/useUser";

import { Input } from "@/components/ui/input";
import UserButton from "@/components/global/user-button";
import MobileSidebar from "@/components/includes/sidebar/mobile-sidebar";

const HeaderDashboard = () => {
  const { user } = useUser();

  return (
    <header className="flex items-center gap-4 px-4 md:px-8 py-4">
      <MobileSidebar />
      <div className="w-full gap-4 flex items-center justify-between">
        <div className="w-full flex items-center gap-4 justify-end">
          <BsChatRightDots size={24} />

          <UserButton
            email={user?.email || ""}
            avatar={user?.imageUrl || "/user.jpg"}
            role={user?.role || ""}
            href={`/${user?.role}/profile`}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
