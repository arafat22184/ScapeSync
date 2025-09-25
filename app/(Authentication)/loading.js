import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
      <div className="text-center space-y-8">
        {/* Logo */}
        <div className="animate-pulse">
          <Image
            src="https://res.cloudinary.com/ddckuxsjx/image/upload/v1758740908/ScapeSync-Logo-Black_jlq8s6.png"
            width={200}
            height={80}
            alt="ScapeSync Logo"
            className="mx-auto"
          />
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2">
          <div
            className="w-3 h-3 bg-green-400 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-green-500 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-green-600 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>

        {/* Loading Message */}
        <p className="text-gray-700 font-light">Preparing your experience...</p>
      </div>
    </div>
  );
}
