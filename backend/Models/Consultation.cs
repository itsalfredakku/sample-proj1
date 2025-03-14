﻿using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Consultation
{
    public Guid Id { get; set; }

    public DateTime? ConsultationDate { get; set; }

    public string? Description { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<ConsultationAttachment> ConsultationAttachments { get; set; } = new List<ConsultationAttachment>();

    public virtual ICollection<PatientToConsultation> PatientToConsultations { get; set; } = new List<PatientToConsultation>();
}
