import { BsChatRightDots } from "react-icons/bs";

import { Input } from "@/components/global/input";
import UserButton from "@/components/global/user-button";
import MobileSidebar from "@/components/includes/sidebar/mobile-sidebar";

const HeaderDashboard = () => {
  return (
    <header className="flex items-center gap-4 p-4">
      <MobileSidebar />
      <div className="w-full gap-4 flex items-center md:justify-between">
        <Input placeholder="Buscar..." className="w-full md:max-w-fit" />

        <div className="md:w-full flex items-center gap-4 justify-end">
          <BsChatRightDots size={24} />

          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
