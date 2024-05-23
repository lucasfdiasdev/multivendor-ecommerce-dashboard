"use client";

import { useEffect } from "react";

import useAdminStore from "@/store/use-admin-store";
import { useSellerStore } from "@/store/use-seller-store";

const useUser = () => {
  const { user: adminUser, setUser: setAdminUser } = useAdminStore(
    (state: any) => ({
      user: state.user,
      setUser: state.setUser,
    })
  );

  const { user: sellerUser, setUser: setSellerUser } = useSellerStore(
    (state: any) => ({
      user: state.user,
      setUser: state.setUser,
    })
  );

  const user = adminUser || sellerUser;
  const setUser = adminUser ? setAdminUser : setSellerUser;

  useEffect(() => {
    const storedUser = localStorage.getItem("nextauth.store");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser).state.user;
      setUser(parsedUser);
    }
  }, [setUser]);

  const getUser = () => user;

  const setUserAndStore = (newUser: any) => {
    setUser(newUser);
    localStorage.setItem(
      "nextauth.store",
      JSON.stringify({ state: { user: newUser } })
    );
  };

  return { user: getUser(), setUser: setUserAndStore };
};

export default useUser;
