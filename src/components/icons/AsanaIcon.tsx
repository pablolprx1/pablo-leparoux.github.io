
import React from "react";

const AsanaIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = "",
  size = 24
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="7" r="5" />
      <circle cx="6" cy="17" r="5" />
      <circle cx="18" cy="17" r="5" />
    </svg>
  );
};

export default AsanaIcon;
