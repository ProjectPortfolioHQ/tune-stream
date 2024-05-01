import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./cmsGlobal.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Tune Stream Cms",
  description: "Cms for Tune Stream",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Theme appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  );
}
