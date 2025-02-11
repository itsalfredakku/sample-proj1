import React from "react";

interface RowProps {
	justifyContent?: "start" | "center" | "end" | "stretch" | React.CSSProperties["justifyContent"];
	alignItems?:  "start" | "center" | "end" | "stretch" | React.CSSProperties["alignItems"];
	gap?: string;
	reverse?: boolean;
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export default function Row({
	justifyContent = "flex-start",
	alignItems = "stretch",
	gap = "0",
	reverse = false,
	children,
	className,
	style,
}: RowProps) {
	const inlineStyles: React.CSSProperties = {
		display: "flex",
		justifyContent: justifyContent === "start" ? "flex-start" : justifyContent === "end" ? "flex-end" : justifyContent === "center" ? "center" : justifyContent,
		alignItems,
		gap,
		flexDirection: reverse ? "row-reverse" : "row",
	};

	return (
		<div
			className={className}
			style={{
				...inlineStyles,
				...style,
			}}
		>
			{children}
		</div>
	);
}