import Image from "next/image";
import Link from "next/link";

export default function RegistrationSuccess() {
  return (
    <div>
      <Image
        src={
          "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758785327/Success_zlxe3r.png"
        }
        width={332}
        height={328}
        alt="Flare"
      ></Image>
      <h1 className="text-[#212B36] text-2xl font-bold mt-9 mb-4">
        Account Created Successfully!
      </h1>
      <p className="text-[#637381]">
        Your account is set up! Just verify your email to get started.
      </p>
      <Link
        href={"/"}
        className="block text-center mt-10 w-full py-3 bg-[#49AE44] rounded-lg text-white font-bold cursor-pointer hover:bg-[#3e8e3a] transition-colors duration-200"
      >
        Go to Home
      </Link>
    </div>
  );
}
