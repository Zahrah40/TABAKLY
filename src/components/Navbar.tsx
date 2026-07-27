import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-green-900">
          Tabakly
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-gray-600 hover:text-green-600">
            About
          </Link>

          <Link href="#" className="text-gray-600 hover:text-green-600">
            How it Works
          </Link>

          <Link href="#" className="text-gray-600 hover:text-green-600">
            Contact
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <button className="text-gray-700 font-medium hover:text-green-600">
            Login
          </button>

          <button className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-full font-semibold">
            Join Waitlist
          </button>

        </div>

      </div>
    </nav>
  );
}