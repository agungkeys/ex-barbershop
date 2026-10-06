"use client"

import { useState } from "react"
import {
  Card,
  CardBody,
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Chip,
  Badge,
  Progress,
} from "@heroui/react"

const members = [
  { id: 1, name: "Budi", visits: 7, maxVisits: 10, tier: "VIP", status: "active" },
  { id: 2, name: "Andi", visits: 3, maxVisits: 10, tier: "Basic", status: "active" },
  { id: 3, name: "Rina", visits: 12, maxVisits: 10, tier: "VIP", status: "free" },
  { id: 4, name: "Dani", visits: 1, maxVisits: 10, tier: "Basic", status: "expired" },
]

export default function AdminMembersPage() {
  const [search, setSearch] = useState("")

  const filtered = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  )

  const tierColor: Record<string, "default" | "primary" | "membership"> = {
    Basic: "default",
    Premium: "primary",
    VIP: "membership",
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-default-200">
        <h1 className="text-xl font-bold font-display">👥 Member Management</h1>
        <Button color="primary" className="bg-primary text-white" size="sm">
          + Tambah Member
        </Button>
      </nav>

      <section className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6">
        <Input
          label="Cari member..."
          placeholder="Ketik nama..."
          variant="bordered"
          fullWidth
          radius="lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />

        <Card className="border-border">
          <CardBody className="p-0">
            <Table aria-label="Member tracking table">
              <TableHeader>
                <TableColumn>Nama</TableColumn>
                <TableColumn>Kunjungan</TableColumn>
                <TableColumn>Tier</TableColumn>
                <TableColumn>Status</TableColumn>
                <TableColumn>Aksi</TableColumn>
              </TableHeader>
              <TableBody>
                {filtered.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge color="primary" variant="flat" size="sm">
                          {m.visits}/{m.maxVisits}
                        </Badge>
                        <span className="font-medium">{m.name}</span>
                      </div>
                      <Progress
                        value={(m.visits / m.maxVisits) * 100}
                        color="primary"
                        className="max-w-[120px] mt-1"
                        size="sm"
                      />
                    </TableCell>
                    <TableCell>
                      <Chip color={tierColor[m.tier] as any} variant="flat" size="sm">
                        {m.tier}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      {m.status === "free" ? (
                        <Badge color="success" variant="flat">✅ Gratis</Badge>
                      ) : m.status === "expired" ? (
                        <Badge color="danger" variant="flat">Expired</Badge>
                      ) : (
                        <Badge color="primary" variant="flat">Active</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="light" color="primary">
                          Detail
                        </Button>
                        <Button size="sm" variant="light" color="warning">
                          Edit
                        </Button>
                      </div>
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
