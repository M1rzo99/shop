import React from 'react'
import Logo from './logo'
import { Button } from '../ui/button'
import Link from 'next/link'
import { UserIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="h-20 bg-white text-[#0b2d64]  font-medium text-[14px] fixed top-0 inset-x-0 z-50 border-b border-gray-200">
      <div className=" max-w-9xl h-full flex justify-between items-center px-[5vw]">

        {/* Chap qism: Logo + Menu */}
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="flex gap-8">
            <Link href="#" className="hover:underline">SHOP</Link>
            <Link href="#" className="hover:underline">MAGAZINE</Link>
            <Link href="#" className="hover:underline">ABOUT</Link>
          </nav>
        </div>

        {/* O'ng qism: Account/Login/Bag + User Icon */}
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:underline">Account</Link>
          <Link href="#" className="hover:underline">Login</Link>
          <Link href="#" className="hover:underline">Bag</Link>

          {/* User Button */}
          <Button asChild size="icon" className="bg-black hover:bg-black">
            <Link href="/sign-in">
              <UserIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
