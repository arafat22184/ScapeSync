"use client";
import Link from "next/link";
import { useState, useRef } from "react";

export default function ResetPassVerifyForm() {
  const [codes, setCodes] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (value && !/^\d$/.test(value)) return;

    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!codes[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleVerify = () => {
    const verificationCode = codes.join("");
    if (verificationCode.length === 6) {
      console.log("Verification code:", verificationCode);
      // Add your verification logic here
    }
  };

  return (
    <div className="mt-10">
      {/* 6-Digit Input Fields */}
      <div className="flex justify-center space-x-3 mb-6">
        {codes.map((code, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={code}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-2xl font-semibold text-center border-2 border-gray-300 rounded-lg focus:border-[#49AE44] focus:outline-none transition-colors duration-200"
          />
        ))}
      </div>

      <button
        onClick={handleVerify}
        className="w-full py-3 bg-[#49AE44] text-white font-bold rounded-lg hover:bg-[#3e8e3a] transition-colors duration-200 mb-4 cursor-pointer"
      >
        Verify
      </button>

      <p className="text-center text-sm text-gray-600">
        Didn't receive code?{" "}
        <Link href="#" className="text-[#49AE44] font-semibold hover:underline">
          Resend code
        </Link>
      </p>
    </div>
  );
}
