import { FiMenu } from "react-icons/fi";

import Sidebar from "@/components/includes/sidebar";
import { Button } from "@/components/global/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/global/sheet";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <FiMenu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
