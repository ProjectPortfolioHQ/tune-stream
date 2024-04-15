"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GiZigzagTune } from "react-icons/gi";
import { Button } from "./ui/button";
import Image from "next/image";


const NavBar = () => {
  return (
    <nav className="sticky flex space-x-6 border-b px-5 h-14 justify-between items-center bg-[#262626]">
      <Link href="/">
        <Image
          src="/images/logo_app.png"
          alt="Logo app"
          width="110"
          height="51"
        />
      </Link>

      <Button>Buy now</Button>
    </nav>
  );
};

export default NavBar;
