// app/login/page.tsx
"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center px-6">
      {/* Logo + Welcome Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-30 h-30 rounded-full flex items-center justify-center mb-4">
          <img src="mm-logo.png" alt="" />
        </div>
        <h2 className="text-3xl font-bold text-[#91308d]">Welcome back!</h2>
        <p className="text-gray-500 text-sm mt-1">
          Enter your credentials to continue.
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md">
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
            className="text-sm text-[#91308d] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login button */}
        <button className="w-full bg-[#91308d] text-white py-3 rounded-lg hover:bg-purple-900 transition">
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
