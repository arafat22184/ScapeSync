import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import ResetPassVerifyForm from "../../../components/Authentication/ResetPassword/ResetPassVerifyForm";

export default function VerifyResetPass() {
  return (
    <div className="max-w-[480px] mx-auto">
      <Link
        href={"/login/resetPassword"}
        className="text-[#49AE44] text-sm flex items-center gap-2 font-bold mb-8"
      >
        <IoIosArrowBack />
        Back
      </Link>
      <h1 className="text-[#212B36] text-2xl font-bold mb-2">
        Please check your email!
      </h1>
      <p className="text-[#637381]">
        We&apos;ve emailed a 6-digit confirmation code to acb@domain, please
        enter the code in below box to verify your email.
      </p>
      <ResetPassVerifyForm></ResetPassVerifyForm>
    </div>
  );
}
