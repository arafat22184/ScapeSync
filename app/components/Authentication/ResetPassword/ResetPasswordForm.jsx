"use client";

export default function ResetPasswordForm() {
  return (
    <form className="mt-10">
      {/* Email */}
      <input
        type="email"
        name="email"
        suppressHydrationWarning
        className="flex-1 outline-1 outline-[#919EAB]/32 w-full min-h-14 rounded-lg pl-4 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 mb-6"
        placeholder="Email address"
      />
      <input
        type="submit"
        value={"Reset Password"}
        className="w-full py-3 bg-[#49AE44] text-white font-bold rounded-lg hover:bg-[#3e8e3a] transition-colors duration-200 mb-4 cursor-pointer"
      />
    </form>
  );
}
