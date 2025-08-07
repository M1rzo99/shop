import { Card } from '@/components/ui/card'
import React from 'react'

const SignIn = () => {
  return (
    <Card className='w-1/2 p-4'>
        <h1 className="text-xl font-bold"> Sign In</h1>
        <p className="text-sm text-muted-foreground">welcome back! Please sign in to your account.</p>
    </Card>
  )
}

export default SignIn