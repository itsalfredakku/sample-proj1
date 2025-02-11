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
    // Removed gap from inlineStyles to apply spacing per child instead
    const inlineStyles: React.CSSProperties = {
        display: "flex",
        flexDirection: orientation === "vertical" ? "column" : "row",
        justifyContent,
        alignItems,
    };

    // Apply margin spacing to each child except the last one
    const childrenArray = React.Children.toArray(children);
    const spacedChildren = childrenArray.map((child, index) => {
        if (!React.isValidElement(child)) return child;
        let marginStyle = {};
        if (gap) {
            if (orientation === "vertical" && index < childrenArray.length - 1) {
                marginStyle = { marginBottom: gap };
            } else if (orientation === "horizontal" && index < childrenArray.length - 1) {
                marginStyle = { marginRight: gap };
            }
        }
        // Cast child to React.ReactElement<any> to safely retrieve style property
        const childStyle = ((child as React.ReactElement<any>).props.style) || {};
        return React.cloneElement(child as React.ReactElement<any>, { style: { ...childStyle, ...marginStyle } });
    });

    return (
        <div 
            className={className}
            style={{ 
                ...inlineStyles,
                ...style
            }}
        >
            {spacedChildren}
        </div>
    );
}
