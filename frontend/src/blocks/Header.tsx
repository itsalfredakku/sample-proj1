import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className="sticky top-0 row-start-1 flex justify-between items-center w-full px-6 py-4 pb-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 z-50">
            <div className="flex-shrink-0">
                <Link href="/">
                    <h3 className="text-2xl font-bold">Web App</h3>
                </Link>
            </div>
            <nav className="flex gap-6 items-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/consultations"
                >
                    Consultations
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/patients"
                >
                    Patients
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/about"
                >
                    About
                </a>
            </nav>
        </header>
    );
}