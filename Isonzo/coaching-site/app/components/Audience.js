"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Rocket, GraduationCap, Building2, UserCog } from "lucide-react";

export default function Audience() {

  const audience = [
    { icon: <Briefcase size={32} />, title: "Corporate Leaders" },
    { icon: <UserCog size={32} />, title: "Managers & Team Leaders" },
    { icon: <Rocket size={32} />, title: "Entrepreneurs" },
    { icon: <Building2 size={32} />, title: "HR Professionals" },
    { icon: <GraduationCap size={32} />, title: "Students" },
    { icon: <Users size={32} />, title: "Young Professionals" },
  ];

  return (
    <section className="py-10 md:py-16 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-500">
          Who He Works With
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-14 md:mb-16">
          Supporting individuals and organisations across industries to grow,
          lead, and perform with clarity and confidence.
        </p>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {audience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
              }}
              className="p-8 md:p-10 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 group cursor-pointer"
            >

              {/* Icon */}
              <div className="text-teal-500 mb-5 flex justify-center group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-gray-400 md:text-xl font-semibold">
                {item.title}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}