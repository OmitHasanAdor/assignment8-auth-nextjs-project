'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaEye, FaEyeSlash, FaGoogle, FaLock } from 'react-icons/fa';
import { toast } from 'react-toastify';

type LoginFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const redirectPath = useSearchParams().get('redirect') || '/';
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const handleGoogleSign = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
      callbackURL: redirectPath,
    });

    if (data.error) {
      toast.error(`Google login failed: ${data.error.message}`);
    }
  };

  const handleLogIn = async (data: LoginFormData) => {
    setSubmitting(true);
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: redirectPath,
    });
    setSubmitting(false);

    if (error) {
      toast.error(`Login failed: ${error.message}`);
    } else {
      toast.success('Login successful!');
      router.refresh();
      setTimeout(() => {
        router.push(redirectPath);
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-white lg:flex">
      {/* Brand / animation panel */}
      <div className="relative hidden overflow-hidden bg-linear-to-b from-white to-orange-50/40 px-14 py-16 lg:flex lg:w-[46%] lg:flex-col lg:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-orange-500 text-lg">
              ☀️
            </span>
            <span className="text-xl font-extrabold text-[#0F172A]">
              Sun<span className="text-[#2F6FED]">Cart</span>
            </span>
          </div>

          <h1 className="mt-10 text-4xl leading-tight font-extrabold tracking-tight xl:text-[2.6rem]">
            <span className="text-[#0F172A]">Welcome</span>{' '}
            <span className="text-[#2F6FED]">back,</span>
            <br />
            <span className="text-slate-400">ready for </span>
            <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              more deals?
            </span>
          </h1>

          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-slate-500">
            Sign in to pick up where you left off — your orders, favourites
            and profile are all right here.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          New to SunCart?{' '}
          <Link
            href="/register"
            className="font-semibold text-[#0F172A] underline underline-offset-4"
          >
            Create an account
          </Link>
        </p>
      </div>

      {/* Form panel */}
      <div className="flex flex-1 items-center justify-center px-6 py-14">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-orange-500 text-lg">
              ☀️
            </span>
            <span className="text-xl font-extrabold text-[#0F172A]">
              Sun<span className="text-[#2F6FED]">Cart</span>
            </span>
          </div>

          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Login to your account
          </h2>
          <p className="mt-1 mb-8 text-sm text-slate-500">
            Enter your details below to continue.
          </p>

          <form onSubmit={handleSubmit(handleLogIn)} className="space-y-5" noValidate>
            <div>
              <label className="mb-1.5 block text-xs font-semibold tracking-wide text-slate-600 uppercase">
                Email
              </label>
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-3 transition focus-within:border-[#2F6FED] focus-within:ring-2 focus-within:ring-[#2F6FED]/15">
                <FaEnvelope className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none"
                  {...register('email', { required: 'Email is required' })}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs text-rose-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="block text-xs font-semibold tracking-wide text-slate-600 uppercase">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-[#2F6FED] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-3 transition focus-within:border-[#2F6FED] focus-within:ring-2 focus-within:ring-[#2F6FED]/15">
                <FaLock className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Your password"
                  className="w-full bg-transparent text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none"
                  {...register('password', { required: 'Password is required' })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="shrink-0 text-slate-400 hover:text-slate-600"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-3.5 w-3.5" />
                  ) : (
                    <FaEye className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs text-rose-500">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full rounded-full bg-black py-3 text-sm font-semibold text-white transition hover:bg-[#0F172A] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? 'Logging in…' : 'Login'}
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs tracking-wide text-slate-400 uppercase">or</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <button
            onClick={handleGoogleSign}
            className="flex w-full items-center justify-center gap-2.5 rounded-full border border-slate-200 bg-white py-3 text-sm font-semibold text-[#0F172A] transition hover:border-slate-300 hover:bg-slate-50"
          >
            <FaGoogle className="h-3.5 w-3.5 text-[#2F6FED]" />
            Continue with Google
          </button>

          <p className="mt-8 text-center text-sm text-slate-500 lg:hidden">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="font-semibold text-[#0F172A] underline underline-offset-4">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;