// import Button from "@/components/button";
import { Button } from "@/components/ui/button"

import Column from "@/components/column";
import Row from "@/components/row";
import Stack from "@/components/stack";


export default function PatientsPage() {
    return (
        <Stack className="w-full px-4">
            <Row>
                <Column size={6}>
                    <Stack orientation="horizontal" justifyContent="start">
                        <h1 className="text-2xl font-semibold">Patients</h1>
                    </Stack>
                </Column>
                <Column size={6}>
                    <Stack orientation="horizontal" justifyContent="end">
                    <Button>New Patient</Button>
                        {/* <Button text="New Patient" /> */}
                        {/* <a href="/patients/new" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                            New Patient
                        </a> */}
                    </Stack>
                </Column>
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