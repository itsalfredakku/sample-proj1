import React from "react";

interface ColumnProps {
  size: number;
  children: React.ReactNode;
}

export default function Column({ size, children }: ColumnProps) {
  // Compute width percentage (assuming a 12-column grid)
  const widthPercent = (size / 12) * 100;
  return (
    <div 
      style={{ width: `${widthPercent}%` }} // set width from size prop
      className="px-2"
    >
      {children}
    </div>
  );
}