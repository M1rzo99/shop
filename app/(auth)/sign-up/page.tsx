"use client"
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { registerSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const SignUpPage = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
        email: "",
        password: "",
        fullName: "",
      },
    })

    function onSubmit(values: z.infer<typeof registerSchema>) {
      console.log(values)
    }
  return (
    <Card className='w-1/2 p-4'>
      <h1 className='text-xl font-bold'>Sign Up</h1>
      <p className='text-sm text-muted-foreground'>Welcome to our platform! Please create an account.</p>

<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Q13" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="q13@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    <div className='mt-2'>
      <div className='text-sm text-muted-foreground'>
        Already have an account?{''}
        <Button asChild variant={'link'} className='p-0'>
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </div>
    </Card>
  )
}

export default SignUpPage