import { verifyCmsSession } from "@/lib/dal";
import { deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  await verifyCmsSession();

  return (
    <form
      action={async () => {
        "use server";
        deleteSession();
        redirect("/admin/login");
      }}
    >
      <p>Hello</p>
      <button type="submit">Logout</button>
    </form>
  );
}
