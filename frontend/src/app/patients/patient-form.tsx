import { useState } from "react";
import Column from "@/components/column";
import Row from "@/components/row";
import Stack from "@/components/stack";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import DatePicker from "@/components/date-picker";
import { Textarea } from "@/components/ui/textarea";

export default function PatientForm() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);

    return (
        <Stack className="py-4">
            <Row>
                <Column size={3}>
                    <Label htmlFor="name">Name</Label>
                </Column>
                <Column size={9}>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </Column>
            </Row>
            <Row>
                <Column size={3}>
                    <Label>Phone Number</Label>
                </Column>
                <Column size={9}>
                    <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </Column>
            </Row>
            <Row>
                <Column size={3}>
                    <Label>Email</Label>
                </Column>
                <Column size={9}>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                </Column>
            </Row>
            <Row>
                <Column size={3}>
                    <Label>Date of Birth</Label>
                </Column>
                <Column size={9}>
                    <DatePicker className="w-full" placeholder="Select date of birth" value={dateOfBirth} onChange={(date) => setDateOfBirth(date)} />
                </Column>
            </Row>
            <Row>
                <Column size={3}>
                    <Label>Address</Label>
                </Column>
                <Column size={9}>
                    <Textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows={3}
                      className="w-full p-2 border rounded"
                    />
                </Column>
            </Row>
        </Stack>
    );
}