import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mt-6 ml-8">
      <Link href={"/"}>
        <Image
          src={
            "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758740908/ScapeSync-Logo-Black_jlq8s6.png"
          }
          width={137}
          height={56}
          alt="ScapeSync Logo"
        ></Image>
      </Link>
    </nav>
  );
}
