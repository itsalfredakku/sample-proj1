#!/bin/sh
# Use environment variables for security
CONNECTION_STRING=${CONNECTION_STRING:-"Server=localhost,1433;Database=SampleDb;TrustServerCertificate=True;User ID=SA;Password=Pass!123"}

# Scaffold the DbContext and Models
dotnet ef dbcontext scaffold \
  --project Backend.csproj \
  --startup-project Backend.csproj \
  --configuration Debug \
  --framework net9.0 \
  "$CONNECTION_STRING" \
  Microsoft.EntityFrameworkCore.SqlServer \
  --context SampleDbContext \
  --context-dir Data \
  --output-dir Models \
  --force \
  --verbose || { echo "Scaffolding failed"; exit 1; }


# #!/bin/sh
# dotnet ef dbcontext scaffold --project Backend.csproj --startup-project Backend.csproj --configuration Debug --framework net9.0 "Server=localhost,1433;Database=SampleDb;TrustServerCertificate=True;User ID=SA;Password=Pass!123" Microsoft.EntityFrameworkCore.SqlServer --context SampleDbContext --context-dir Data --output-dir Models --force --verbose
