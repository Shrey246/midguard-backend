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
    {
      name: "Neha Kapoor",
      role: "HR Professional",
      text: "The coaching sessions helped me lead my team with empathy and strategic clarity.",
    },
    {
      name: "Arjun Nair",
      role: "Startup Founder",
      text: "Working with Praveen gave me a completely new perspective on leadership and personal growth.",
    },
    {
      name: "Sneha Iyer",
      role: "Student",
      text: "His guidance helped me build confidence and focus on my career goals with clarity.",
    },
  ];

  /* duplicate testimonials to create seamless loop */
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-20 px-6 md:px-10 bg-gradient-to-b from-white to-gray-50">

      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-500">
          What Clients Say
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-14">
          Real experiences from individuals who have transformed their
          personal and professional growth through coaching.
        </p>

        <div className="relative overflow-hidden py-8">

          <motion.div
            className="flex gap-4 flex-nowrap w-max"
            animate={{ x: ["0%", "-10%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[240px] md:min-w-[260px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col justify-between"
              >
                {/* Stars */}
                <div className="flex justify-center mb-4 text-yellow-400">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>

                {/* Name */}
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>

              </div>
            ))}
          </motion.div>

        </div>

      </div>

    </section>
  );
}