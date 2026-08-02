"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import ProfileAnimation from "@/components/ProfileAnimation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type LoginFormData = {
  email: string;
  password: string;
};

const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();
  const redirectPath = useSearchParams().get("redirect") || "/myprofile";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const handleLogIn = async (data: LoginFormData) => {
    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: redirectPath,
    });

    if (error) {
      toast.error(`Login failed: ${error.message}`);
    } else {
      toast.success("Login successful!");
      router.push(redirectPath);
    }
  };

  if (isPending) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-sky-600" />
      </div>
    );
  }

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-linear-to-br from-sky-50 via-white to-amber-50">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative container mx-auto flex flex-col-reverse items-center justify-center gap-10 px-4 py-12 md:flex-row md:gap-14 lg:py-16">
        {/* Left - Animation */}
        <div className="flex w-full max-w-md flex-1 items-center justify-center md:max-w-lg">
          <div className="w-full overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-sky-100/50 backdrop-blur-sm">
            <ProfileAnimation
              fileName="Security.lottie"
              className="mx-auto h-auto w-full max-w-70"
            />
          </div>
        </div>

        {/* Right - Profile or Login */}
        {user ? (
          /* ===== Logged In Profile Card ===== */
          <div className="w-full max-w-md flex-1">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-sky-100/60">
              {/* Top gradient banner */}
              <div className="h-28 bg-linear-to-r from-sky-500 via-cyan-500 to-amber-400" />

              <div className="-mt-14 flex flex-col items-center px-8 pb-8">
                {/* Avatar */}
                <div className="rounded-full bg-white p-1.5 shadow-lg">
                  <Image
                    src={
                      user.image ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    alt="User Avatar"
                    width={120}
                    height={120}
                    className="h-28 w-28 rounded-full object-cover"
                  />
                </div>

                {/* Status badge */}
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Active
                </span>

                {/* Name & Email */}
                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                  {user.name}
                </h2>
                <p className="mt-1 text-sm text-gray-500">{user.email}</p>

                <p className="mt-5 max-w-xs text-center text-sm leading-relaxed text-gray-600">
                  Welcome back! Manage your account details and keep your
                  profile up to date.
                </p>

                {/* Actions */}
                <div className="mt-8 flex w-full flex-col gap-3">
                  <Link href="/updateinfo" className="w-full">
                    <button className="btn w-full rounded-xl border-0 bg-gray-900 text-white hover:bg-gray-800">
                      Update Profile
                    </button>
                  </Link>
                  <Link href="/myproducts" className="w-full">
                    <button className="btn btn-outline w-full rounded-xl border-gray-200 hover:border-gray-300 hover:bg-gray-50">
                      Browse Products
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ===== Login Card ===== */
          <div className="w-full max-w-md flex-1">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-sky-100/60">
              {/* Header */}
              <div className="border-b border-gray-100 bg-linear-to-r from-sky-50 to-amber-50 px-8 py-7 text-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  Welcome Back
                </h1>
                <p className="mt-1.5 text-sm text-gray-500">
                  Sign in to access your profile
                </p>
              </div>

              <div className="px-8 py-8">
                <form
                  onSubmit={handleSubmit(handleLogIn)}
                  className="space-y-5"
                >
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                      className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400"
                      placeholder="••••••••"
                    />
                    {errors.password && (
                      <p className="mt-1.5 text-sm text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn w-full rounded-xl border-0 bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="loading loading-spinner loading-sm" />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="font-semibold text-sky-600 hover:underline"
                  >
                    Create one
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProfilePage;