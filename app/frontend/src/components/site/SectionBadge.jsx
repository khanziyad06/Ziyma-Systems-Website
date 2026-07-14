export const SectionBadge = ({ number, label, border = "border-[#e5e0d5]" }) => (
  <div className="flex items-center gap-3 mb-6 sm:mb-8">
    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#142523] text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
      {number}
    </span>
    <span className={`text-[12px] sm:text-[13px] font-medium text-[#142523] border ${border} rounded-full px-3 sm:px-4 py-1 sm:py-1.5`}>
      {label}
    </span>
  </div>
);
