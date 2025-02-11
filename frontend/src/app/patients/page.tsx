import Row from "@/components/row";
import Stack from "@/components/stack";


export default function PatientsPage() {
    return (
        <Stack className="w-full px-4">
            <Row className="flex flex-row items-center justify-between">
                <h3 className="text-2xl font-bold">Patients</h3>
                <a href="/patients/new" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                    New Patient
                </a>
            </Row>
            <div className="grid gap-6">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-lg font-semibold">Patient Name</span>
                        <span className="text-lg font-semibold">Age</span>
                    </div>
                </div>
            </div>
        </Stack>
    );
}