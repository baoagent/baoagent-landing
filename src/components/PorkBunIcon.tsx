import React from "react";

interface PorkBunIconProps {
  size?: number;
  className?: string;
}

const PorkBunIcon: React.FC<PorkBunIconProps> = ({ size = 56, className = "" }) => (
  <span className={className} style={{ display: "inline-block", lineHeight: 0 }}>
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Base bao (steamed bun) */}
      <ellipse cx="28" cy="38" rx="18" ry="12" fill="#FDE68A" />
      <ellipse cx="28" cy="32" rx="12" ry="8" fill="#F9CBA7" />
      <ellipse cx="28" cy="30" rx="8" ry="5" fill="#F7BFA3" />
      
      {/* Bao details */}
      <path d="M20 36 Q28 40 36 36" stroke="#EABF83" strokeWidth="2" fill="none" />
      <ellipse cx="24" cy="34" rx="1.2" ry="1.6" fill="#A97C50" />
      <ellipse cx="32" cy="34" rx="1.2" ry="1.6" fill="#A97C50" />
      <ellipse cx="28" cy="40" rx="2.5" ry="1.2" fill="#EABF83" />
      
      {/* Chef's hat */}
      <ellipse cx="28" cy="18" rx="12" ry="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
      <ellipse cx="28" cy="16" rx="8" ry="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
      <ellipse cx="28" cy="14" rx="4" ry="2" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
      
      {/* AI chip patterns on hat brim */}
      <rect x="20" y="20" width="2" height="2" fill="#3B82F6" rx="0.5" />
      <rect x="24" y="20" width="2" height="2" fill="#3B82F6" rx="0.5" />
      <rect x="28" y="20" width="2" height="2" fill="#3B82F6" rx="0.5" />
      <rect x="32" y="20" width="2" height="2" fill="#3B82F6" rx="0.5" />
      <rect x="36" y="20" width="2" height="2" fill="#3B82F6" rx="0.5" />
      
      {/* Scroll/Dashboard */}
      <rect x="42" y="30" width="8" height="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" rx="1" />
      <rect x="43" y="31" width="6" height="2" fill="#F59E0B" rx="0.5" />
      <rect x="43" y="34" width="6" height="1" fill="#F59E0B" rx="0.5" />
      <rect x="43" y="36" width="4" height="1" fill="#F59E0B" rx="0.5" />
      <rect x="43" y="38" width="5" height="1" fill="#F59E0B" rx="0.5" />
      <rect x="43" y="40" width="3" height="1" fill="#F59E0B" rx="0.5" />
      
      {/* Scroll handle */}
      <ellipse cx="46" cy="42" rx="1" ry="0.5" fill="#F59E0B" />
    </svg>
  </span>
);

export default PorkBunIcon; 