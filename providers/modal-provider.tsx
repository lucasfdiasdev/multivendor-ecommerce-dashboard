"use client";

import { useEffect, useState } from "react";

import { ModalStore } from "@/store/use-modal-store";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ModalStore />
    </>
  );
};
