import { Public_Sans } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
