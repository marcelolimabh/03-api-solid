import fastify from 'fastify'

import { PrismaClient } from '@prisma/client'
export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Marcelo Lima Bicalho',
    email: 'marcelo@gmail.com',
  },
})
