"use client"

import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-300">
      <div className="hidden lg:flex lg:flex-1 bg-fuchsia-600 pl-5">
        search 
      </div>
        <UserButton/>
    </div>
  )
}

