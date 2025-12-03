import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ className }) {
  return (
    <Link className={`logo flex items-center gap-1.5 cursor-pointer ${className}`} href="/">
      <Image src="/logo.png" width={100} height={100} alt='logo' className='w-9 h-auto' />
      <span className='text-xl font-bold text-white'>Stoxie</span>
    </Link>
  )
}
