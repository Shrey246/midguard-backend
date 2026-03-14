"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {

  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Corporate Manager",
      text: "Praveen helped me gain clarity in my leadership journey and build confidence in decision-making.",
    },
    {
      name: "Ananya Sharma",
      role: "Entrepreneur",
      text: "His coaching helped me overcome limiting beliefs and approach challenges with a growth mindset.",
    },
    {
      name: "Karan Patel",
      role: "Young Professional",
      text: "The sessions helped me develop emotional awareness and improve my professional relationships.",
    },
  ];

  return (
    <section className="py-28 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          What Clients Say
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Real experiences from individuals who have transformed their
          personal and professional growth through coaching.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >

              {/* Stars */}
              <div className="flex justify-center mb-4 text-yellow-400">
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <h3 className="font-semibold">
                {testimonial.name}
              </h3>

              <p className="text-sm text-gray-500">
                {testimonial.role}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}