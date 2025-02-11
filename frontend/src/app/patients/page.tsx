

export default function PatientsPage() {
    return (
        <div className="max-w-3xl px-4">
            <div className="flex flex-row items-center justify-between">
                <h3 className="text-2xl font-bold">Patients</h3>
                <a href="/patients/new" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                    New Patient
                </a>
            </div>
            <div className="grid gap-6">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-lg font-semibold">Patient Name</span>
                        <span className="text-lg font-semibold">Age</span>
                    </div>
                </div>
            </div>
        </div>
    );
}