using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class ConsultationAttachment
{
    public Guid Id { get; set; }

    public Guid ConsultationId { get; set; }

    public string FileName { get; set; } = null!;

    public string FilePath { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public virtual Consultation Consultation { get; set; } = null!;
}
