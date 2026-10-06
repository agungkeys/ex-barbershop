import { Card, CardBody, Input, Button } from "@heroui/react"

const tiers = [
  { name: "Basic", duration: "3 Bulan", price: 150000, discount: 5 },
  { name: "Premium", duration: "6 Bulan", price: 250000, discount: 10 },
  { name: "VIP", duration: "12 Bulan", price: 400000, discount: 15 },
]

export default function AdminPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-default-200">
        <h1 className="text-xl font-bold font-display">💎 Master Member Price</h1>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-6">
        {tiers.map((tier) => (
          <Card key={tier.name} className="border-border">
            <CardBody className="p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold font-display">{tier.name} ({tier.duration})</h3>
              </div>
              <div className="flex gap-4">
                <Input
                  label="Harga (Rp)"
                  variant="bordered"
                  type="number"
                  defaultValue={tier.price.toString()}
                  className="max-w-xs"
                />
                <Input
                  label="Diskon (%)"
                  variant="bordered"
                  type="number"
                  defaultValue={tier.discount.toString()}
                  className="max-w-xs"
                />
              </div>
              <Button color="primary" className="bg-primary text-white" size="sm">
                Simpan
              </Button>
            </CardBody>
          </Card>
        ))}
      </section>
    </main>
  )
}
