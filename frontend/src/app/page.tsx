import Image from "next/image";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col gap-12 items-center justify-center max-w-3xl px-4">
        <h1 className="text-5xl font-bold text-center">Sample Project</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
          <Image src="/dotnet.svg" alt=".NET Core" width={80} height={80} priority />
          <Image src="/next.svg" alt="Next.js" width={80} height={80} priority className="dark:invert" />
          <Image src="/tailwind.svg" alt="Tailwind CSS" width={80} height={80} priority />
          <Image src="/sqlserver.svg" alt="SQL Server" width={80} height={80} priority />
        </div>

        <div className="grid gap-6 text-center sm:text-left">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Backend (.NET Core)</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Robust API development with C# and .NET Core, providing high-performance and scalable backend services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Frontend (Next.js)</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Modern React framework with server-side rendering and optimal developer experience.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Styling (Tailwind CSS)</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Utility-first CSS framework for rapid UI development with zero runtime overhead.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Database (SQL Server)</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Enterprise-grade relational database for reliable data storage and complex queries.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-wrap justify-center">
          <Button
            className="bg-[#512BD4] text-white hover:bg-[#4116AA]"
            href="https://learn.microsoft.com/en-us/aspnet/core/">
            .NET Docs
          </Button>
          <Button
            className="bg-black text-white dark:bg-white dark:text-black"
            href="https://nextjs.org/docs">
            Next.js Docs
          </Button>
          <Button
            className="bg-[#38bdf8] text-white hover:bg-[#0ea5e9]"
            href="https://tailwindcss.com/docs">
            Tailwind Docs
          </Button>
          <Button
            className="bg-[#CC2927] text-white hover:bg-[#B71C1C]"
            href="https://learn.microsoft.com/en-us/sql/">
            SQL Server Docs
          </Button>
        </div>
      </div>
    </div>
  );
}
