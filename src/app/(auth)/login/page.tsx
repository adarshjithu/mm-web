// app/login/page.tsx
"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { login } from "@/api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/slice/authSlice";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch =useDispatch()
  const router = useRouter()

  // form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

     const res = await login(formData);
     const user = res?.data?.data?.user;
     dispatch(setUser(user))
     router.push('/')


  };

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center px-6">
      {/* Logo + Welcome Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-28 h-28 flex items-center justify-center mb-4">
          <img src="mm-logo.png" alt="Logo" className="max-h-full max-w-full" />
        </div>
        <h2 className="text-3xl font-bold text-[#91308d]">Welcome back!</h2>
        <p className="text-gray-500 text-sm mt-1">
          Enter your credentials to continue.
        </p>
      </div>

      {/* Form Section */}
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="relative mb-3">
          <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none text-black placeholder-gray-400"
            required
          />
        </div>

        {/* Password */}
        <div className="relative mb-3">
          <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none text-black placeholder-gray-400"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-3.5 text-gray-500"
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
        <button
          type="submit"
          className="w-full bg-[#91308d] text-white py-3 rounded-lg hover:bg-purple-900 transition"
        >
          Log in
        </button>
      </form>

      {/* Terms */}
      <p className="text-sm text-gray-500 mt-4">
        By continuing, you agree to our Terms of Use and Privacy Policy.
      </p>

      {/* Register link */}
      <p className="mt-4 text-sm text-center text-gray-600">
        Don’t have an account?{" "}
        <Link
          href="/register"
          className="text-[#91308d] font-medium hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
