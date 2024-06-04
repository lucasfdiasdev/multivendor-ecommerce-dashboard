import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  name: string;
  email: string;
  role: string;
  status: string;
  method: string;
  imageUrl: string;
};

export interface IUserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

const useUserStore = create<IUserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => {
        set({ user });
      },
    }),
    {
      name: "nextauth.store",
    }
  )
);

export default useUserStore;
