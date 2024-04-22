import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import { redirect } from "next/navigation";
import { cache } from "react";

export const verifyCmsSession = cache(async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.email) {
    redirect("/admin/login");
  }

  return { isAuth: true, email: session.email };
});
