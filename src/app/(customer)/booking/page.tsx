"use client"

import { useState } from "react"
import {
  CardRoot,
  CardContent,
  Button,
  Input,
  Chip,
  Tabs,
  Tab,
  Avatar,
  Divider,
} from "@heroui/react"
import Link from "next/link"

const barbers = [
  { id: "1", name: "Hendra", rating: 4.9, price: 15000, specialties: "Potong · Cukur · Styling" },
  { id: "2", name: "Rizal", rating: 4.8, price: 20000, specialties: "Potong · Coloring" },
  { id: "3", name: "Budi", rating: 4.7, price: 12000, specialties: "Cukur · Trim" },
]

const services = [
  { id: "s1", name: "Potong Rambut", duration: "30 min", price: 15000 },
  { id: "s2", name: "Cukur + Styling", duration: "45 min", price: 25000 },
  { id: "s3", name: "Color", duration: "60 min", price: 50000 },
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("barber")

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-default-200 bg-white sticky top-0 z-50">
        <h1 className="text-xl font-bold text-foreground font-display">✂️ BookCut</h1>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="light" size="sm">Masuk</Button>
          </Link>
          <Link href="/register">
            <Button color="primary" size="sm" className="bg-primary text-white">Daftar</Button>
          </Link>
        </div>
      </nav>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-4 pt-6">
        <Input
          label="Cari barber atau jasa..."
          placeholder="Ketik di sini..."
          variant="flat"
          fullWidth
          radius="lg"
          className="mb-4"
        />

        {/* Tabs */}
        <Tabs
          selectedKey={activeTab}
          onSelectionChange={(key) => setActiveTab(key as string)}
          classNames={{ tabList: "gap-4" }}
        >
          <Tab key="barber" title="Barber" />
          <Tab key="service" title="Service" />
          <Tab key="product" title="Produk" />
        </Tabs>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "barber"
            ? barbers.map((barber, i) => (
                <CardRoot key={barber.id} className="shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Avatar name={barber.name} color="primary" className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground font-display">{barber.name}</h3>
                    <p className="text-text-secondary text-sm">⭐ {barber.rating} · {barber.specialties}</p>
                    <p className="text-primary font-medium mt-1">Rp {barber.price.toLocaleString()}</p>
                    <Button color="primary" className="mt-4 bg-primary text-white" as={Link} href="/booking" size="sm">
                      Book Now
                    </Button>
                  </CardContent>
                </CardRoot>
              ))
            : services.map((service, i) => (
                <CardRoot key={service.id} className="shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-2xl">
                      ✂️
                    </div>
                    <h3 className="text-lg font-semibold text-foreground font-display">{service.name}</h3>
                    <p className="text-text-secondary text-sm">{service.duration}</p>
                    <p className="text-primary font-medium mt-1">Rp {service.price.toLocaleString()}</p>
                    <Button color="primary" className="mt-4 bg-primary text-white" as={Link} href="/booking" size="sm">
                      Pilih
                    </Button>
                  </CardContent>
                </CardRoot>
              ))}
        </div>
      </section>
    </main>
  )
}
