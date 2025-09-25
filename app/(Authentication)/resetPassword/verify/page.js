import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import ResetPassVerifyForm from "../../../components/Authentication/ResetPassword/ResetPassVerifyForm";

export default function VerifyResetPass() {
  return (
    <div className="max-w-[480px] mx-auto">
      <Link
        href={"/resetPassword"}
        className="text-[#49AE44] text-sm flex items-center gap-2 font-bold mb-8"
      >
        <IoIosArrowBack />
        Back
      </Link>
      <h1 className="text-[#212B36] text-2xl font-bold mb-2">
        Please check your email!
      </h1>

      <ResetPassVerifyForm></ResetPassVerifyForm>
    </div>
  );
}
