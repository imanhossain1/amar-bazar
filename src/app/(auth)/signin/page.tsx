"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

function SignInPage() {
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    const formData = new FormData(event.currentTarget);
    const formEntries = Object.fromEntries(formData.entries());

    const email = formEntries.email.toString();
    const password = formEntries.password.toString();

    if (email === "" || password === "") {
      setError("Email এবং Password পূরণ করো।");
      return;
    }

    console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-base-200 px-4 py-10">
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
              Welcome Back
            </p>

            <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
              প্রতিদিনের বাজারের
              <br />
              হিসাব থাকুক
              <br />
              আপনার হাতেই।
            </h1>

            <p className="mt-6 max-w-sm leading-7 text-green-100">
              আজকের দাম জানুন, বাজারের পরিবর্তন বুঝুন এবং
              আপনার প্রয়োজনীয় পণ্যের তথ্য সহজেই দেখুন।
            </p>
          </div>

          <div className="relative z-10 border-t border-green-700 pt-5 text-sm text-green-200">
            আপনার বাজার, আপনার তথ্য, আপনার সিদ্ধান্ত।
          </div>

          <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full border-[40px] border-green-700/50" />
          <div className="absolute -right-10 top-24 h-32 w-32 rounded-full bg-green-700/40" />
        </div>

        {/* Right side: Sign in form */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12 xl:p-16">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="inline-block text-xl font-extrabold text-green-800 lg:hidden"
            >
              🛒 বাজার দর
            </Link>

            <div className="mb-8 mt-6 lg:mt-0">
              <p className="mb-3 text-sm font-semibold text-green-700">
                আবার স্বাগতম!
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
                Sign In
              </h2>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                আপনার অ্যাকাউন্টে প্রবেশ করতে Email ও Password দিন।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                  autoComplete="current-password"
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
                Sign In
              </button>
            </form>

            <div className="divider my-6 text-xs text-base-content/40">
              অথবা
            </div>

            <button
              type="button"
              disabled
              className="btn btn-outline h-12 w-full rounded-xl"
              title="Google authentication এখনো যুক্ত করা হয়নি"
            >
              <span className="text-lg font-bold">G</span>
              Continue with Google
            </button>

            <p className="mt-7 text-center text-sm text-base-content/60">
              অ্যাকাউন্ট নেই?{" "}
              <Link
                href="/signup"
                className="font-bold text-green-800 hover:underline"
              >
                Sign Up
              </Link>
            </p>

            <p className="mt-8 text-center text-xs text-base-content/40">
              © 2026 বাজার দর · আপনার বাজারের নির্ভরযোগ্য সঙ্গী
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignInPage;