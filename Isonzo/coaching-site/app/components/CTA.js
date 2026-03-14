"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-28 px-8 bg-gradient-to-r from-teal-500 to-emerald-600 text-white">

      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Growth Journey?
        </h2>

        <p className="text-lg text-white/90 mb-10">
          Take the first step toward clarity, confidence, and purposeful
          leadership with personalised coaching.
        </p>

        <button className="bg-white text-teal-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          Book a Coaching Session
        </button>

      </motion.div>

    </section>
  );
}