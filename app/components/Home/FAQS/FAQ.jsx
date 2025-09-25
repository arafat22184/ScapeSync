import React, { useRef, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FAQ = ({ faq, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen]);

  return (
    <div className="border border-[#C7E6C5] rounded-2xl p-6 transition-all duration-300 hover:border-[#A0D99C]">
      {/* Question Row */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onToggle}
      >
        <div className="font-semibold text-[#212B36] text-lg pr-4">
          {faq.question}
        </div>

        {/* Plus/Minus Button */}
        <button
          className="flex-shrink-0 w-8 h-8 bg-[#ECFCEB] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#DCF8DA] hover:scale-110"
          onClick={onToggle}
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        >
          {isOpen ? (
            <FaMinus className="text-[#212B36] transition-transform duration-300 rotate-180" />
          ) : (
            <FaPlus className="text-[#212B36] transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Answer with smooth animation */}
      <div
        ref={contentRef}
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <div className="pt-6">
          <div className="text-sm text-[#637381] pl-0 md:pl-4">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
