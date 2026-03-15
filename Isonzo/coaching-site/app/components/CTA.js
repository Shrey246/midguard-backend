"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-gradient-to-r from-teal-500 to-emerald-600 text-white">

      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
          Ready to Start Your Growth Journey?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto">
          Take the first step toward clarity, confidence, and purposeful
          leadership with personalised coaching.
        </p>

        {/* Button */}
        <button className="bg-white text-teal-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          Book a Coaching Session
        </button>

      </motion.div>

    </section>
  );
}