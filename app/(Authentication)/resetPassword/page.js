import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import ResetPasswordForm from "../../components/Authentication/ResetPassword/ResetPasswordForm";

export const metadata = {
  title: "ScapeSync | Reset Password",
  description:
    "Forgot your password? Enter your email to receive a secure reset link and restore access to your ScapeSync account.",
};

export default function ResetPassword() {
  return (
    <div className="max-w-[480px] mx-auto">
      <Link
        href={"/login"}
        className="text-[#49AE44] text-sm flex items-center gap-2 font-bold mb-8"
      >
        <IoIosArrowBack />
        Back
      </Link>
      <h1 className="text-[#212B36] text-2xl font-bold mb-2">
        Forgot your password?
      </h1>
      <p className="text-[#637381]">
        Please enter the email address associated with your account, and
        we&apos;ll email you a link to reset your password.
      </p>
      <ResetPasswordForm></ResetPasswordForm>
    </div>
  );
}
