import Card from "@/components/Card";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8 items-center justify-items-center">
          <Image src="/images/dotnet.svg" alt=".NET Core" width={80} height={80} priority />
          <Image src="/images/next.svg" alt="Next.js" width={80} height={80} priority className="dark:invert" />
          <Image src="/images/tailwind.svg" alt="Tailwind CSS" width={80} height={80} priority />
          <Image src="/images/sqlserver.svg" alt="SQL Server" width={80} height={80} priority />
        </div>
        <div className="grid gap-6 text-center sm:text-left">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Backend (.NET Core)</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Robust API with C# and .NET Core, providing high-performance and scalable backend services.
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
      </div>
    </div>
  );
}
