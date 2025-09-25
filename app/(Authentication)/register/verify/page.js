import { IoIosArrowBack } from "react-icons/io";
import RegisterVerifyForm from "../../../components/Authentication/RegisterVerifyForm";
import Link from "next/link";

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
      <p className="text-[#637381]">
        We&apos;ve emailed a 6-digit confirmation code to acb@domain, please
        enter the code in below box to verify your email.
      </p>
      <RegisterVerifyForm></RegisterVerifyForm>
    </div>
  );
}
