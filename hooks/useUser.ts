"use client";

import { useEffect } from "react";

import useAdminStore from "@/store/use-admin-store";
import { useSellerStore } from "@/store/use-seller-store";

export type User = {
  userId: string;
  name: string;
  email: string;
  role: string;
  status: string;
  method: string;
  imageUrl: string;
};

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

  // Função para pegar o userId
  const getUserId = () => (user ? user.userId : null);

  return { user: getUser(), setUser: setUserAndStore, getUserId };
};

export default useUser;
