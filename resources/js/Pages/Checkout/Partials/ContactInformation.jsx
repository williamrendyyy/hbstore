import { Link, usePage } from "@inertiajs/react";
import { IconEditCircle } from "@tabler/icons-react";

export default function ContactInformation() {
  const { auth } = usePage().props;
  const user = auth?.user;

  return (
    <div className="mt-10 border-t border-slate-200 pt-10">
      <h2 className="text-lg font-medium text-slate-900">Detail Pembeli</h2>

      <div className="relative mt-4 rounded-lg bg-white p-4 shadow">
        <Link
          href={route("profile.edit")}
          className="absolute right-0 top-0 mr-2 mt-2 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-blue-500 focus:outline-none focus:ring"
          aria-label="Edit informasi pembeli"
        >
          <IconEditCircle className="h-5 w-5 stroke-[1.25]" />
        </Link>

        <div className="space-y-4 text-sm text-slate-700">
          <div>
            <label className="block font-medium">Nama Penerima</label>
            <p className="mt-1 text-slate-900">{user?.name || "-"}</p>
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <p className="mt-1 text-slate-900">{user?.email || "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
