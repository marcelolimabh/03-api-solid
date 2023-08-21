import fastify from 'fastify'
import crypto from 'node:crypto'

import { PrismaClient } from '@prisma/client'
export const app = fastify()

const prisma = new PrismaClient()
const hash = crypto.createHash('sha256')
const password = hash.update('1234').digest('hex')
console.log(password)
/*
const us = prisma.user
  .create({
    data: {
      name: 'Marcelo Lima Bicalho',
      email: 'marcelo@gmail.com',
      password_hash: password,
    },
  })
  .then(() => {
    console.log(us)
  })

console.log(us)
*/
