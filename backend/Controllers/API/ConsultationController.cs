using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;
using System.Collections.Generic;

namespace Backend.Controllers.API;

[ApiController]
[Route("api/consultations")]
public partial class ConsultationController(SampleDbContext context) : ControllerBase
{
    // Hook methods for partial classes.
    // Called before returning consultations list.
    partial void OnConsultationsRead(ref IQueryable<Consultation> items);
    // Called before returning a single consultation.
    partial void OnConsultationGet(ref Consultation consultation);
    // Called after creating a consultation.
    partial void OnConsultationCreated(Consultation consultation);
    // Called after updating a consultation.
    partial void OnConsultationUpdated(Consultation consultation);
    // Called after deleting a consultation.
    partial void OnConsultationDeleted(Consultation consultation);

    // GET: api/consultations
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Consultation>>> GetConsultations()
    {
        var items = context.Consultations
            .Include(c => c.PatientToConsultations)
            .AsQueryable();
            
        OnConsultationsRead(ref items);
        var consultations = await items.ToListAsync();
        return Ok(consultations);
    }

    // GET: api/consultations/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Consultation>> GetConsultation(Guid id)
    {
        var consultation = await context.Consultations
            .Include(c => c.PatientToConsultations)
            .FirstOrDefaultAsync(c => c.Id == id);

        if (consultation == null)
            return NotFound();

        OnConsultationGet(ref consultation);
        return Ok(consultation);
    }

    // DTO for creating a Consultation
    public record CreateConsultationRequest(string Description, DateTime ConsultationAt, IEnumerable<Guid> PatientIds);

    // POST: api/consultations
    [HttpPost]
    public async Task<ActionResult<Consultation>> CreateConsultation([FromBody] CreateConsultationRequest request)
    {
        if (request == null)
            return BadRequest();

        var consultation = new Consultation
        {
            Id = Guid.NewGuid(),
            
        };

        context.Consultations.Add(consultation);

        // Create PatientToConsultation mappings.
        foreach (var patientId in request.PatientIds)
        {
            var patientToConsultation = new PatientToConsultation
            {
                PatientId = patientId,
                ConsultationId = consultation.Id,
                CreatedAt = DateTime.UtcNow
            };
            context.PatientToConsultations.Add(patientToConsultation);
        }

        await context.SaveChangesAsync();
        OnConsultationCreated(consultation);
        return CreatedAtAction(nameof(GetConsultation), new { id = consultation.Id }, consultation);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateConsultation(Guid id, [FromBody] Consultation updatedConsultation)
    {
        if (id != updatedConsultation.Id)
            return BadRequest("ID mismatch");

        var existingConsultation = await context.Consultations.FindAsync(id);
        if (existingConsultation == null)
            return NotFound();

        existingConsultation.Description = updatedConsultation.Description;
        existingConsultation.ConsultationDate = updatedConsultation.ConsultationDate;

        context.Entry(existingConsultation).State = EntityState.Modified;
        
        try
        {
            await context.SaveChangesAsync();
            OnConsultationUpdated(existingConsultation);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await context.Consultations.AnyAsync(c => c.Id == id))
                return NotFound();
            throw;
        }
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteConsultation(Guid id)
    {
        var consultation = await context.Consultations.FindAsync(id);
        if (consultation == null)
            return NotFound();

        context.Consultations.Remove(consultation);
        await context.SaveChangesAsync();
        OnConsultationDeleted(consultation);
        return NoContent();
    }
}