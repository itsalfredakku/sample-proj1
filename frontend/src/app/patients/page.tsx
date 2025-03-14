'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Column from "@/components/column";
import Row from "@/components/row";
import Stack from "@/components/stack";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import React from "react";
import ApiService from "@/services/api-service";
import PatientForm from "./patient-form"
import NoRecords from "@/blocks/no-records"
import Patient from "@/models/patient";


export default function PatientsPage() {
    const [patients, setPatients] = React.useState([]);
    React.useEffect(() => {
        ApiService.getInstance()
            .getPatients()
            .then((data) => setPatients(data));
    }, []);

    return (
        <Stack className="w-full px-4" gap="1rem">
            <Row>
                <Column size={6}>
                    <Stack orientation="horizontal" justifyContent="start">
                        <h1 className="text-2xl font-semibold">Patients</h1>
                    </Stack>
                </Column>
                <Column size={6}>
                    <Stack orientation="horizontal" justifyContent="end">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">New Patient</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                                <DialogHeader>
                                    <DialogTitle>New Patient</DialogTitle>
                                    <DialogDescription>
                                        Fill out the form below to add a new patient.
                                    </DialogDescription>
                                </DialogHeader>
                                <PatientForm />
                                <DialogFooter>
                                    <Button type="submit">Submit</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </Stack>
                </Column>
            </Row>
            <Table className="border">
                {/* <TableCaption>A list of patients.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="min-w-[100px]">Name</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="w-[200px]">Address</TableHead>
                        <TableHead className="text-right">Last consultation</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {patients.map((patient: Patient) => (
                        <TableRow key={patient.id}>
                            <TableCell>
                                <div>
                                    <h5 className="font-medium text-lg">{patient.name}</h5>
                                    <p className="font-light text-sm">{patient.id}</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div>
                                    <p>{patient.dateOfBirth}</p>
                                </div>
                            </TableCell>
                            <TableCell>{patient.phoneNumber}</TableCell>
                            <TableCell>{patient.email}</TableCell>
                            <TableCell className="text-right">{patient.lastConsultationAt}</TableCell>
                        </TableRow>
                    ))}
                    {patients.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={6}>
                                <div className="grid place-items-center">
                                    <NoRecords />
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Summary</TableCell>
                        <TableCell colSpan={3} className="text-right">10 of 100 patients</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </Stack>
    );
}