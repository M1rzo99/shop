"use client"

import { email, z } from "zod"

export const loginSchema = z.object({
  email: z.string().email(),
    password: z.string().min(6)
})

export const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  fullName: z.string().min(3, "Full name must be at least 3 characters long"),
})