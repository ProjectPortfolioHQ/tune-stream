"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const MenuBar = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="flex space-x-6 px-5 h-14 items-center justify-between bg-[#16151a] border-b border-[#222227]">
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={cn({
              "text-white": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-white transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div>Sign in</div>
    </nav>
  );
};

export default MenuBar;
