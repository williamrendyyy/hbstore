import { useRef } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function UpdatePasswordForm({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();

  const { data, setData, errors, put, reset, processing, recentlySuccessful } =
    useForm({
      current_password: "",
      password: "",
      password_confirmation: "",
    });

  const updatePassword = (e) => {
    e.preventDefault();

    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors) => {
        if (errors.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }

        if (errors.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      },
    });
  };

  return (
    <section className={`rounded-xl bg-white p-6 shadow-sm ${className}`}>
      <header className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Ganti Password</h2>
        <p className="mt-1 text-sm text-slate-600">
          Pastikan akun Anda menggunakan password yang panjang dan acak untuk
          menjaga keamanan.
        </p>
      </header>

      <form onSubmit={updatePassword} className="space-y-6">
        <div>
          <InputLabel htmlFor="current_password" value="Password Saat Ini" />
          <TextInput
            id="current_password"
            ref={currentPasswordInput}
            value={data.current_password}
            onChange={(e) => setData("current_password", e.target.value)}
            type="password"
            className="mt-1 block w-full"
            autoComplete="current-password"
          />
          <InputError message={errors.current_password} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="password" value="Password Baru" />
          <TextInput
            id="password"
            ref={passwordInput}
            value={data.password}
            onChange={(e) => setData("password", e.target.value)}
            type="password"
            className="mt-1 block w-full"
            autoComplete="new-password"
          />
          <InputError message={errors.password} className="mt-2" />
        </div>

        <div>
          <InputLabel
            htmlFor="password_confirmation"
            value="Konfirmasi Password"
          />
          <TextInput
            id="password_confirmation"
            value={data.password_confirmation}
            onChange={(e) => setData("password_confirmation", e.target.value)}
            type="password"
            className="mt-1 block w-full"
            autoComplete="new-password"
          />
          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>

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
            <p className="text-sm text-green-600">
              Password berhasil diperbarui.
            </p>
          </Transition>
        </div>
      </form>
    </section>
  );
}
