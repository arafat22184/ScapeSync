import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FAQ = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border border-[#C7E6C5] rounded-2xl p-6">
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
          className="flex-shrink-0 w-8 h-8 bg-[#ECFCEB] rounded-full flex items-center justify-center cursor-pointer"
          onClick={onToggle}
        >
          {isOpen ? (
            // Minus Icon
            <FaMinus />
          ) : (
            // Plus Icon
            <FaPlus />
          )}
        </button>
      </div>

      {/* Answer show/hide */}
      {isOpen && (
        <div className="pt-6">
          <div className="text-sm text-[#637381] pl-0 md:pl-4">
            {faq.answer}
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
