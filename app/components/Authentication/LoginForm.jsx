"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "sonner";

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePassShowToogle = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    // Show loading toast
    const loadingToast = toast.loading("Signing in...");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (!result.error) {
        toast.success("Login successful! Redirecting...", { id: loadingToast });
        router.push("/");
      } else {
        // Handle specific error messages
        let errorMessage = "Login failed";
        if (result.error.includes("Invalid credentials")) {
          errorMessage = "Invalid email or password";
        } else if (result.error.includes("User not found")) {
          errorMessage = "No account found with this email";
        } else if (result.error.includes("Network")) {
          errorMessage = "Network error. Please try again.";
        }

        toast.error(errorMessage, { id: loadingToast });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An unexpected error occurred", { id: loadingToast });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const loadingToast = toast.loading("Redirecting to Google...");

      await signIn("google", { callbackUrl: "/" });

      toast.success("Google authentication initiated", { id: loadingToast });
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Failed to initiate Google sign-in");
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-12">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            suppressHydrationWarning
            className="outline-1 outline-[#919EAB]/32 w-full h-14 rounded-lg pl-4 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            value={password}
            placeholder="Password"
            autoComplete="true"
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            suppressHydrationWarning
            className="outline-1 outline-[#919EAB]/32 w-full h-14 rounded-lg pl-4 focus:outline-[#49AE44] hover:outline-[#49AE44]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="button"
            onClick={handlePassShowToogle}
            disabled={loading}
            className="absolute right-4 top-4 text-[#637381] cursor-pointer hover:text-[#49AE44] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={loading}
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
                Remember me
              </span>
            </label>
          </div>
          <Link
            href={loading ? "#" : "/resetPassword"}
            className={`text-[#49AE44] text-sm font-semibold hover:text-[#3e8e3a] transition-colors duration-200 ${
              loading ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[#49AE44] rounded-lg text-white font-bold cursor-pointer hover:bg-[#3e8e3a] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Signing in...
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center mt-12 mb-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="px-4 text-gray-500">OR</div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full border border-[#919EAB]/32 py-3 text-[#637381] flex justify-center items-center gap-4 rounded-lg cursor-pointer hover:border-[#49AE44]/50 hover:text-[#49AE44] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FcGoogle size={24} />
        {loading ? "Please wait..." : "Log in with Google"}
      </button>

      <p className="mt-8 text-sm text-center">
        Don't have an account?{" "}
        <Link
          href={loading ? "#" : "/register"}
          className={`text-[#49AE44] font-semibold text-sm hover:text-[#3e8e3a] transition-colors duration-200 ${
            loading ? "pointer-events-none opacity-50" : ""
          }`}
        >
          Get started
        </Link>
      </p>
    </div>
  );
}
