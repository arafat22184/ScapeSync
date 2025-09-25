"use client";

import { useState } from "react";
import { IoIosEye, IoMdEyeOff } from "react-icons/io";

export default function UpdatePasswordForm() {
  const [showPass, setShowPass] = useState(false);

  const handlePassShowToogle = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  return (
    <form className="space-y-6 mt-10">
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

      {/* Confirm Password */}
      <div className="relative">
        <input
          type={showPass ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
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
      <input
        type="submit"
        value="Update Password"
        className="w-full py-3 bg-[#49AE44] rounded-lg text-white font-bold cursor-pointer hover:bg-[#3e8e3a] transition-colors duration-200"
      />
    </form>
  );
}
