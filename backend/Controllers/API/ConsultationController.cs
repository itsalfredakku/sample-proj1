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
    // GET: api/consultations
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Consultation>>> GetConsultations()
    {
        // Eager-load associated PatientToConsultation entries if needed.
        var consultations = await context.Consultations
                                         .Include(c => c.PatientToConsultations)
                                         .ToListAsync();
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
        return CreatedAtAction(nameof(GetConsultation), new { id = consultation.Id }, consultation);
    }
}