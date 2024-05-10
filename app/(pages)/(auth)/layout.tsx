import HeaderAuth from "@/components/includes/header/header-auth";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderAuth />
      <div className="min-h-screen flex items-center justify-center bg-[#161d31]">
        <div className="p-4 w-[25rem] text-[#d0d2d6]">{children}</div>
      </div>
    </>
  );
};

export default AuthLayout;
