import React from "react";

interface RowProps {
	justifyContent?: "start" | "center" | "end" | "stretch" | React.CSSProperties["justifyContent"];
	alignItems?:  "start" | "center" | "end" | "stretch" | React.CSSProperties["alignItems"];
	gap?: string;
	reverse?: boolean;
	children?: React.ReactNode;
}

export default function Row({
	justifyContent = "flex-start",
	alignItems = "stretch",
	gap = "0",
	reverse = false,
	children,
}: RowProps) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: justifyContent === "start" ? "flex-start" : justifyContent === "end" ? "flex-end" : justifyContent === "center" ? "center" : justifyContent,
				alignItems,
				gap,
				flexDirection: reverse ? "row-reverse" : "row",
			}}
		>
			{children}
		</div>
	);
}