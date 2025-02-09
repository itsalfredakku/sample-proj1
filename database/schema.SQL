CREATE TABLE [dbo].[Patient]
(
    [Id] UNIQUEIDENTIFIER NOT NULL,
    [Name] VARCHAR (100) NOT NULL,
    [DateOfBirth] DATE NULL,
    [Address] VARCHAR (200) NULL,
    [Email] VARCHAR (150) NOT NULL,
    [PhoneNumber] VARCHAR (20) NULL,
    [CreatedAt] DATETIME CONSTRAINT [DEFAULT_Patient_CreatedAt] DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    [UpdatedAt] DATETIME NULL,
    CONSTRAINT [PK_Patient] PRIMARY KEY CLUSTERED ([Id] ASC)
);

CREATE TABLE [dbo].[Consultation]
(
    [Id] UNIQUEIDENTIFIER NOT NULL,
    [ConsultationAt] DATETIME NULL,
    [Description] NVARCHAR(MAX) NULL,
    [CreatedAt] DATETIME CONSTRAINT [DEFAULT_Consultation_CreatedAt] DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    [UpdatedAt] DATETIME NULL,
    CONSTRAINT [PK_Consultation] PRIMARY KEY CLUSTERED ([Id] ASC)
);

CREATE TABLE [dbo].[PatientToConsultation]
(
    [PatientId] UNIQUEIDENTIFIER NOT NULL,
    [ConsultationId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedAt] DATETIME CONSTRAINT [DEFAULT_PatientToConsultation_CreatedAt] DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    CONSTRAINT [PK_PatientToConsultation] PRIMARY KEY CLUSTERED ([PatientId] ASC, [ConsultationId] ASC),
    CONSTRAINT [FK_PatientToConsultation_Patient] FOREIGN KEY ([PatientId]) REFERENCES [dbo].[Patient] ([Id]),
    CONSTRAINT [FK_PatientToConsultation_Consultation] FOREIGN KEY ([ConsultationId]) REFERENCES [dbo].[Consultation] ([Id])
);
