CREATE TABLE [dbo].[Patient]
(
    [Id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF_Patient_Id] DEFAULT NEWID(),
    [Name] VARCHAR(100) NOT NULL,
    [DateOfBirth] DATE NULL,
    [Address] VARCHAR(200) NULL,
    [Email] VARCHAR(150) NOT NULL,
    [PhoneNumber] VARCHAR(20) NULL,
    [CreatedAt] DATETIME2 NOT NULL CONSTRAINT [DF_Patient_CreatedAt] DEFAULT (SYSDATETIME()),
    [UpdatedAt] DATETIME2 NULL,
    CONSTRAINT [PK_Patient] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [UQ_Patient_Email] UNIQUE ([Email])
);

CREATE TABLE [dbo].[Consultation]
(
    [Id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF_Consultation_Id] DEFAULT NEWID(),
    [ConsultationDate] DATETIME2 NULL,
    [Description] NVARCHAR(MAX) NULL,
    [CreatedAt] DATETIME2 NOT NULL CONSTRAINT [DF_Consultation_CreatedAt] DEFAULT (SYSDATETIME()),
    [UpdatedAt] DATETIME2 NULL,
    CONSTRAINT [PK_Consultation] PRIMARY KEY CLUSTERED ([Id] ASC)
);

CREATE TABLE [dbo].[ConsultationAttachment]
(
    [Id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF_ConsultationAttachment_Id] DEFAULT NEWID(),
    [ConsultationId] UNIQUEIDENTIFIER NOT NULL,
    [FileName] VARCHAR(100) NOT NULL,
    [FilePath] VARCHAR(200) NOT NULL,
    [CreatedAt] DATETIME2 NOT NULL CONSTRAINT [DF_ConsultationAttachment_CreatedAt] DEFAULT (SYSDATETIME()),
    CONSTRAINT [PK_ConsultationAttachment] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_ConsultationAttachment_Consultation] FOREIGN KEY ([ConsultationId]) REFERENCES [dbo].[Consultation] ([Id]) ON DELETE CASCADE
);

CREATE TABLE [dbo].[PatientToConsultation]
(
    [PatientId] UNIQUEIDENTIFIER NOT NULL,
    [ConsultationId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedAt] DATETIME2 NOT NULL CONSTRAINT [DF_PatientToConsultation_CreatedAt] DEFAULT (SYSDATETIME()),
    CONSTRAINT [PK_PatientToConsultation] PRIMARY KEY CLUSTERED ([PatientId] ASC, [ConsultationId] ASC),
    CONSTRAINT [FK_PatientToConsultation_Patient] FOREIGN KEY ([PatientId]) REFERENCES [dbo].[Patient] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_PatientToConsultation_Consultation] FOREIGN KEY ([ConsultationId]) REFERENCES [dbo].[Consultation] ([Id]) ON DELETE CASCADE
);

-- Add indexes for foreign keys
CREATE INDEX IDX_ConsultationAttachment_ConsultationId ON [dbo].[ConsultationAttachment] ([ConsultationId]);
CREATE INDEX IDX_PatientToConsultation_PatientId ON [dbo].[PatientToConsultation] ([PatientId]);
CREATE INDEX IDX_PatientToConsultation_ConsultationId ON [dbo].[PatientToConsultation] ([ConsultationId]);