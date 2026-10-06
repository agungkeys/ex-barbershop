"use client"

import { useState } from "react"
import {
  Card,
  CardBody,
  Button,
  Avatar,
  Badge,
  Toggle,
} from "@heroui/react"

const todayBookings = [
  { id: 1, customer: "Budi", service: "Potong", time: "14:00 - 15:00", visits: 7 },
  { id: 2, customer: "Andi", service: "Cukur", time: "16:00 - 16:30", visits: 3 },
]

export default function BarberPanelPage() {
  const [available, setAvailable] = useState(true)

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center gap-4 px-6 py-4 border-b border-default-200">
        <Button variant="light" size="sm">←</Button>
        <h1 className="text-lg font-bold font-display">Jadwal Hari Ini</h1>
      </nav>

      <section className="max-w-3xl mx-auto px-4 py-6 flex flex-col gap-6">
        <p className="text-text-secondary">📅 Selasa, 6 Okt 2026</p>

        <div className="flex flex-col gap-4">
          {todayBookings.map((b) => (
            <Card key={b.id} className="border-border">
              <CardBody className="p-4 flex flex-row justify-between items-center">
                <div className="flex items-center gap-3">
                  <Avatar name={b.customer} color="primary" />
                  <div>
                    <p className="font-medium text-foreground">
                      {b.customer} · {b.service}
                    </p>
                    <p className="text-sm text-text-secondary">{b.time}</p>
                    <Badge color="primary" variant="flat" size="sm">
                      Kunjungan: {b.visits}/10
                    </Badge>
                  </div>
                </div>
                <Button color="success" variant="light" size="sm">
                  Selesai
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <span className="font-medium">⚡ Tersedia</span>
          <Toggle
            isSelected={available}
            onValueChange={setAvailable}
            color="primary"
          />
        </div>
      </section>
    </main>
  )
}
