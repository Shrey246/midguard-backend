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
    <section className="py-16 md:py-20 px-6md:px-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-500">
          Coaching Philosophy
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-14 md:mb-16">
          A structured approach designed to create sustainable personal and
          professional growth.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
              }}
              className="bg-white p-7 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
            >

              {/* Icon */}
              <div className="text-teal-500 mb-5 flex justify-center transform group-hover:scale-110 transition">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-gray-400 md:text-xl font-semibold mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {pillar.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}