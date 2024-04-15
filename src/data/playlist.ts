export type Playlist = (typeof playlists)[number];
import { LuHome } from "react-icons/lu";

export const playlists = [
  "Home",
  "Artists",
  "Releases",
  "Events",
  "Podcasts",
  "Pages",
  "Store",
  "News",
];



export type LinkMenu = {
  icon: string,
  label: string,
  href: string,
}

export const linksMenu = [
  {
    icon: LuHome ,
    label: "Home",
    href: "/",
  },
  {
    icon:'',
    label: "Artists",
    href: "/artists",
  },
  {
    icon:'',
    label: "Events",
    href: "/events",
  },
  {
    icon:'',
    label: "Podcasts",
    href: "/podcasts",
  },
  {
    icon:'',
    label: "Pages",
    href: "/pages",
  },
  {
    icon:'',
    label: "Store",
    href: "/store",
  },
  {
    icon:'',
    label: "News",
    href: "/news",
  },

];