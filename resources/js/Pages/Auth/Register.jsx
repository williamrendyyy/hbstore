import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
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
    post(route("register"));
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <div className="flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg transition-all">
          <h1 className="mb-1 text-center text-2xl font-bold text-gray-800">
            Welcome to Holly Beast
          </h1>
          <p className="mb-6 text-center text-sm text-gray-500">
            Create your account to start shopping!
          </p>

          <form onSubmit={submit} className="space-y-5">
            {/* Name */}
            <div>
              <InputLabel htmlFor="name" value="Full Name" />
              <TextInput
                id="name"
                name="name"
                value={data.name}
                className="mt-1 block w-full rounded-md"
                autoComplete="name"
                isFocused
                onChange={(e) => setData("name", e.target.value)}
                required
              />
              <InputError message={errors.name} className="mt-1" />
            </div>

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
                onChange={(e) => setData("email", e.target.value)}
                required
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
                autoComplete="new-password"
                onChange={(e) => setData("password", e.target.value)}
                required
              />
              <InputError message={errors.password} className="mt-1" />
            </div>

            {/* Confirm Password */}
            <div>
              <InputLabel
                htmlFor="password_confirmation"
                value="Confirm Password"
              />
              <TextInput
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                className="mt-1 block w-full rounded-md"
                autoComplete="new-password"
                onChange={(e) =>
                  setData("password_confirmation", e.target.value)
                }
                required
              />
              <InputError
                message={errors.password_confirmation}
                className="mt-1"
              />
            </div>

            {/* Link ke login */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Already have an account?</span>
              <Link
                href={route("login")}
                className="text-blue-500 hover:underline"
              >
                Login
              </Link>
            </div>

            {/* Tombol Submit */}
            <div>
              <PrimaryButton
                disabled={processing}
                className="w-full justify-center rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
              >
                {processing ? "Registering..." : "Register"}
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
