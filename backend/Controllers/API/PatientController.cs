using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers.API;

[ApiController]
[Route("api/[controller]")]
public partial class PatientController(Backend.Data.SampleDbContext context) : Controller
{

    [HttpGet]
    public IEnumerable<Backend.Models.Patient> GetPatients()
    {
        var items = context.Patients.AsQueryable<Backend.Models.Patient>();
        this.OnBillingsRead(ref items);

        return items;
    }

    partial void OnBillingsRead(ref IQueryable<Backend.Models.Patient> items);

    // partial void OnBillingGet(ref SingleResult<Backend.Models.Patient> item);

}