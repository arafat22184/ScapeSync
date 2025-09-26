import { Public_Sans } from "next/font/google";
import "../globals.css";
import RedirectIfLoggedIn from "../components/ProtectedRoute";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "ScapeSync | Identify Yourself",
  description:
    "Choose your role in ScapeSync to personalize your experience. Whether you're a client or a business owner, get tailored features to meet your needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="antialiased">
        <main className="min-h-[calc(100vh-80px)] mx-auto max-w-7xl flex justify-center items-center">
          <RedirectIfLoggedIn>{children}</RedirectIfLoggedIn>
        </main>
      </body>
    </html>
  );
}
