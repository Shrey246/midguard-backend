"use client";

import { motion } from "framer-motion";
import { Compass, Zap, CheckCircle, TrendingUp } from "lucide-react";

export default function Philosophy() {
  const pillars = [
    {
      icon: <Compass size={32} />,
      title: "Clarity",
      description:
        "Helping individuals define goals, values, and direction with purpose and intention.",
    },
    {
      icon: <Zap size={32} />,
      title: "Empowerment",
      description:
        "Building confidence and self-belief to take conscious and impactful action.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Accountability",
      description:
        "Ensuring consistent progress through structured reflection and follow-ups.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Growth Mindset",
      description:
        "Encouraging adaptability, learning, and long-term behavioural transformation.",
    },
  ];

  return (
    <section className="py-28 px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          Coaching Philosophy
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          A structured approach designed to create sustainable personal and
          professional growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group"
            >
              <div className="text-teal-500 mb-6 flex justify-center group-hover:scale-110 transition">
                {pillar.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {pillar.title}
              </h3>

              <p className="text-gray-900 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}