import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow-md">
      <h1 className="text-xl font-bold">Praveen Coaching</h1>

      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/Contact">Contact</Link>
      </div>

      <button className="bg-teal-500 text-white px-4 py-2 rounded-lg">
        Book Session
      </button>
    </nav>
  );
}