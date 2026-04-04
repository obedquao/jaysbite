import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">Jay's Bite</h2>
          <p className="text-purple-200 mt-3 text-sm leading-relaxed">
            Freshly baked treats made with love. From cakes and donuts to
            pastries and small chops, we create delicious moments for every
            occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

          <ul className="space-y-2 text-purple-200 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-white transition">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About us
              </a>
            </li>
            <li>
              <a href="#custom" className="hover:text-white transition">
                Custom Cake
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>

          <ul className="space-y-2 text-purple-200 text-sm">
            <li>📞 055 028 0582</li>
            <li>📍 Accra, Ghana</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/_.jaysbite?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="bg-purple-700 hover:bg-purple-600 p-3 rounded-full transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://wa.me/233550280582"
              className="bg-purple-700 hover:bg-purple-600 p-3 rounded-full transition"
            >
              <FaWhatsapp size={18} />
            </a>

            <a
              href="https://www.tiktok.com/@jnjays.bite_?is_from_webapp=1&sender_device=pc"
              className="bg-purple-700 hover:bg-purple-600 p-3 rounded-full transition"
            >
              <FaTiktok size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-purple-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-purple-300">
          <p>© {new Date().getFullYear()} Jay's Bite. All rights reserved.</p>

          <p className="mt-2 md:mt-0">Crafted with ❤️ for sweet moments</p>
        </div>
      </div>
    </footer>
  );
}
