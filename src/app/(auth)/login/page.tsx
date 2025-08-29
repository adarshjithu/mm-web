// app/login/page.tsx
"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Logo Section */}
      <div className="flex justify-center items-center py-10">
        <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
          <span className="text-white text-3xl font-bold">👑</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 max-w-md w-full mx-auto">
        {/* Welcome text */}
        <h2 className="text-center text-2xl font-semibold text-purple-900">
          Welcome back!
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Enter your credentials to continue.
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
        />

        {/* Password */}
        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Forgot password */}
        <div className="flex justify-end mb-4">
          <Link
            href="/forgot-password"
            className="text-sm text-purple-700 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login button */}
        <button className="w-full bg-purple-800 text-white py-3 rounded-lg hover:bg-purple-900 transition">
          Log in
        </button>

        {/* Terms */}
        <p className="mt-6 text-xs text-center text-gray-500">
          By logging in, you agree to our{" "}
          <Link href="/terms" className="underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
        </p>

        {/* Register link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-purple-800 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
