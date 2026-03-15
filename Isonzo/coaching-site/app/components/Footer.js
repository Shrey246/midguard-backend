export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Ant Learning Hub</h2>
          <p className="text-gray-400">
            Helping individuals and organizations grow through clarity,
            leadership, and purposeful action.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/programs" className="hover:text-white">Programs</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <p className="text-gray-400">Email:coachpraveenjp@gmail.com</p>
          <p className="text-gray-400">Phone: +91 98451 21178</p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Ant Learning Hub. All rights reserved.
      </div>
    </footer>
  );
}