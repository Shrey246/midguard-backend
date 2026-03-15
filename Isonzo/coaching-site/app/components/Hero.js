"use client";

import { motion } from "framer-motion";
import BrainParticles from "./brainparticles";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f5faf9] overflow-hidden px-6">

      {/* Particle Neural Background */}
      <BrainParticles />

      {/* glowing background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-200 rounded-full blur-[140px] opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-300 rounded-full blur-[140px] opacity-40"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-16 relative z-10">

        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-black">
            Activate Your Mind
            <br />
            <span className="text-teal-500">
              Unlock Your Potential
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-lg mb-8">
            Guided coaching programs that empower individuals to strengthen their mindset,
             build leadership skills and achieve meaningful personal and professional growth..
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-teal-500 text-white px-7 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition">
              Start Learning
            </button>

            <button className="border border-gray-300 px-7 py-3 rounded-lg hover:bg-gray-100 transition text-gray-600">
              Explore Programs
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE BRAIN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* glowing halo */}
          <div className="absolute w-[380px] h-[380px] bg-teal-300 blur-[120px] opacity-40 rounded-full"></div>

          {/* brain image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="scale-150"
            >
            <Image
              src="/brain.png"
              width={340}
              height={340}
              alt="brain"
            />
          </motion.div>

          {/* floating math symbols */}

          <motion.span
            className="absolute -top-6 left-10 text-teal-500 text-6xl font-bold opacity-40 drop-shadow-[0_0_20px_rgba(20,184,166,0.8)]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            π
          </motion.span>

          <motion.span
            className="absolute top-5 right-8 text-teal-500 text-6xl font-bold opacity-40 drop-shadow-[0_0_20px_rgba(20,184,166,0.8)]"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            ∑
          </motion.span>

          <motion.span
            className="absolute bottom-4 left-4 text-teal-500 text-6xl font-bold opacity-40 drop-shadow-[0_0_20px_rgba(20,184,166,0.8)]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            √
          </motion.span>

          <motion.span
            className="absolute bottom-4 right-6 text-teal-500 text-6xl font-bold opacity-40 drop-shadow-[0_0_20px_rgba(20,184,166,0.8)]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.2, repeat: Infinity }}
          >
            ∫
          </motion.span>
        </motion.div>

      </div>

      {/* scroll indicator */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute bottom-10 text-gray-500"
      >
        ↓
      </motion.div>

    </section>
  );
}