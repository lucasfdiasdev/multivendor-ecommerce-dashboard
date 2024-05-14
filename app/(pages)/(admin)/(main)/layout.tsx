import HeaderDashboard from "@/components/includes/header/header-dashboard";
import Sidebar from "@/components/includes/sidebar";

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
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
  );
};

export default LayoutDashboard;
