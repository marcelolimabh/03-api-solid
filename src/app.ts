import fastify from 'fastify'
import crypto from 'node:crypto'
import { z } from 'zod'
import { prisma } from './lib/prisma'

export const app = fastify()

app.post('/users', async (request, reply) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })
  const hash = crypto.createHash('sha512')

  const { name, email, password } = registerBodySchema.parse(request.body)
  const passwordHash = hash.update(password).digest('hex')

  await prisma.user.create({
    data: {
      name,
      email,
      password_hash: passwordHash,
    },
  })
  return reply.status(201).send()
})
