import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { GoPeople } from "react-icons/go";
import { IoStorefrontOutline } from "react-icons/io5";
import { LuHome, LuNewspaper } from "react-icons/lu";
import { MdEventNote, MdPodcasts } from "react-icons/md";
import { SiPagekit } from "react-icons/si";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface SiderBarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const SiderBar = ({ className }: SiderBarProps) => {
  const linksMenu = [
    {
      icon: <LuHome />,
      label: "Home",
      href: "/",
    },
    {
      icon: <GoPeople />,
      label: "Artists",
      href: "/artists",
    },
    {
      icon: <MdEventNote />,
      label: "Events",
      href: "/events",
    },
    {
      icon: <MdPodcasts />,
      label: "Podcasts",
      href: "/podcasts",
    },
    {
      icon: <SiPagekit />,
      label: "Pages",
      href: "/pages",
    },
    {
      icon: <IoStorefrontOutline />,
      label: "Store",
      href: "/store",
    },
    {
      icon: <LuNewspaper />,
      label: "News",
      href: "/news",
    },
  ];

  return (
    <div className={cn("pb-12 bg-[#16151a]", className)}>
      <div className="space-y-4">
        <div>
          <div className="flex h-14 pl-5 border-b border-[#222227]">
            <Link href="/">
              <Image
                src="/images/logo_app.png"
                alt="Logo app"
                width="140"
                height="90"
              />
            </Link>
          </div>

          <ScrollArea className="h-[300px] p-1 border-b border-[#222227]">
            <div className="space-y-1 p-2">
              {linksMenu?.map((item, i) => {
                const Icon = item.icon;
                console.log("Icon", Icon);
                return (
                  <Button
                    key={`${item}-${i}`}
                    variant="ghost"
                    className="w-full justify-start text-[#c0c0c0]"
                  >
                    {item.icon}
                    <span className="ml-4">{item.label}</span>
                  </Button>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default SiderBar;
