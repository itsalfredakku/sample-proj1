import React from "react";

interface ColumnProps {
  size?: number | string;
  sizeXs?: number | string;
  sizeSm?: number | string;
  sizeMd?: number | string;
  sizeLg?: number | string;
  xl?: number | string;
  className?: string;
  children?: React.ReactNode;
}

export default function Column({
  size,
  sizeXs,
  sizeSm,
  sizeMd,
  sizeLg,
  xl,
  className,
  children,
}: ColumnProps) {
  // Compute responsive classes assuming convention: 
  // col-[prop] for default, col-xs-[value], col-sm-[value], etc.
  const responsiveClasses = [
    size && `col-${size}`,
    sizeXs && `col-xs-${sizeXs}`,
    sizeSm && `col-sm-${sizeSm}`,
    sizeMd && `col-md-${sizeMd}`,
    sizeLg && `col-lg-${sizeLg}`,
    xl && `col-xl-${xl}`,
  ]
    .filter(Boolean)
    .join(" ");
    
  return (
    <div className={`${className || ""} ${responsiveClasses}`.trim()}>
      {children}
    </div>
  );
}