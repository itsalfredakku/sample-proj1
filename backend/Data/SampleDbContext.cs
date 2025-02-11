using System;
using System.Collections.Generic;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public partial class SampleDbContext : DbContext
{
    public SampleDbContext()
    {
    }

    public SampleDbContext(DbContextOptions<SampleDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Consultation> Consultations { get; set; }

    public virtual DbSet<ConsultationAttachment> ConsultationAttachments { get; set; }

    public virtual DbSet<Patient> Patients { get; set; }

    public virtual DbSet<PatientToConsultation> PatientToConsultations { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=localhost,1433;Database=SampleDb;TrustServerCertificate=True;User ID=SA;Password=Pass!123");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Consultation>(entity =>
        {
            entity.ToTable("Consultation");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(sysdatetime())");
        });

        modelBuilder.Entity<ConsultationAttachment>(entity =>
        {
            entity.ToTable("ConsultationAttachment");

            entity.HasIndex(e => e.ConsultationId, "IDX_ConsultationAttachment_ConsultationId");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(sysdatetime())");
            entity.Property(e => e.FileName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.FilePath)
                .HasMaxLength(200)
                .IsUnicode(false);

            entity.HasOne(d => d.Consultation).WithMany(p => p.ConsultationAttachments)
                .HasForeignKey(d => d.ConsultationId)
                .HasConstraintName("FK_ConsultationAttachment_Consultation");
        });

        modelBuilder.Entity<Patient>(entity =>
        {
            entity.ToTable("Patient");

            entity.HasIndex(e => e.Email, "UQ_Patient_Email").IsUnique();

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Address)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(sysdatetime())");
            entity.Property(e => e.Email)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<PatientToConsultation>(entity =>
        {
            entity.HasKey(e => new { e.PatientId, e.ConsultationId });

            entity.ToTable("PatientToConsultation");

            entity.HasIndex(e => e.ConsultationId, "IDX_PatientToConsultation_ConsultationId");

            entity.HasIndex(e => e.PatientId, "IDX_PatientToConsultation_PatientId");

            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(sysdatetime())");

            entity.HasOne(d => d.Consultation).WithMany(p => p.PatientToConsultations)
                .HasForeignKey(d => d.ConsultationId)
                .HasConstraintName("FK_PatientToConsultation_Consultation");

            entity.HasOne(d => d.Patient).WithMany(p => p.PatientToConsultations)
                .HasForeignKey(d => d.PatientId)
                .HasConstraintName("FK_PatientToConsultation_Patient");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
