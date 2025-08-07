
import React from 'react'
import Logo from './logo'
import { Button } from '../ui/button'
import Link from 'next/link'
import { User, User2Icon, UserIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='h-20 bg-gray-100  fixed inset-0 z-50'>
        <div className='container max-w-6xl h-full flex items-center justify-between'>
                 <Logo />
                 <div className="flex items-center gap-2">
                  <Button asChild size={"icon"}>
                    <Link href={"/sign-in"}>
                    <UserIcon/>
                    </Link>
                  </Button>

                 </div>
        </div>
    </div>
  )
}

export default Navbar