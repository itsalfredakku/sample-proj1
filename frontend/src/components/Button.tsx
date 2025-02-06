export default function Button({
    children,
    href,
    className,
}: Readonly<{
    children: React.ReactNode,
    href?: string,
    className?: string
}>) {
    return (
        <a
            className="rounded-full border border-solid transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}