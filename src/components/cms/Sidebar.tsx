import Image from "next/image";
import { ReactNode } from "react";
import { GoPeople } from "react-icons/go";
import { IoAlbumsOutline } from "react-icons/io5";
import { CiMusicNote1 } from "react-icons/ci";

interface Link {
  key: number;
  href: string;
  name: string;
  icon: ReactNode;
}

const links: Link[] = [
  {
    key: 1,
    icon: <GoPeople />,
    href: "/admin/users",
    name: "Users",
  },
  {
    key: 2,
    icon: <IoAlbumsOutline />,
    href: "/admin/albums",
    name: "Albums",
  },
  {
    key: 3,
    icon: <CiMusicNote1 />,
    href: "/admin/songs",
    name: "Songs",
  },
  {
    key: 4,
    icon: <GoPeople />,
    href: "/admin/staffs",
    name: "Staffs",
  },
];

export default function Sidebar() {
  return (
    <>
      <a href="/admin/dashboard">
        <Image
          src="/images/logo_app.png"
          alt="Logo app"
          width="140"
          height="90"
        />
      </a>
      <div className="mt-4 flex flex-col gap-4">
        {links.map((link: Link) => {
          return (
            <div key={link.key} className="flex items-center gap-2">
              {link.icon}
              <a href={link.href} className="hover:text-primary">
                {link.name}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
