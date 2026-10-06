import {
  CardRoot,
  CardContent,
  Button,
  Badge,
  Image,
  Divider,
  Avatar,
} from "@heroui/react"
import Link from "next/link"

const product = {
  id: "p1",
  name: "Pomade Wax Matte",
  rating: 4.8,
  reviews: 12,
  price: 25000,
  stock: 5,
  description: "Wax matte dengan hold kuat dan hasil natural. Cocok untuk semua jenis rambut.",
  image: "🧴",
  category: "pomade",
}

const reviews = [
  { id: 1, user: "Budi", rating: 5, comment: "Bagus gan, tahan lama!" },
  { id: 2, user: "Andi", rating: 4, comment: "Oke, wangi sedap" },
]

export default function ProductDetailPage() {
  const [qty, setQty] = useState(1)

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-default-200">
        <Link href="/products">
          <Button variant="light" size="sm">← Back</Button>
        </Link>
        <Link href="/cart">
          <Button variant="light" size="sm">🛒 Cart</Button>
        </Link>
      </nav>

      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="w-full h-80 rounded-2xl bg-surface flex items-center justify-center text-6xl border border-border">
            {product.image}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold font-display">{product.name}</h1>
            <div className="flex items-center gap-2">
              <span className="text-warning">⭐</span>
              <span className="font-medium">{product.rating}</span>
              <span className="text-text-secondary text-sm">({product.reviews} ulasan)</span>
            </div>
            <p className="text-2xl font-bold text-primary">Rp {product.price.toLocaleString()}</p>
            <Badge color={product.stock > 0 ? "success" : "danger"} variant="soft">
              {product.stock > 0 ? `Stok: ${product.stock}` : "Habis"}
            </Badge>
            <p className="text-foreground/80">{product.description}</p>

            {/* Qty Selector */}
            <div className="flex items-center gap-3">
              <Button variant="flat" size="sm" onPress={() => setQty((q) => Math.max(1, q - 1))}>
                −
              </Button>
              <span className="font-medium w-8 text-center">{qty}</span>
              <Button variant="flat" size="sm" onPress={() => setQty((q) => q + 1)}>
                +
              </Button>
            </div>

            <Button color="primary" className="bg-primary text-white" size="lg">
              Tambah Cart
            </Button>
          </div>
        </div>

        {/* Reviews */}
        <Divider className="my-6" />
        <h2 className="text-xl font-bold font-display mb-4">Ulasan</h2>
        <div className="flex flex-col gap-3">
          {reviews.map((r) => (
            <CardRoot key={r.id} className="bg-surface border-border">
              <CardContent className="p-4 flex flex-row gap-3 items-start">
                <Avatar name={r.user} size="sm" />
                <div>
                  <p className="font-medium text-sm">{r.user}</p>
                  <p className="text-warning text-sm">{"⭐".repeat(r.rating)}</p>
                  <p className="text-text-secondary text-sm">{r.comment}</p>
                </div>
              </CardContent>
            </CardRoot>
          ))}
        </div>
      </section>
    </main>
  )
}

import { useState } from "react"
