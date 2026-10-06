"use client"

import { useState } from "react"
import {
  CardRoot,
  CardContent,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react"

const products = [
  { id: "p1", name: "Pomade Wax Matte", price: 25000, stock: 5, category: "pomade" },
  { id: "p2", name: "Sisir Premium", price: 15000, stock: 12, category: "accessories" },
  { id: "p3", name: "Shampoo Argan", price: 40000, stock: 8, category: "shampoo" },
  { id: "p4", name: "Gunting Profesional", price: 50000, stock: 3, category: "accessories" },
]

export default function AdminProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-default-200">
        <h1 className="text-xl font-bold font-display">📦 Master Produk</h1>
        <Button color="primary" className="bg-primary text-white" onPress={() => setIsModalOpen(true)}>
          + Tambah Produk
        </Button>
      </nav>

      <section className="max-w-7xl mx-auto px-4 py-6">
        <CardRoot className="border-border">
          <CardContent className="p-0">
            <Table aria-label="Products table">
              <TableHeader>
                <TableColumn>Gambar</TableColumn>
                <TableColumn>Nama</TableColumn>
                <TableColumn>Harga</TableColumn>
                <TableColumn>Stok</TableColumn>
                <TableColumn>Kategori</TableColumn>
                <TableColumn>Aksi</TableColumn>
              </TableHeader>
              <TableBody>
                {products.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>🖼️</TableCell>
                    <TableCell className="font-medium">{p.name}</TableCell>
                    <TableCell>Rp {p.price.toLocaleString()}</TableCell>
                    <TableCell>
                      <Chip color={p.stock > 0 ? "success" : "danger"} variant="soft" size="sm">
                        {p.stock}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      <Chip variant="flat" size="sm">
                        {p.category}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="light" color="primary">
                          Edit
                        </Button>
                        <Button size="sm" variant="light" color="danger">
                          Hapus
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </CardRoot>
      </section>

      {/* Add Product Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalContent>
          <ModalHeader>Tambah Produk</ModalHeader>
          <ModalBody>
            <Input label="Nama Produk" variant="flat" />
            <Input label="Harga" variant="flat" type="number" />
            <Input label="Stok" variant="flat" type="number" />
            <Input label="Kategori" variant="flat" />
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={() => setIsModalOpen(false)}>
              Batal
            </Button>
            <Button color="primary" className="bg-primary text-white">
              Simpan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </main>
  )
}
