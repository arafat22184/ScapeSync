"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "sonner";

export default function RegisterForm() {
  const [showPass, setShowPass] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  const handlePassShowToogle = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    const formdata = new FormData(e.currentTarget);

    // Get values from form
    const firstName = formdata.get("firstName");
    const lastName = formdata.get("lastName");
    const email = formdata.get("email");
    const password = formdata.get("password");
    const confirmPassword = formdata.get("confirmPassword");
    const terms = formdata.get("terms") ? "true" : "false";

    // Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      setFormLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setFormLoading(false);
      return;
    }

    if (!terms) {
      toast.error("Please agree to the Terms of Service and Privacy Policy");
      setFormLoading(false);
      return;
    }

    // Build API form data
    const apiData = new FormData();
    apiData.append("first_name", firstName);
    apiData.append("last_name", lastName);
    apiData.append("email", email);
    apiData.append("password", password);
    apiData.append("password_confirmation", confirmPassword);
    apiData.append("terms", terms);

    try {
      const loadingToast = toast.loading("Creating your account...");

      const res = await fetch("https://apitest.softvencefsd.xyz/api/register", {
        method: "POST",
        body: apiData,
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(
          "Registration successful! Redirecting to verification...",
          { id: loadingToast }
        );
        router.push(`/register/verify?email=${encodeURIComponent(email)}`);
      } else {
        let errorMessage = "Registration failed";
        if (data.errors) {
          // Handle field-specific errors
          const firstError = Object.values(data.errors)[0]?.[0];
          errorMessage = firstError || errorMessage;
        } else if (data.message) {
          errorMessage = data.message;
        } else if (data.email?.[0]?.includes("taken")) {
          errorMessage = "Email address is already registered";
        }

        toast.error(errorMessage, { id: loadingToast });
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setFormLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      setGoogleLoading(true);
      toast.loading("Redirecting to Google...");

      await signIn("google", {
        callbackUrl: "/",
        redirect: true,
      });
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Failed to initiate Google sign-in");
      setGoogleLoading(false);
    }
  };

  const isLoading = formLoading || googleLoading;

  return (
    <div>
      <form onSubmit={handleRegister} className="flex flex-col gap-6 mt-12">
        {/* Name */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <label
              htmlFor="floating-input"
              className="rounded-md absolute -top-3 bg-white px-1 left-3.5 text-[#919EAB]"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              disabled={isLoading}
              suppressHydrationWarning
              className="outline-1 outline-[#919EAB]/32 w-full h-14 rounded-lg pl-4 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            disabled={isLoading}
            suppressHydrationWarning
            className="flex-1 outline-1 outline-[#919EAB]/32 w-full h-14 rounded-lg pl-4 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Last name"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          disabled={isLoading}
          suppressHydrationWarning
          className="flex-1 outline-1 outline-[#919EAB]/32 w-full min-h-14 rounded-lg pl-4 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Email address"
        />

        {/* Password */}
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            autoComplete="true"
            disabled={isLoading}
            suppressHydrationWarning
            className="outline-1 outline-[#919EAB]/32 w-full h-14 rounded-lg pl-4 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            onClick={handlePassShowToogle}
            disabled={isLoading}
            className="absolute right-4 top-4 text-[#637381] cursor-pointer hover:text-[#49AE44] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
            autoComplete="true"
            disabled={isLoading}
            suppressHydrationWarning
            className="outline-1 outline-[#919EAB]/32 w-full h-14 rounded-lg pl-4 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            onClick={handlePassShowToogle}
            disabled={isLoading}
            className="absolute right-4 top-4 text-[#637381] cursor-pointer hover:text-[#49AE44] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {showPass ? <IoIosEye size={24} /> : <IoMdEyeOff size={24} />}
          </button>
        </div>

        {/* Privacy Policy */}
        <div className="flex items-center gap-3">
          <label className="flex items-center space-x-3 cursor-pointer">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                defaultChecked
                disabled={isLoading}
                className="peer appearance-none w-5 h-5 border-2 border-[#49AE44] rounded-md checked:bg-[#49AE44] checked:border-[#49AE44] transition-colors cursor-pointer hover:border-[#49AE44]/80 hover:checked:bg-[#49AE44]/90 disabled:opacity-50 disabled:cursor-not-allowed"
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
              I agree to Tech Takes{" "}
              <span className="underline">Terms of Service</span> and{" "}
              <span className="underline">Privacy Policy.</span>
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-[#49AE44] rounded-lg text-white font-bold cursor-pointer hover:bg-[#3e8e3a] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#49AE44]"
        >
          {formLoading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center mt-12 mb-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="px-4 text-gray-500">OR</div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <button
        onClick={handleGoogleRegister}
        disabled={isLoading}
        className="w-full border border-[#919EAB]/32 py-3 text-[#637381] flex justify-center items-center gap-4 rounded-lg cursor-pointer hover:border-[#49AE44]/50 hover:text-[#49AE44] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FcGoogle size={24} />
        {googleLoading ? "Redirecting..." : "Continue with Google"}
      </button>

      <p className="mt-8 text-sm text-center">
        Already have an account?{" "}
        <Link
          href={isLoading ? "#" : "/login"}
          className={`text-[#49AE44] font-semibold text-sm hover:text-[#3e8e3a] transition-colors duration-200 ${
            isLoading ? "pointer-events-none opacity-50" : ""
          }`}
        >
          Login
        </Link>
      </p>
    </div>
  );
}
