"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Rocket, GraduationCap, Building2, UserCog } from "lucide-react";

export default function Audience() {

  const audience = [
    {
      icon: <Briefcase size={32} />,
      title: "Corporate Leaders",
    },
    {
      icon: <UserCog size={32} />,
      title: "Managers & Team Leaders",
    },
    {
      icon: <Rocket size={32} />,
      title: "Entrepreneurs",
    },
    {
      icon: <Building2 size={32} />,
      title: "HR Professionals",
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Students",
    },
    {
      icon: <Users size={32} />,
      title: "Young Professionals",
    },
  ];

  return (
    <section className="py-28 px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          Who He Works With
        </h2>

        <p className="text-gray-900 max-w-2xl mx-auto mb-16">
          Supporting individuals and organisations across industries to grow,
          lead, and perform with clarity and confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {audience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-2xl bg-gray-50 shadow-lg hover:shadow-2xl transition duration-300 group cursor-pointer"
            >
              <div className="text-teal-500 mb-6 flex justify-center group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}