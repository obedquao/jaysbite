import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.10)"
          : "rgba(255,255,255,0)",
        boxShadow: scrolled
          ? "0 8px 24px rgba(0,0,0,0.08)"
          : "0 0 0 rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        paddingTop: scrolled ? "0.6rem" : "1.5rem",
        paddingBottom: scrolled ? "0.6rem" : "1.5rem",

        scale: isDesktop && scrolled ? 0.9 : 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={`fixed top-0 z-50 w-full mx-0 md:rounded-full px-5 md:px0 md:mt-1
  ${scrolled ? "text-black" : "text-white"}
`}
    >
      <div className="flex items-center justify-between w-full md:max-w-7xl md:mx-auto px-0 ">
        {/* Logo */}
        <a href="#home">
          <img
            src="/logo.png"
            alt="Jay's Bite Logo"
            className="h-12 md:h-10 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 px-0 py-2 rounded-full text-xs font-bold">
          <li className="hover:text-purple-800">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-purple-800">
            <a href="#about">About Us</a>
          </li>
          <li className="hover:text-purple-800">
            <a href="#menu">Menu</a>
          </li>
          <li className="hover:text-purple-800">
            <a href="#custom">Custom Order</a>
          </li>

          <li className="hover:text-purple-800">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Desktop Button */}
        <a
          href="#aboutus"
          className="hidden md:block text-white bg-purple-800 rounded-xl py-1.5 px-3 hover:text-black"
        >
          About Us
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden mt-4 bg-white text-black rounded-xl shadow-lg  p-4"
        >
          <ul className="flex flex-col gap-4 text-sm font-bold">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#aboutus" },
              { label: "Menu", href: "#menu" },
              { label: "Our Upcoming Class", href: "#training" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <a
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center bg-purple-800 text-white rounded-lg p-3"
              href="#aboutus"
            >
              About Us
            </a>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
