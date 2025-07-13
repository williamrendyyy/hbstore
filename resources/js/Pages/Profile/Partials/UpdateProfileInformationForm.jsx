import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  className = "",
}) {
  const user = usePage().props.auth.user;

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
    });

  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };

  return (
    <section className={`rounded-xl bg-white p-6 shadow-sm ${className}`}>
      <header className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Informasi Profil
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Perbarui informasi akun dan alamat email Anda.
        </p>
      </header>

      <form onSubmit={submit} className="space-y-6">
        <div>
          <InputLabel htmlFor="name" value="Nama Lengkap" />
          <TextInput
            id="name"
            className="mt-1 block w-full"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            required
            isFocused
            autoComplete="name"
          />
          <InputError className="mt-2" message={errors.name} />
        </div>

        <div>
          <InputLabel htmlFor="email" value="Alamat Email" />
          <TextInput
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            required
            autoComplete="username"
          />
          <InputError className="mt-2" message={errors.email} />
        </div>

        {mustVerifyEmail && user.email_verified_at === null && (
          <div className="text-sm text-slate-700">
            <p className="mb-1">
              Email Anda belum diverifikasi.
              <Link
                href={route("verification.send")}
                method="post"
                as="button"
                className="ml-1 inline-block font-medium text-blue-600 underline hover:text-blue-800"
              >
                Kirim ulang email verifikasi.
              </Link>
            </p>

            {status === "verification-link-sent" && (
              <div className="text-sm font-medium text-green-600">
                Link verifikasi baru telah dikirim ke email Anda.
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-4">
          <PrimaryButton disabled={processing}>Simpan</PrimaryButton>

          <Transition
            show={recentlySuccessful}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="text-sm text-green-600">Tersimpan.</p>
          </Transition>
        </div>
      </form>
    </section>
  );
}
