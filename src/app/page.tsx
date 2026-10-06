'use client'

import { Button, Card, CardBody } from '@heroui/react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-default-200">
        <h1 className="text-2xl font-bold text-foreground">✂️ BookCut</h1>
        <div className="flex gap-3">
          <Link href="/login"><Button variant="light">Masuk</Button></Link>
          <Link href="/register"><Button color="primary">Daftar</Button></Link>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold text-foreground mb-4">
          Booking Barber, Gampang & Cepat
        </h2>
        <p className="text-default-500 text-lg mb-8">
          Pilih barber, jasa, tanggal — booking langsung jadi.
        </p>
        <Link href="/booking">
          <Button color="primary" size="lg" className="px-8">
            Mulai Booking
          </Button>
        </Link>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h3 className="text-2xl font-semibold text-foreground mb-6">Pilih Barber</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Hendra', 'Rizal', 'Budi'].map((name) => (
            <Card key={name} className="shadow-sm hover:shadow-lg transition-shadow">
              <CardBody className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-default-200 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground">{name}</h4>
                <p className="text-default-500 text-sm">Potong · Cukur · Styling</p>
                <Button color="primary" className="mt-4" as={Link} href="/booking">
                  Pilih
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
