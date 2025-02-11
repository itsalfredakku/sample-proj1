using Backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi(options => {
    options.AddDocumentTransformer((document, context, cancellationToken) =>
    {
        //// Optionally modify the document here.
        // document.Info.Title = "Sample API";
        // document.Info.Version = "v1";
        return Task.CompletedTask;
    });
});
builder.Services.AddDbContext<SampleDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("SampleDbContext"));
});
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// app.UseHttpsRedirection();
app.MapControllers();
app.UseStaticFiles();
app.Run();

