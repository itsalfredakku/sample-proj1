using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Patient
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    public DateOnly? DateOfBirth { get; set; }

    public string? Address { get; set; }

    public string Email { get; set; } = null!;

    public string? PhoneNumber { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<PatientToConsultation> PatientToConsultations { get; set; } = new List<PatientToConsultation>();
}
