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
      <section className="py-24 px-6 lg:px-24 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* CEO Image Side */}
          <div className="relative group">
            {/* Abstract Background Elements */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-40"></div>

            {/* Main Image Container */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/images/ceoimage.webp"
                alt="Juliet Numanyavor - Founder of Jay's Bite"
                className="w-full aspect-[4/5] object-cover"
              />

              {/* Floating Award Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-purple-100 max-w-[180px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">🏆</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">
                    Double Honoree
                  </span>
                </div>
                <p className="text-xs font-semibold text-gray-800 leading-tight">
                  Overall Best Graduating Student & Academic Excellence
                </p>
              </div>
            </div>

            {/* Decorative Border Frame */}
            <div className="absolute inset-0 border-2 border-purple-200 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10"></div>
          </div>

          {/* CEO Text Side */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Meet the Founder
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-2">
                Juliet Numanyavor
              </h3>

              <p className="text-lg font-medium text-purple-600/80 italic">
                Founder & Master Baker, Jay's Bite
              </p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed font-inter text-center md:text-left">
              <p className="text-gray-600 leading-relaxed mb-4">
                Juliet Numanyavor is the founder and driving force behind Jay’s
                Bite. A self-taught baker with a deep passion for creating
                delicious pastries, cakes, and meals, Juliet began experimenting
                in 2022 and later turned her love for baking into a thriving
                business.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                While balancing university life, she dedicated an entire year to
                perfecting her craft through consistent practice and creativity.
                Her determination led her to enroll in a Beginner-to-Masterclass
                program at Akagre Bakery School in 2025, where she combined
                professional techniques with her natural baking talent.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Her excellence earned her two major honors at graduation:
                <span className="font-semibold text-gray-800">
                  {" "}
                  Overall Best Graduating Student{" "}
                </span>
                and
                <span className="font-semibold text-gray-800">
                  {" "}
                  Best in Academics.
                </span>
                Today, Jay’s Bite continues to grow as a brand known for
                quality, affordability, and heartfelt connections with
                customers.
              </p>
            </div>

            {/* Signature/Call to action */}
            <div className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-purple-300"></div>
                <span className="font-serif text-2xl text-gray-800">
                  Juliet N.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
