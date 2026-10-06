import { Card, CardBody, Button, Badge } from "@heroui/react"
import Link from "next/link"

const tiers = [
  {
    key: "basic",
    name: "Basic",
    duration: "3 Bulan",
    price: "Rp 150.000",
    discount: "5%",
    popular: false,
    color: "default",
  },
  {
    key: "premium",
    name: "Premium",
    duration: "6 Bulan",
    price: "Rp 250.000",
    discount: "10%",
    popular: true,
    color: "primary",
  },
  {
    key: "vip",
    name: "VIP",
    duration: "12 Bulan",
    price: "Rp 400.000",
    discount: "15%",
    popular: false,
    color: "membership",
  },
]

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center gap-4 px-6 py-4 border-b border-default-200">
        <Link href="/member">
          <Button variant="light" size="sm">←</Button>
        </Link>
        <h1 className="text-lg font-bold font-display">Pilih Membership</h1>
      </nav>

      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <Card
              key={tier.key}
              className={`shadow-sm border-border ${tier.popular ? "border-2 border-primary" : ""}`}
            >
              <CardBody className="p-6 flex flex-col gap-4 items-center text-center">
                {tier.popular && (
                  <Badge color="primary" variant="flat" className="mb-2">
                    POPULAR
                  </Badge>
                )}
                <h3 className="text-xl font-bold font-display">{tier.name}</h3>
                <p className="text-3xl font-bold text-primary">{tier.price}</p>
                <p className="text-sm text-text-secondary">{tier.duration}</p>
                <p className="text-sm text-success font-medium">Diskon {tier.discount}</p>
                <Button
                  color={tier.color as any}
                  variant={tier.popular ? "solid" : "bordered"}
                  className={tier.popular ? "bg-primary text-white" : ""}
                >
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
