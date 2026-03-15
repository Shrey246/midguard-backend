"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-black text-white shadow-md">

      <div className="flex justify-between items-center px-6 md:px-10 py-4">

        {/* Logo + Brand */}
        <div className="flex items-center gap-3">

          <div className="border border-gray-700 rounded-xl p-1 bg-white shadow-sm">
            <Image
              src="/logo2.png"
              alt="Ant Learning Hub Logo"
              width={34}
              height={34}
              className="object-contain"
            />
          </div>

          <h1 className="text-lg md:text-xl font-bold tracking-wide">
            Ant Learning Hub
          </h1>

        </div>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <Link href="/" className="hover:text-teal-400 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-teal-400 transition">
            About
          </Link>

          <Link href="/programs" className="hover:text-teal-400 transition">
            Programs
          </Link>

          <Link href="/contact" className="hover:text-teal-400 transition">
            Contact
          </Link>

        </div>


        {/* Desktop Button */}
        <button className="hidden md:block bg-teal-500 px-5 py-2 rounded-lg hover:bg-teal-600 transition font-medium">
          Book Session
        </button>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

      </div>


      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-center bg-black border-t border-gray-800">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/contact">Contact</Link>

          <button className="bg-teal-500 py-2 rounded-lg mt-2">
            Book Session
          </button>

        </div>
      )}

    </nav>
  )
}