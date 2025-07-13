import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function DeleteUserForm({ className = "" }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    password: "",
  });

  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };

  const deleteUser = (e) => {
    e.preventDefault();

    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset(),
    });
  };

  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };

  return (
    <section className={`space-y-6 ${className}`}>
      <header>
        <h2 className="text-lg font-semibold text-rose-700">Hapus Akun</h2>
        <p className="mt-1 text-sm text-slate-600">
          Setelah akun Anda dihapus, semua data akan dihapus secara permanen.
          Pastikan untuk menyimpan informasi penting sebelum melanjutkan.
        </p>
      </header>

      <DangerButton onClick={confirmUserDeletion}>Hapus Akun</DangerButton>

      <Modal show={confirmingUserDeletion} onClose={closeModal}>
        <form onSubmit={deleteUser} className="p-6">
          <h2 className="text-lg font-bold text-slate-800">
            Apakah Anda yakin ingin menghapus akun?
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Masukkan kata sandi Anda untuk mengonfirmasi penghapusan akun ini.
          </p>

          <div className="mt-4">
            <InputLabel
              htmlFor="password"
              value="Password"
              className="sr-only"
            />
            <TextInput
              id="password"
              type="password"
              name="password"
              ref={passwordInput}
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-rose-500 focus:ring-rose-500"
              isFocused
              placeholder="Masukkan Password Anda"
            />
            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="mt-6 flex justify-end space-x-2">
            <SecondaryButton onClick={closeModal}>Batal</SecondaryButton>
            <DangerButton disabled={processing}>Ya, Hapus Akun</DangerButton>
          </div>
        </form>
      </Modal>
    </section>
  );
}
