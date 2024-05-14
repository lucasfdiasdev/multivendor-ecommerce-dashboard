"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/global/dropdown-menu";

const UserButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          width={40}
          height={40}
          src={""}
          alt="Avatar image"
          className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border cursor-pointer"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          lucasferndias@gmail.com
          <span className="text-xs text-gray-400">admin</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Minha Loja
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Minha conta
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            logout
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
