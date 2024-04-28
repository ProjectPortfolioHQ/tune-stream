import { verifyCmsSession } from "@/lib/dal";
import { deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Navbar() {
  await verifyCmsSession();

  return (
    <div className="p-4 border-b border-[#222227]">
      <form
        action={async () => {
          "use server";
          deleteSession();
          redirect("/admin/login");
        }}
        className="flex justify-end"
      >
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
