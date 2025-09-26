import { Public_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Authentication/Navbar";
import RedirectIfLoggedIn from "../components/ProtectedRoute";
import { Toaster } from "sonner";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "ScapeSync",
  description:
    "Built for business owners, employees, and clients streamline job scheduling, service tracking, and team management in one powerful app.",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="antialiased">
        <Toaster position="top-right" richColors theme="dark" />
        <Navbar></Navbar>
        <main className="min-h-[calc(100vh-80px)] mx-auto max-w-11/12 py-6 lg:py-0 lg:max-w-7xl flex justify-center items-center">
          <RedirectIfLoggedIn>{children}</RedirectIfLoggedIn>
        </main>
      </body>
    </html>
  );
}
