import { IoLocation } from "react-icons/io5";
import { IoPhonePortrait } from "react-icons/io5";
import { motion } from "motion/react";
export default function Contact() {
  return (
    <section id="contact" className="py-8 md:py-32">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold font-recoleta text-center text-purple-800 mt-10"
      >
        Get In Touch with Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center px-6 md:px-64 text-lg font-medium text-gray-700 font-sans mt-4"
      >
        We would love to hear from you. Whether you want to make enquiries, need
        assistance with an order, or just want to say hello, feel free to reach
        out to us using the contact information below.
      </motion.p>
      <div className="flex flex-col md:flex-row items-center  flex-wrap gap-5 justify-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 justify-center items-center border border-gray-300 rounded-2xl p-5 shadow-lg w-80 h-60"
        >
          <IoLocation className="text-5xl text-purple-800 mt-2 " />
          <h3 className="text-purple-800 text-xl font-bold font-inter text-center">
            We are located at
          </h3>
          <p className="text-center text-base text-gray-700">
            Weija - Tetegu, Opposite Mazbit Company Limited. Tap below to use
            google map
          </p>
          <a
            href="https://maps.app.goo.gl/YCjvPFQwecZ7XnZa9"
            className="border-2 p-2 border-purple-800 rounded-2xl text-purple-800"
          >
            Use Google map
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 justify-center items-center border border-gray-300 rounded-2xl p-5 shadow-lg w-80 h-60"
        >
          <IoPhonePortrait className="text-4xl text-purple-800 mt-2 " />
          <h3 className="text-purple-800 text-xl font-bold font-inter text-center">
            Phone Us
          </h3>
          <p className="text-center text-base text-gray-700">
            We are available to answer your calls from 9am to 6pm daily
          </p>
          <a
            href="tel:+233550280582 "
            className="border-2 py-1 px-8 border-purple-800 rounded-xl text-purple-800"
          >
            Call Us
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 justify-center items-center border border-gray-300 rounded-2xl p-5 shadow-lg w-80 h-60"
        >
          <h3 className="text-purple-800 text-xl font-bold font-inter text-center">
            Our Socials
          </h3>
          <p className="text-center text-base text-gray-700">
            You can also reach us on our socials to place orders and inquiries.
          </p>
          <div className="flex gap-5">
            {" "}
            <a href="https://www.instagram.com/_.jaysbite?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <img
                src="/icons/instagram.png"
                alt="instagram icon"
                className="w-16 h-16"
              />
            </a>
            <a href="https://www.tiktok.com/@jnjays.bite_?is_from_webapp=1&sender_device=pc">
              <img
                src="/icons/tiktok.png"
                alt="tiktok icon"
                className="w-16 h-16"
              />
            </a>
            <a href="https://wa.me/233550280582 ">
              <img
                src="/icons/whatsapp.png"
                alt="whatsapp icon"
                className="w-16 h-16"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
