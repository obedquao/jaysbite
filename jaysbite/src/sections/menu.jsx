import FlavorDesign from "../components/flavordesign";
import info from "../assets/data/flavors";
import CakeItem from "../components/item";
import Pastries from "../components/pastries";
import pastriesData from "../assets/data/pastries";
import snacks from "../assets/data/snacks";
import cupcakeData from "../assets/data/cupcake";
import bentoPackage from "../assets/data/bentopackage";
import kids from "../assets/data/kids";
import randomInspo from "../assets/data/random";

import { motion } from "motion/react";

export default function Menu() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="menu" className="py-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-purple-800 font-recoleta text-6xl text-center"
      >
        Our Menu
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center font-inter mt-5 px-5 md:px-32"
      >
        Basic cakes are simple and elegant, with minimal decoration and limited
        customization. Premium cakes have more detailed designs, like
        handcrafted flowers, textured patterns, or sculpted shapes for a
        polished, special look. For premium cakes, kindly call or WhatsApp us on
        0550280582 to place your order.
      </motion.p>

      {/* FLAVOR GRID */}
      <p className="text-center text-3xl font-calistoga  mt-10 text-amber-400">
        Available Flavors
      </p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-3 md:grid-cols-6 mt-4 md:32 gap-y-4 pb-16"
      >
        {info.map((itemData) => (
          <motion.div variants={item} key={itemData.name}>
            <FlavorDesign image={itemData.image} name={itemData.name} />
          </motion.div>
        ))}
      </motion.div>

      <section className="py-10 md:py-16 text-center bg-gray-50">
        {/* SNACKS */}

        <section>
          <h2 className="text-amber-400 text-3xl font-calistoga">
            On The Go Snacks
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 mx-2 md:mx-18 border rounded-lg border-gray-200 divide-x divide-y divide-gray-200 bg-gray-50 mt-10"
          >
            {snacks.map((itemData) => (
              <motion.div variants={item} key={itemData.name}>
                <CakeItem
                  name={itemData.name}
                  image={itemData.image}
                  price={itemData.price}
                  details={itemData.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* cupcake */}

        <section>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-h-64 w-full md:w-150 px-5 mx-auto rounded-2xl flex justify-center mt-16 overflow-hidden"
          >
            <img
              src="/images/cupcakebanner.webp"
              alt="Cupcake Packages"
              className="object-fill h-full w-full"
            />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 mx-2 md:mx-18 border rounded-lg border-gray-200 divide-x divide-y divide-gray-200 bg-gray-50 mt-10"
          >
            {cupcakeData.map((itemData) => (
              <motion.div variants={item} key={itemData.name}>
                <CakeItem
                  name={itemData.name}
                  image={itemData.image}
                  price={itemData.price}
                  details={itemData.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* BENTO */}

        <section>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-h-64 w-full md:w-150 px-5 mx-auto rounded-2xl flex justify-center mt-16 overflow-hidden"
          >
            <img
              src="/images/bentopackages.webp"
              alt="Bento Packages"
              className="object-fill h-full w-full"
            />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 mx-2 md:mx-18 border rounded-lg border-gray-200 divide-x divide-y divide-gray-200 bg-gray-50 mt-10"
          >
            {bentoPackage.map((itemData) => (
              <motion.div variants={item} key={itemData.name}>
                <CakeItem
                  name={itemData.name}
                  image={itemData.image}
                  price={itemData.price}
                  details={itemData.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* KIDS CAKES */}

        <section>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-h-64 w-full md:w-150 px-5 mx-auto rounded-2xl flex justify-center mt-16 overflow-hidden"
          >
            <img
              src="/images/kidscake.webp"
              alt="Kids' Cake Menu"
              className="object-fill h-full w-full"
            />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 mx-2 md:mx-18 border rounded-lg border-gray-200 divide-x divide-y divide-gray-200 bg-gray-50 mt-10"
          >
            {kids.map((itemData) => (
              <motion.div variants={item} key={itemData.name}>
                <CakeItem
                  name={itemData.name}
                  image={itemData.image}
                  price={itemData.price}
                  details={itemData.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* RANDOM INSPO */}

        <section>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-h-64 w-full md:w-150 px-5 mx-auto rounded-2xl flex justify-center mt-16 overflow-hidden"
          >
            <img
              src="/images/random.webp"
              alt="Random Inspirations"
              className="object-fill h-full w-full"
            />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 mx-2 md:mx-18 border rounded-lg border-gray-200 divide-x divide-y divide-gray-200 bg-gray-50 mt-10"
          >
            {randomInspo.map((itemData) => (
              <motion.div variants={item} key={itemData.name}>
                <CakeItem
                  name={itemData.name}
                  image={itemData.image}
                  price={itemData.price}
                  details={itemData.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PASTRIES SECTION */}

        <section>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-h-64 w-full md:w-150 px-5 mx-auto rounded-2xl flex justify-center mt-16 overflow-hidden"
          >
            <img
              src="/images/pastries.webp"
              alt="Pastries Banner"
              className="object-fill h-full w-full"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl text-center font-bold font-inter text-purple-800 mt-10"
          >
            Pastries Made Just for You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-base my-5 px-8 md:px-32 font-inter"
          >
            Craving something delicious? We take orders for a variety of freshly
            baked pastries in small or large quantities. Send us your
            inspiration or budget and let’s create something amazing.
            <a href="tel:+233532725200" className="underline text-purple-600">
              {" "}
              Call us{" "}
            </a>
            or
            <a
              href="https://wa.me/233532725200"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-purple-600"
            >
              {" "}
              Send us a Dm on WhatsApp
            </a>
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 mx-2 md:mx-18 border rounded-lg border-gray-200 divide-x divide-y divide-gray-200 bg-gray-50 mt-10"
          >
            {pastriesData.map((itemData) => (
              <motion.div variants={item} key={itemData.name}>
                <Pastries
                  name={itemData.name}
                  image={itemData.image}
                  price={itemData.price}
                  details={itemData.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </section>
    </section>
  );
}
