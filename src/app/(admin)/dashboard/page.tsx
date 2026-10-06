"use client"

import {
  Card,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Chip,
  Tabs,
  Tab,
  Avatar,
} from "@heroui/react"
import { useState } from "react"

const bookings = [
  { id: 1, customer: "Budi", barber: "Hendra", service: "Potong", date: "6 Oct 2026", status: "confirmed" },
  { id: 2, customer: "Andi", barber: "Rizal", service: "Cukur", date: "7 Okt 2026", status: "pending" },
  { id: 3, customer: "Rina", barber: "Budi", service: "Styling", date: "8 Okt 2026", status: "completed" },
  { id: 4, customer: "Dani", barber: "Hendra", service: "Potong", date: "9 Okt 2026", status: "cancelled" },
]

const members = [
  { id: 1, name: "Budi", visits: 7, tier: "VIP", expiry: "15 Des 2026" },
  { id: 2, name: "Andi", visits: 3, tier: "Basic", expiry: "20 Nov 2026" },
  { id: 3, name: "Rina", visits: 12, tier: "VIP", expiry: "10 Jan 2027" },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("booking")

  const statusColor: Record<string, "warning" | "success" | "info" | "danger"> = {
    pending: "warning",
    confirmed: "success",
    completed: "info",
    cancelled: "danger",
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-default-200">
        <h1 className="text-xl font-bold font-display">📊 Dashboard</h1>
        <Avatar name="Admin" color="primary" />
      </nav>

      <section className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-surface border-border">
            <CardBody className="p-4 text-center">
              <p className="text-3xl font-bold text-primary">142</p>
              <p className="text-sm text-text-secondary">Total Booking</p>
            </CardBody>
          </Card>
          <Card className="bg-surface border-border">
            <CardBody className="p-4 text-center">
              <p className="text-3xl font-bold text-success">Rp 2.5M</p>
              <p className="text-sm text-text-secondary">Revenue</p>
            </CardBody>
          </Card>
          <Card className="bg-surface border-border">
            <CardBody className="p-4 text-center">
              <p className="text-3xl font-bold text-foreground">38</p>
              <p className="text-sm text-text-secondary">New Members</p>
            </CardBody>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs selectedKey={activeTab} onSelectionChange={(k) => setActiveTab(k as string)}>
          <Tab key="booking" title="Booking" />
          <Tab key="members" title="Members" />
          <Tab key="products" title="Products" />
          <Tab key="revenue" title="Revenue" />
        </Tabs>

        {/* Table */}
        <Card className="border-border">
          <CardBody className="p-0">
            <Table aria-label="Booking table">
              <TableHeader>
                <TableColumn>Customer</TableColumn>
                <TableColumn>Barber</TableColumn>
                <TableColumn>Service</TableColumn>
                <TableColumn>Date</TableColumn>
                <TableColumn>Status</TableColumn>
                <TableColumn>Aksi</TableColumn>
              </TableHeader>
              <TableBody>
                {bookings.map((b) => (
                  <TableRow key={b.id}>
                    <TableCell>{b.customer}</TableCell>
                    <TableCell>{b.barber}</TableCell>
                    <TableCell>{b.service}</TableCell>
                    <TableCell>{b.date}</TableCell>
                    <TableCell>
                      <Chip color={statusColor[b.status]} variant="flat" size="sm">
                        {b.status}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="light" color="primary">
                        Detail
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </section>
    </main>
  )
}
