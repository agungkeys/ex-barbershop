"use client"

import {
  CardRoot,
  CardContent,
  Avatar,
  Button,
  Progress,
  Badge,
  Divider,
} from "@heroui/react"
import { useState } from "react"

const bookings = [
  { id: 1, barber: "Hendra", service: "Potong Rambut", date: "6 Oct 2026", status: "selesai" },
  { id: 2, barber: "Rizal", service: "Cukur + Styling", date: "12 Oct 2026", status: "pending" },
  { id: 3, barber: "Budi", service: "Potong + Conditioner", date: "20 Okt 2026", status: "selesai" },
]

export default function MemberAreaPage() {
  const [visits] = useState(7)
  const maxVisits = 10
  const progress = (visits / maxVisits) * 100
  const membership = { tier: "VIP", expiry: "15 Des 2026", active: true }

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center gap-4 px-6 py-4 border-b border-default-200">
        <Button variant="light" size="sm">←</Button>
        <h1 className="text-lg font-bold font-display">Member Area</h1>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-6 flex flex-col gap-6">
        {/* Profile Header */}
        <div className="flex items-center gap-4">
          <Avatar name="Budi" color="primary" className="w-16 h-16" />
          <div>
            <h2 className="text-xl font-bold text-foreground font-display">Budi</h2>
            <p className="text-text-secondary">+62 812-3456-7890</p>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-3 gap-4">
          <CardRoot className="bg-surface border-border">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{visits}</p>
              <p className="text-xs text-text-secondary">Kunjungan</p>
            </CardContent>
          </CardRoot>
          <CardRoot className="bg-surface border-border">
            <CardContent className="p-4 text-center">
              <Badge color="success" variant="flat">{membership.tier}</Badge>
              <p className="text-xs text-text-secondary mt-1">Member</p>
            </CardContent>
          </CardRoot>
          <CardRoot className="bg-surface border-border">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-foreground">92</p>
              <p className="text-xs text-text-secondary">Hari Sisa</p>
            </CardContent>
          </CardRoot>
        </div>

        {/* Progress */}
        <CardRoot className="bg-surface border-border">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Potong Gratis</span>
              <span className="text-sm text-primary font-medium">{visits}/{maxVisits}</span>
            </div>
            <Progress
              value={progress}
              color="primary"
              className="max-w-md"
              aria-label={`${visits} dari ${maxVisits} kunjungan`}
            />
            <p className="text-xs text-text-secondary mt-2">
              {maxVisits - visits} lagi dapat gratis! 🎉
            </p>
          </CardContent>
        </CardRoot>

        {/* Membership Card */}
        <CardRoot className="bg-surface border-border">
          <CardContent className="p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="font-medium">Membership {membership.tier}</span>
              <Badge color="success">Active</Badge>
            </div>
            <p className="text-sm text-text-secondary">Berakhir: {membership.expiry}</p>
            <Button color="primary" className="bg-primary text-white" size="sm">
              Perpanjang
            </Button>
          </CardContent>
        </CardRoot>

        {/* Booking History */}
        <Divider />
        <h3 className="font-bold font-display">Riwayat Booking</h3>
        <div className="flex flex-col gap-3">
          {bookings.map((b) => (
            <CardRoot key={b.id} className="bg-surface border-border">
              <CardContent className="p-4 flex flex-row justify-between items-center">
                <div>
                  <p className="font-medium text-foreground">{b.barber} · {b.service}</p>
                  <p className="text-xs text-text-secondary">{b.date}</p>
                </div>
                <Badge
                  color={b.status === "selesai" ? "success" : "warning"}
                  variant="flat"
                >
                  {b.status === "selesai" ? "✅" : "⏳"} {b.status}
                </Badge>
              </CardContent>
            </CardRoot>
          ))}
        </div>
      </section>
    </main>
  )
}
