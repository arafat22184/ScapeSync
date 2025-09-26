"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { toast } from "sonner";

export default function Navbar() {
  const { data: session } = useSession();
  const [userDetail, setUserDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const userName = userDetail?.data?.email.split("@")[0];

  // Fetch user detail from your API if logged in
  useEffect(() => {
    if (!session?.accessToken) return;

    const fetchUserDetail = async () => {
      try {
        const res = await fetch(
          "https://apitest.softvencefsd.xyz/api/user-detail",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch user details");

        const data = await res.json();
        setUserDetail(data);
      } catch (err) {
        console.error("Error fetching user details:", err);
      }
    };

    fetchUserDetail();
  }, [session]);

  // Logout function
  const handleLogout = async () => {
    if (!session?.accessToken) {
      // Clear next-auth session
      await signOut({ redirect: false });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://apitest.softvencefsd.xyz/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
          "Content-Type": "application/json",
        },
      });

      // Clear next-auth session
      await signOut({ redirect: false });

      toast.success("Logged out successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Logout failed, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="flex items-center justify-between my-5">
      <Link href={"/"}>
        <Image
          src="https://res.cloudinary.com/ddckuxsjx/image/upload/v1758740908/ScapeSync-Logo-Black_jlq8s6.png"
          width={147}
          height={60}
          alt="ScapeSync Logo"
        />
      </Link>

      {/* Right side */}
      {session ? (
        <div className="flex items-center gap-4">
          {/* Profile */}
          <div className="flex items-center gap-2">
            {session.user?.image ? (
              <Image
                src={session.user.image}
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-300 border-2 border-green-500">
                <FiUser size={20} />
              </div>
            )}
            <span className="font-semibold text-gray-800">
              {!session?.user?.name === "undefined undefined" || userName}
            </span>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            disabled={loading}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>
      ) : (
        <Link
          href={"/userRole"}
          className="bg-[#3BA334] hover:bg-[#3ba334ea] font-bold text-white rounded-lg px-6.5 py-2.5 cursor-pointer"
        >
          Get Started
        </Link>
      )}
    </nav>
  );
}
