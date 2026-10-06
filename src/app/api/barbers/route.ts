import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET() {
  const barbers = await prisma.barber.findMany({
    where: { isActive: true },
    include: { user: true },
  })
  return Response.json(barbers)
}