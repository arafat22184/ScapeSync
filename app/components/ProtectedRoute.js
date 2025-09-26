"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";

export default function RedirectIfLoggedIn({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (session) {
      router.replace("/");
    }
  }, [session, status, router]);

  if (status === "loading" || session) {
    return <Loading></Loading>;
  }

  return children;
}
