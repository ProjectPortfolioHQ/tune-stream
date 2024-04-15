import { cn } from "@/lib/utils";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeaderLogo() {
  return (
    <Link href="/">
      <AiFillBug />
    </Link>
  );
}

export { PageHeader, PageHeaderLogo };
