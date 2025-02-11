import React from "react";
import { Orientation } from "./orientation";

interface StackProps {
    orientation?: Orientation;
    justifyContent?: React.CSSProperties["justifyContent"];
    alignItems?: React.CSSProperties["alignItems"];
    gap?: string;
    children?: React.ReactNode;
}

export default function Stack({
    orientation = "vertical",
    justifyContent,
    alignItems,
    gap,
    children,
}: StackProps) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: orientation === "vertical" ? "column" : "row",
                justifyContent,
                alignItems,
                gap,
            }}
        >
            {children}
        </div>
    );
}
