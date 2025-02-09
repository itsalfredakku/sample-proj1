using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;

namespace Backend.Controllers.API;

[ApiController]
[Route("api/patients")]
public partial class PatientController(SampleDbContext context) : ControllerBase // Changed to ControllerBase
{
    // Hook methods for partial classes.
    // Called before returning patients list.
    partial void OnPatientsRead(ref IQueryable<Patient> items);
    // Called before returning a single patient.
    partial void OnPatientGet(ref Patient patient);
    // Called after creating a patient.
    partial void OnPatientCreated(Patient patient);
    // Called after updating a patient.
    partial void OnPatientUpdated(Patient patient);
    // Called after deleting a patient.
    partial void OnPatientDeleted(Patient patient);

    // GET: api/patients
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Patient>>> GetPatients()
    {
        var items = context.Patients.AsQueryable();
        OnPatientsRead(ref items);
        var patients = await items.ToListAsync();
        return Ok(patients);
    }

    // GET: api/patients/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Patient>> GetPatientById(Guid id)
    {
        var patient = await context.Patients.FirstOrDefaultAsync(i => i.Id == id);
        if (patient == null)
        {
            return NotFound();
        }
        OnPatientGet(ref patient);
        return Ok(patient);
    }

    // POST: api/patients
    [HttpPost]
    public async Task<ActionResult<Patient>> CreatePatient([FromBody] Patient patient)
    {
        if (patient == null)
        {
            return BadRequest();
        }

        context.Patients.Add(patient);
        await context.SaveChangesAsync();
        OnPatientCreated(patient);

        return CreatedAtAction(nameof(GetPatientById), new { id = patient.Id }, patient);
    }

    // PUT: api/patients/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatePatient(Guid id, [FromBody] Patient updatedPatient)
    {
        if (id != updatedPatient.Id)
        {
            return BadRequest("ID mismatch");
        }

        var existingPatient = await context.Patients.FindAsync(id);
        if (existingPatient == null)
        {
            return NotFound();
        }

        // Update the fields (adjust field names as necessary)
        existingPatient.Name = updatedPatient.Name;
        existingPatient.DateOfBirth = updatedPatient.DateOfBirth;
        existingPatient.Address = updatedPatient.Address;
        // ... update other fields as needed

        context.Entry(existingPatient).State = EntityState.Modified;
        try
        {
            await context.SaveChangesAsync();
            OnPatientUpdated(existingPatient);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await context.Patients.AnyAsync(p => p.Id == id))
            {
                return NotFound();
            }
            throw;
        }
        return NoContent();
    }

    // DELETE: api/patients/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePatient(Guid id)
    {
        var patient = await context.Patients.FindAsync(id);
        if (patient == null)
        {
            return NotFound();
        }

        context.Patients.Remove(patient);
        await context.SaveChangesAsync();
        OnPatientDeleted(patient);
        return NoContent();
    }
}
