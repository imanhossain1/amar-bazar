"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const SignUpPage = () => {
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    const formData = new FormData(event.currentTarget);
    const formEntries = Object.fromEntries(formData.entries());

    const name = formEntries.name.toString();
    const email = formEntries.email.toString();
    const password = formEntries.password.toString();
    const confirmPassword = formEntries.confirmPassword.toString();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("সবগুলো ঘর পূরণ করো।");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password এবং Confirm Password মিলছে না।");
      return;
    }

    console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-base-200 px-4 py-8 sm:py-12">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-base-100 shadow-2xl lg:grid-cols-2">

        {/* Left side: Welcome section */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-green-800 p-10 text-white lg:flex xl:p-14">
          <div className="relative z-10">
            <Link href="/" className="text-3xl font-extrabold">
              🛒 বাজার দর
            </Link>

            <p className="mt-2 text-sm text-green-100">
              প্রয়োজনীয় পণ্যের দাম এক নজরে।
            </p>
          </div>

          <div className="relative z-10 my-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-200">
              Join Our Community
            </p>

            <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
              বাজারের হিসাব
              <br />
              জানুন সহজে,
              <br />
              থাকুন এক ধাপ এগিয়ে।
            </h1>

            <p className="mt-6 max-w-sm leading-7 text-green-100">
              আজকের বাজারদর দেখুন, পণ্যের দাম তুলনা করুন এবং
              আপনার প্রয়োজনীয় তথ্য এক জায়গায় রাখুন।
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <span className="text-2xl">🥬</span>
                <p className="mt-2 text-sm font-semibold">নিত্যপণ্যের দাম</p>
                <p className="mt-1 text-xs text-green-100">এক নজরে দেখুন</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <span className="text-2xl">📊</span>
                <p className="mt-2 text-sm font-semibold">দামের পরিবর্তন</p>
                <p className="mt-1 text-xs text-green-100">সহজেই বুঝুন</p>
              </div>
            </div>
          </div>

          <p className="relative z-10 border-t border-green-700 pt-5 text-sm text-green-200">
            আপনার বাজার, আপনার তথ্য, আপনার সিদ্ধান্ত।
          </p>

          <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full border-[40px] border-green-700/50" />
          <div className="absolute -right-10 top-24 h-32 w-32 rounded-full bg-green-700/40" />
        </div>

        {/* Right side: Signup form */}
        <div className="flex items-center justify-center p-5 sm:p-10 lg:p-12 xl:p-14">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="inline-block text-xl font-extrabold text-green-800 lg:hidden"
            >
              🛒 বাজার দর
            </Link>

            <div className="mb-7 mt-5 lg:mt-0">
              <p className="mb-3 text-sm font-semibold text-green-700">
                শুরু হোক আজই!
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
                Create Account
              </h2>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                আপনার নতুন অ্যাকাউন্ট তৈরি করতে নিচের তথ্যগুলো দিন।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label htmlFor="name" className="label pb-2">
                  <span className="label-text font-semibold">Full Name</span>
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="আপনার নাম লিখুন"
                  autoComplete="name"
                  className="input input-bordered h-12 w-full rounded-xl focus:border-green-700 focus:outline-green-700"
                />
              </div>

              <div className="form-control">
                <label htmlFor="email" className="label pb-2">
                  <span className="label-text font-semibold">Email Address</span>
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="input input-bordered h-12 w-full rounded-xl focus:border-green-700 focus:outline-green-700"
                />
              </div>

              <div className="form-control">
                <label htmlFor="password" className="label pb-2">
                  <span className="label-text font-semibold">Password</span>
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="পাসওয়ার্ড তৈরি করুন"
                  autoComplete="new-password"
                  className="input input-bordered h-12 w-full rounded-xl focus:border-green-700 focus:outline-green-700"
                />
              </div>

              <div className="form-control">
                <label htmlFor="confirmPassword" className="label pb-2">
                  <span className="label-text font-semibold">
                    Confirm Password
                  </span>
                </label>

                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="আবার পাসওয়ার্ড লিখুন"
                  autoComplete="new-password"
                  className="input input-bordered h-12 w-full rounded-xl focus:border-green-700 focus:outline-green-700"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="btn h-12 w-full rounded-xl border-0 bg-green-800 text-base font-semibold text-white shadow-md hover:bg-green-900"
              >
                Create Account
              </button>
            </form>

            <div className="divider my-5 text-xs text-base-content/40">
              অথবা
            </div>

            <button
              type="button"
              disabled
              className="btn btn-outline h-12 w-full rounded-xl"
              title="Google authentication এখনো যুক্ত করা হয়নি"
            >
              <span className="text-lg font-bold">G</span>
              Sign up with Google
            </button>

            <p className="mt-6 text-center text-sm text-base-content/60">
              ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/signin"
                className="font-bold text-green-800 hover:underline"
              >
                Sign In
              </Link>
            </p>

            <p className="mt-7 text-center text-xs text-base-content/40">
              © 2026 বাজার দর · আপনার বাজারের নির্ভরযোগ্য সঙ্গী
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;