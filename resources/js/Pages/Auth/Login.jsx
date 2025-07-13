import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("Email dan password wajib diisi.");
      return;
    }

    post(route("login"));
  };

  return (
    <GuestLayout>
      <Head title="Login" />

      <div className="flex  items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
            <p className="mt-1 text-sm text-gray-500">
              Please login to continue
            </p>
          </div>

          {status && (
            <div className="mb-4 rounded bg-green-100 px-4 py-2 text-center text-sm text-green-700">
              {status}
            </div>
          )}

          <form onSubmit={submit} className="space-y-5">
            {/* Email */}
            <div>
              <InputLabel htmlFor="email" value="Email Address" />
              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full rounded-md"
                autoComplete="username"
                isFocused
                onChange={(e) => setData("email", e.target.value)}
              />
              <InputError message={errors.email} className="mt-1" />
            </div>

            {/* Password */}
            <div>
              <InputLabel htmlFor="password" value="Password" />
              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full rounded-md"
                autoComplete="current-password"
                onChange={(e) => setData("password", e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") submit(e);
                }}
              />
              <InputError message={errors.password} className="mt-1" />
            </div>

            {/* Remember & Register */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <Checkbox
                  name="remember"
                  checked={data.remember}
                  onChange={(e) => setData("remember", e.target.checked)}
                />
                <span className="ml-2">Remember me</span>
              </label>

              <Link
                href={route("register")}
                className="text-blue-500 hover:underline"
              >
                Don't have an account?
              </Link>
            </div>

            {/* Submit */}
            <div>
              <PrimaryButton
                disabled={processing}
                className="w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
              >
                {processing ? "Logging in..." : "Login"}
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
