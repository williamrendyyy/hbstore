import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };

  return (
    <GuestLayout>
      <Head title="Reset Password" />

      <div className="mx-auto mt-16 max-w-md rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-2 text-center text-2xl font-bold text-gray-800">
          Reset Your Password
        </h1>
        <p className="mb-6 text-center text-sm text-gray-500">
          Enter a new password for your account
        </p>

        <form onSubmit={submit} className="space-y-5">
          {/* Email */}
          <div>
            <InputLabel htmlFor="email" value="Email" />
            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="mt-1 block w-full rounded-md"
              autoComplete="username"
              onChange={(e) => setData("email", e.target.value)}
            />
            <InputError message={errors.email} className="mt-1" />
          </div>

          {/* Password */}
          <div>
            <InputLabel htmlFor="password" value="New Password" />
            <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="mt-1 block w-full rounded-md"
              autoComplete="new-password"
              isFocused={true}
              onChange={(e) => setData("password", e.target.value)}
            />
            <InputError message={errors.password} className="mt-1" />
          </div>

          {/* Confirm Password */}
          <div>
            <InputLabel
              htmlFor="password_confirmation"
              value="Confirm New Password"
            />
            <TextInput
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              className="mt-1 block w-full rounded-md"
              autoComplete="new-password"
              onChange={(e) => setData("password_confirmation", e.target.value)}
            />
            <InputError
              message={errors.password_confirmation}
              className="mt-1"
            />
          </div>

          {/* Submit */}
          <div>
            <PrimaryButton
              disabled={processing}
              className="w-full justify-center rounded-md bg-blue-500 transition hover:bg-blue-600"
            >
              {processing ? "Resetting..." : "Reset Password"}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </GuestLayout>
  );
}
