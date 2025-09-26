import { IoIosArrowBack } from "react-icons/io";
import RegisterVerifyForm from "../../../components/Authentication/RegisterVerifyForm";
import Link from "next/link";

export const metadata = {
  title: "ScapeSync | Verify Registration",
  description:
    "Enter the verification code sent to your email to confirm your ScapeSync account and unlock access to all features.",
};

export default function VerifyRegistration() {
  return (
    <div className="max-w-[480px] mx-auto">
      <Link
        href={"/register"}
        className="text-[#49AE44] text-sm flex items-center gap-2 font-bold mb-8"
      >
        <IoIosArrowBack />
        Back
      </Link>
      <h1 className="text-[#212B36] text-2xl font-bold mb-2">
        Please check your email!
      </h1>
      <RegisterVerifyForm></RegisterVerifyForm>
    </div>
  );
}
