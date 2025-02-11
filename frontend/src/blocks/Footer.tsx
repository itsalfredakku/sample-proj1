import Image from "next/image";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 py-6 border-t border-gray-200 dark:border-gray-700 flex-wrap items-center justify-center">
      <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">

        Made with
        <Image
          aria-hidden
          src="/images/heart.svg"
          alt="heart icon"
          width={16}
          height={16}
        />
        by
        <a
          className="font-bold hover:underline hover:underline-offset-4"
          href="https://github.com/itsalfredakku"
          target="_blank"
          rel="noopener noreferrer"
        >
          Akash Shah
        </a>
      </p>

    </footer>
  );
}
