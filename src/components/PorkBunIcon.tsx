import React from "react";

interface PorkBunIconProps {
  size?: number;
  className?: string;
}

const PorkBunIcon: React.FC<PorkBunIconProps> = ({ size = 56, className = "" }) => (
  <span className={className} style={{ display: "inline-block", lineHeight: 0 }}>
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="28" cy="38" rx="18" ry="12" fill="#FDE68A" />
      <ellipse cx="28" cy="32" rx="12" ry="8" fill="#F9CBA7" />
      <ellipse cx="28" cy="30" rx="8" ry="5" fill="#F7BFA3" />
      <path d="M20 36 Q28 40 36 36" stroke="#EABF83" strokeWidth="2" fill="none" />
      <ellipse cx="24" cy="34" rx="1.2" ry="1.6" fill="#A97C50" />
      <ellipse cx="32" cy="34" rx="1.2" ry="1.6" fill="#A97C50" />
      <ellipse cx="28" cy="40" rx="2.5" ry="1.2" fill="#EABF83" />
    </svg>
  </span>
);

export default PorkBunIcon; 