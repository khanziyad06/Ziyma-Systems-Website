import { ArrowRight } from "lucide-react";

export const RollButton = ({ label, onClick, variant = "orange", testId, className = "" }) => {
  const base = variant === "orange"
    ? "bg-[#E2603B] hover:bg-[#cf5230] text-white"
    : "bg-[#142523] hover:bg-[#1d322f] text-white";
  const circleArrow = variant === "orange" ? "text-[#E2603B]" : "text-[#142523]";
  return (
    <button
      data-testid={testId}
      onClick={onClick}
      className={`group inline-flex items-center gap-3 rounded-full pl-5 sm:pl-6 pr-2 py-2 text-[13px] sm:text-[14px] font-medium transition-colors duration-300 ${base} ${className}`}
    >
      <span className="relative overflow-hidden h-[20px]">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="h-[20px] leading-[20px]">{label}</span>
          <span className="h-[20px] leading-[20px]">{label}</span>
        </span>
      </span>
      <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white">
        <ArrowRight
          size={14}
          className={`${circleArrow} transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45`}
        />
      </span>
    </button>
  );
};
