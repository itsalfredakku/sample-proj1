import React from "react";
import { Orientation } from "./orientation";

interface StackProps {
    orientation?: Orientation;
    justifyContent?: React.CSSProperties["justifyContent"];
    alignItems?: React.CSSProperties["alignItems"];
    gap?: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function Stack({
    orientation = "vertical",
    justifyContent,
    alignItems,
    gap,
    children,
    className,
    style,
}: StackProps) {
    // Explicitly annotate the type as React.CSSProperties
    const inlineStyles: React.CSSProperties = {
        display: "flex",
        flexDirection: orientation === "vertical" ? "column" : "row",
        justifyContent,
        alignItems,
        gap,
    };

    return (
        <div 
            className={className}
            style={{ 
                ...inlineStyles,
                ...style
            }}
        >
            {children}
        </div>
    );
}
