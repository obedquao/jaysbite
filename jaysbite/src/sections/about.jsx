import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      {/* Heading */}
      <motion.h1
        className="text-5xl text-center font-recoleta text-purple-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        About Jays Bite
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="px-5 md:px-30 text-center font-inter mt-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        At Jay’s Bite, every treat is made to bring joy. Founded by Juliet
        Numanyavor, Jay’s Bite specializes in delicious cakes, pastries, and
        baked treats crafted with passion, creativity, and attention to detail.
        What started as a simple love for baking has grown into a brand
        dedicated to delivering fresh, high-quality, and beautifully made
        desserts for every occasion. Whether it's a birthday cake, a box of
        donuts, or pastries for a gathering, every order is prepared with care
        to ensure it tastes as amazing as it looks. At Jay’s Bite, we believe
        food brings people together. That’s why our goal is not just to bake,
        but to create sweet moments, happy celebrations, and memorable
        experiences for every customer.
      </motion.p>

      {/* Stats */}
      <motion.div
        className="flex justify-center gap-16 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-xl text-center font-inter font-black text-black"
          whileHover={{ scale: 1.05 }}
        >
          300 + <br />
          <span className="text-gray-700 font-medium">Happy Customers</span>
        </motion.h2>

        <motion.h2
          className="text-xl text-center font-inter font-black text-black"
          whileHover={{ scale: 1.05 }}
        >
          3 + <br />
          <span className="text-gray-700 font-medium">Years Experience</span>
        </motion.h2>
      </motion.div>

      {/* Mission + Vision Cards */}
      <section className="flex flex-col md:flex-row gap-5 px-5 md:px-32 mt-16">
        <motion.div
          className="space-y-4 border border-gray-300 p-5 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
        >
          <h3 className="text-black text-2xl text-center font-playfair font-bold">
            Mission
          </h3>
          <p className="text-center font-inter">
            To redefine taste and creativity in the pastry and food space by
            producing premium, consistent, and visually stunning products that
            customers can depend on anytime.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4 border border-gray-300 p-5 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
        >
          <h3 className="text-black text-2xl text-center font-playfair font-bold">
            Vision
          </h3>
          <p className="text-center font-inter">
            To grow a thriving business that delights customers while creating
            employment, supporting local suppliers, and contributing to the
            economic growth of the community.
          </p>
        </motion.div>
      </section>
    </section>
  );
}
