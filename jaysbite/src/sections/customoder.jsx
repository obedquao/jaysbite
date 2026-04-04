import CakeOrderCard from "../components/cakeordercard";
import { motion } from "motion/react";

export default function CustomOrder() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  return (
    <section id="custom" className="py-20">
      {/* TITLE */}

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-purple-800 font-recoleta text-4xl md:text-6xl text-center"
      >
        Custom Cake Order
      </motion.h1>

      {/* DESCRIPTION */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-600 text-center mb-6 px-6 md:px-32"
      >
        Fill out the form below to place your custom cake order! or tap the
        button below to text us directly on WhatsApp. We will get back to you as
        soon as possible to discuss your order details and preferences.
      </motion.p>

      {/* WHATSAPP BUTTON */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 inline-block mb-10"
        >
          Text Us on WhatsApp
        </a>
      </motion.div>

      {/* INFO CARDS */}

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-6xl mx-auto px-5"
      >
        {/* Card 1 */}

        <motion.div
          variants={item}
          className="flex flex-col border border-gray-200 rounded-xl p-6 shadow-md bg-white"
        >
          <h3 className="text-xl font-bold mb-4">What Affects Cake Prices?</h3>
          <ul className="space-y-2 font-inter text-gray-600 list-disc pl-5">
            <li>Multiple cake flavors</li>
            <li>Type of icing (Whipping cream, buttercream, ganache)</li>
            <li>Cake shape & decorations</li>
            <li>Customized designs</li>
            <li>Urgent orders</li>
          </ul>
        </motion.div>

        {/* Card 2 */}

        <motion.div
          variants={item}
          className="flex flex-col border border-gray-200 rounded-xl p-6 shadow-md bg-white"
        >
          <h3 className="text-xl font-bold mb-4">How to Order</h3>
          <ul className="space-y-2 font-inter text-gray-600 list-disc pl-5">
            <li>Place orders 2–3 days in advance</li>
            <li>Large orders require 1–2 weeks notice</li>
            <li>Full payment confirms your order</li>
          </ul>
        </motion.div>

        {/* Card 3 */}

        <motion.div
          variants={item}
          className="flex flex-col border border-gray-200 rounded-xl p-6 shadow-md bg-white"
        >
          <h3 className="text-xl font-bold mb-4">🚚 Delivery & Pickup</h3>
          <ul className="space-y-2 font-inter text-gray-600 list-disc pl-5">
            <li>Delivery available at extra cost</li>
            <li>Location determines delivery fee</li>
            <li>Only cars are used for cake delivery</li>
            <li className="leading-relaxed">
              If customer insists on bike delivery, Jay’s Bite is not
              responsible for damages
            </li>
          </ul>
        </motion.div>

        {/* Card 4 */}

        <motion.div
          variants={item}
          className="flex flex-col border border-gray-200 rounded-xl p-6 shadow-md bg-white"
        >
          <h3 className="text-xl font-bold mb-4">💰 Refund Policy</h3>
          <div className="space-y-3 font-inter text-gray-600">
            <p>Kindly be sure before placing and confirming an order.</p>
            <p className="font-semibold text-red-600 text-sm uppercase tracking-wide">
              All payments are non-refundable.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* ORDER FORM */}

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <CakeOrderCard />
      </motion.section>
    </section>
  );
}
