import MenuBar from "@/components/menu-bar";
import SiderBar from "@/components/siderbar";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <SiderBar className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l lg:border-[#222227]">
              <MenuBar />

              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
