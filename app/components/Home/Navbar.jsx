import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-11/12 lg:max-w-10/12 mx-auto my-5">
      <Image
        src="https://res.cloudinary.com/ddckuxsjx/image/upload/v1758740908/ScapeSync-Logo-Black_jlq8s6.png"
        width={147}
        height={60}
        alt="ScapeSync Logo"
      />
      <button className="bg-[#3BA334] hover:bg-[#3ba334ea] font-bold text-white rounded-lg px-6.5 py-2.5 cursor-pointer">
        Get Started
      </button>
    </nav>
  );
}
