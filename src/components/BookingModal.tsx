import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardBody,
  Select,
  SelectItem,
  Input,
  Divider,
} from "@heroui/react"
import { useState } from "react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  barberName: string
  serviceName: string
  price: number
  discountedPrice?: number
}

export default function BookingModal({
  isOpen,
  onClose,
  barberName,
  serviceName,
  price,
  discountedPrice,
}: BookingModalProps) {
  const [membership, setMembership] = useState("")
  const [notes, setNotes] = useState("")

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      backdrop="blur"
      className="bg-white"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-display">
              Konfirmasi Booking
            </ModalHeader>
            <ModalBody>
              {/* Barber Info */}
              <Card className="bg-surface border-border">
                <CardBody className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <p className="font-medium text-foreground">{barberName}</p>
                      <p className="text-sm text-text-secondary">{serviceName}</p>
                    </div>
                  </div>
                  <Divider />
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-text-secondary">Harga</span>
                    <div className="flex items-center gap-2">
                      {discountedPrice && (
                        <span className="text-sm text-text-secondary line-through">
                          Rp {price.toLocaleString()}
                        </span>
                      )}
                      <span className="text-primary font-bold">
                        Rp {(discountedPrice || price).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Membership Select */}
              <Select
                label="Membership"
                placeholder="Pilih tier"
                variant="bordered"
                value={membership}
                onChange={(e) => setMembership(e.target.value)}
              >
                <SelectItem key="basic" value="basic">
                  Basic (3 Bulan) — 5% off
                </SelectItem>
                <SelectItem key="premium" value="premium">
                  Premium (6 Bulan) — 10% off
                </SelectItem>
                <SelectItem key="vip" value="vip">
                  VIP (12 Bulan) — 15% off
                </SelectItem>
              </Select>

              {/* Date & Time */}
              <Input label="Tanggal" variant="bordered" type="date" />
              <Input label="Waktu" variant="bordered" type="time" />

              {/* Notes */}
              <Input
                label="Catatan"
                placeholder="Permintaan khusus..."
                variant="bordered"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Batal
              </Button>
              <Button color="primary" className="bg-primary text-white" onPress={onClose}>
                Konfirmasi
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
