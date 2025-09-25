import Link from "next/link";
import UpdatePasswordForm from "../../components/Authentication/ResetPassword/UpdatePasswrodForm";
import { IoIosArrowBack } from "react-icons/io";

export default function ResetPassword() {
  return (
    <div className="max-w-[480px] mx-auto">
      <Link
        href={"/resetPassword/verify"}
        className="text-[#49AE44] text-sm flex items-center gap-2 font-bold mb-8"
      >
        <IoIosArrowBack />
        Back
      </Link>
      <h1 className="text-[#212B36] text-2xl font-bold mb-2">
        Enter your new password?
      </h1>
      <p className="text-[#637381]">
        Please enter your new password in both fields to confirm. Make sure
        it&apos;s strong and unique for better security.
      </p>
      <UpdatePasswordForm></UpdatePasswordForm>
    </div>
  );
}
