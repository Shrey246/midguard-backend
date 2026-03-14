"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Image
            src="/coach.jpg"
            alt="Coach"
            width={600}
            height={600}
            className="rounded-2xl shadow-2xl object-cover"
          />

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-xl p-5">
            <p className="text-3xl font-bold text-teal-600">15+</p>
            <p className="text-sm text-gray-600">Years Experience</p>
          </div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Transforming Growth Into Clarity
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Praveen John Purushotham is a certified leadership and holistic
            coach who believes meaningful growth begins with awareness and
            conscious action. His coaching approach combines behavioural
            training, leadership development, and emotional intelligence to
            help individuals and teams achieve sustainable transformation.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            With over 15 years of experience working with professionals,
            entrepreneurs, and students, he focuses on building clarity,
            confidence, and purposeful decision-making.
          </p>

          <a
            href="/about"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-600 transition"
          >
            Learn More About Praveen
          </a>
        </motion.div>

      </div>
    </section>
  );
}