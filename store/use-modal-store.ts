import { create } from "zustand";

interface IModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ModalStore = create<IModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
