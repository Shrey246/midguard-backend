"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-36 px-8 text-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50">

      {/* animated circle 1 */}
      <motion.div
        className="absolute w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ top: -100, left: -100 }}
      />

      {/* animated circle 2 */}
      <motion.div
        className="absolute w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, -60, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ bottom: -120, right: -120 }}
      />

      <div className="relative max-w-3xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Grow With Clarity & Purpose
        </h1>

        <p className="text-lg text-gray-700 mb-10">
          Leadership Coaching • Mindset Development • Personal Growth
        </p>

        <button className="bg-teal-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition">
          Book a Session
        </button>

      </div>
    </section>
  );
}