using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class PatientToConsultation
{
    public Guid PatientId { get; set; }

    public Guid ConsultationId { get; set; }

    public DateTime CreatedAt { get; set; }

    public virtual Consultation Consultation { get; set; } = null!;

    public virtual Patient Patient { get; set; } = null!;
}
