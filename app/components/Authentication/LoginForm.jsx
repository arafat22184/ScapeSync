"use client";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye, IoMdEyeOff } from "react-icons/io";

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);

  const handlePassShowToogle = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  return (
    <div>
      <form className="flex flex-col gap-6 mt-12">
        {/* Email */}
        <div className="relative">
          <label
            htmlFor="floating-input"
            className="rounded-md absolute -top-3 bg-white px-1 left-3.5 text-[#919EAB]"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            suppressHydrationWarning
            className="outline-1 outline-[#919EAB]/32 w-full h-14 rounded-lg pl-4 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            suppressHydrationWarning
            className="outline-1 outline-[#919EAB]/32 w-full h-14 rounded-lg pl-4 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200"
          />
          <button
            onClick={handlePassShowToogle}
            className="absolute right-4 top-4 text-[#637381] cursor-pointer hover:text-[#49AE44] transition-colors duration-200"
          >
            {showPass ? <IoIosEye size={24} /> : <IoMdEyeOff size={24} />}
          </button>
        </div>

        {/* Remember and Forgot Password */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberPass"
                  defaultChecked
                  className="peer appearance-none w-5 h-5 border-2 border-[#49AE44] rounded-md checked:bg-[#49AE44] checked:border-[#49AE44] transition-colors cursor-pointer hover:border-[#49AE44]/80 hover:checked:bg-[#49AE44]/90"
                />
                {/* Tick mark */}
                <svg
                  className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-1 top-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </label>

              <span className="text-sm text-[#212B36] hover:text-[#49AE44] transition-colors duration-200">
                Remember me
              </span>
            </label>
          </div>
          <Link
            href={"/resetPassword"}
            className="text-[#49AE44] text-sm font-semibold hover:text-[#3e8e3a] transition-colors duration-200"
          >
            Forgot password?
          </Link>
        </div>
        <input
          type="submit"
          value="Login"
          className="w-full py-3 bg-[#49AE44] rounded-lg text-white font-bold cursor-pointer hover:bg-[#3e8e3a] transition-colors duration-200"
        />
      </form>

      {/* Divider */}
      <div className="flex items-center mt-12 mb-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="px-4 text-gray-500">OR</div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <button className="w-full border border-[#919EAB]/32 py-3 text-[#637381] flex justify-center items-center gap-4 rounded-lg cursor-pointer hover:border-[#49AE44]/50 hover:text-[#49AE44] transition-all duration-200">
        <FcGoogle size={24} />
        Log in with Google
      </button>

      <p className="mt-8 text-sm text-center">
        Don't have an account?{" "}
        <Link
          href={"/register"}
          className="text-[#49AE44] font-semibold text-sm hover:text-[#3e8e3a] transition-colors duration-200"
        >
          Get started
        </Link>
      </p>
    </div>
  );
}
