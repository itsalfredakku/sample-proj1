#!/bin/sh
dotnet ef dbcontext scaffold --project Backend.csproj --startup-project Backend.csproj --configuration Debug --framework net9.0 "Server=localhost,1433;Database=master;TrustServerCertificate=True;User ID=SA;Password=Pass!123" Microsoft.EntityFrameworkCore.SqlServer --context SampleDbContext --context-dir Data --force --output-dir Models
