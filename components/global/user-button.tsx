"use client";
import Link from "next/link";

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
import Avatar from "@/components/global/avatar";

interface IUserButton {
  avatar: string;
  role: string;
  email: string;
  href: string;
}

const UserButton: React.FC<IUserButton> = ({ avatar, role, email, href }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar src={avatar} alt="avatar user" width={40} height={40} />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 bg-white">
        <DropdownMenuLabel className="flex flex-col">
          {email}
          <span className="text-xs text-gray-400 lowercase">{role}</span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={href} className="w-full">
              Minha conta
            </Link>
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
