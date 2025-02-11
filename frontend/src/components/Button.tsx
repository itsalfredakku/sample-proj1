import React from 'react';
import { Size } from './size';
import { ThemeVariant } from './theme-variant';

export default function Button({
    children,
    text,
    className,
    onClick,
    size,
    variant = 'filled',
}: Readonly<{
    children?: React.ReactNode;
    text?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    size?: Size;
    variant?: ThemeVariant;
}>) {
    const sizeClass = size === 'small'
        ? 'h-8 sm:h-9'
        : size === 'large'
            ? 'h-12 sm:h-14'
            : 'h-10 sm:h-12';

    // Clean variant lookup for clarity.
    const variants = {
        filled: {
            bg: 'bg-blue-500',
            text: 'text-white',
            hoverBg: 'hover:bg-blue-600',
            hoverText: '',
            border: ''
        },
        outlined: {
            bg: '',
            text: 'text-blue-500',
            hoverBg: 'hover:bg-blue-500',
            hoverText: 'hover:text-white',
            border: 'border border-solid border-blue-500'
        },
        flat: {
            bg: 'bg-gray-100',
            text: 'text-gray-800',
            hoverBg: 'hover:bg-gray-200',
            hoverText: '',
            border: ''
        },
        text: {
            bg: 'bg-transparent',
            text: 'text-blue-500',
            hoverBg: 'hover:bg-blue-50',
            hoverText: '',
            border: ''
        }
    };

    const variantClasses = variants[variant] || { bg: '', text: '', hoverBg: '', hoverText: '', border: '' };
    const finalHoverText = variantClasses.hoverText || 'hover:text-black';

    return (
        <button
            className={`rounded-full transition-colors flex items-center justify-center text-sm sm:text-base px-4 sm:px-5 sm:min-w-32 ${sizeClass} ${variantClasses.border} ${variantClasses.bg} ${variantClasses.text} ${variantClasses.hoverBg} ${finalHoverText} ${className || ''}`}
            onClick={onClick}
        >
            {text || children}
        </button>
    );
}