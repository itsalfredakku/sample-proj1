'use client'
// import Button from "@/components/button";
import { Button } from "@/components/ui/button"

import Column from "@/components/column";
import Row from "@/components/row";
import Stack from "@/components/stack";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import React from "react";
import ApiService from "@/services/api-service";

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
];
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
                        <Button>New Patient</Button>
                        {/* <Button text="New Patient" /> */}
                        {/* <a href="/patients/new" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                            New Patient
                        </a> */}
                    </Stack>
                </Column>
            </Row>
            <Table>
                <TableCaption>A list of patients.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Patient Name</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Last consultation</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

        </Stack>
    );
}