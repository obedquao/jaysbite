import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with slow zoom */}
      <motion.img
        src="/images/jay.webp"
        alt="Hero image"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        {/* Heading */}
        <motion.h1
          className="text-3xl font-medium md:text-7xl font-calistoga"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, Welcome to my website
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="mt-4 text-base md:text-xl text-white/90 md:max-w-2xl font-inter"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Freshly baked Cakes, donuts, pastries, and small chops made with love.
          Perfect for celebrations, gifts, and everyday treats.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-3 mt-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="md:mt-8 bg-purple-800 px-8 font-bold py-3 cursor-pointer rounded-2xl hover:bg-purple-700 transition"
          >
            View Menu
          </motion.button>

          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="md:mt-8 text-black font-bold cursor-pointer bg-white px-8 py-3 rounded-2xl hover:bg-green-500 hover:text-white transition"
          >
            Order Now (WhatsApp)
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
