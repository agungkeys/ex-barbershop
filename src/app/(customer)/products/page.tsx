"use client"

import { useState } from "react"
import {
  Card,
  CardBody,
  Chip,
  Input,
  Button,
  Image,
} from "@heroui/react"
import Link from "next/link"

const products = [
  { id: "p1", name: "Pomade Wax Matte", price: 25000, stock: 5, category: "pomade", image: "🧴" },
  { id: "p2", name: "Sisir Premium", price: 15000, stock: 12, category: "accessories", image: "🪮" },
  { id: "p3", name: "Shampoo Argan", price: 40000, stock: 8, category: "shampoo", image: "🧴" },
  { id: "p4", name: "Gunting Profesional", price: 50000, stock: 3, category: "accessories", image: "✂️" },
  { id: "p5", name: "Cermin Portable", price: 35000, stock: 0, category: "accessories", image: "🪞" },
  { id: "p6", name: "Aroma Therapy Oil", price: 60000, stock: 7, category: "pomade", image: "🫙" },
]

const categories = ["Semua", "Pomade", "Aksesoris", "Shampoo"]

export default function ProductListPage() {
  const [filter, setFilter] = useState("Semua")

  const filtered = filter === "Semua" ? products : products.filter((p) => p.category === filter.toLowerCase())

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-default-200">
        <h1 className="text-xl font-bold font-display">🛍️ Produk</h1>
        <Link href="/cart">
          <Button variant="light" size="sm">🛒 Cart</Button>
        </Link>
      </nav>

      <section className="max-w-7xl mx-auto px-4 py-6">
        {/* Search */}
        <Input
          label="Cari produk..."
          placeholder="Ketik di sini..."
          variant="bordered"
          fullWidth
          radius="lg"
          className="mb-4"
        />

        {/* Filter Chips */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {categories.map((cat) => (
            <Chip
              key={cat}
              variant={filter === cat ? "solid" : "bordered"}
              color={filter === cat ? "primary" : "default"}
              className="cursor-pointer"
              onPress={() => setFilter(cat)}
            >
              {cat}
            </Chip>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <Card
              key={product.id}
              className="shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardBody className="p-4 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl bg-surface flex items-center justify-center text-4xl mb-3">
                  {product.image}
                </div>
                <h3 className="font-medium text-foreground font-display">{product.name}</h3>
                <p className="text-primary font-bold mt-1">Rp {product.price.toLocaleString()}</p>
                <Chip
                  size="sm"
                  color={product.stock > 0 ? "success" : "danger"}
                  variant="flat"
                  className="mt-2"
                >
                  {product.stock > 0 ? `Stok: ${product.stock}` : "Habis"}
                </Chip>
                <Button
                  color="primary"
                  className="mt-3 bg-primary text-white w-full"
                  size="sm"
                  as={Link}
                  href={`/products/${product.id}`}
                >
                  Beli
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
