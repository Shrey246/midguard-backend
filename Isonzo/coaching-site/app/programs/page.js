"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { User, Building, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Offerings() {
return (
<> <Navbar />
  <main className="bg-[#f5faf9]">

    {/* PAGE HEADER */}
    <section className="py-24 px-8 text-center max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-gray-500">
        Offerings
      </h1>

      <p className="text-teal-500 text-lg leading-relaxed">
        Coaching programs designed to help individuals, organizations,
        and institutions develop clarity, resilience, leadership,
        and meaningful growth.
      </p>
    </section>


    {/* INDIVIDUALS */}
    <section className="max-w-6xl mx-auto px-8 py-20">

      <div className="flex items-center gap-4 mb-10">
        <User className="text-teal-500" size={36} />
        <h2 className="text-3xl font-bold text-gray-500">For Individuals</h2>
      </div>

      <p className="text-teal-500 mb-10 text-lg">
        Tailored one-on-one coaching designed to meet your unique needs:
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {[
          "Career advancement & professional growth",
          "Stress management & emotional resilience",
          "Mindset shifts & belief reframing",
          "Relationship building (personal & professional)",
          "Emotional regulation & self-awareness",
          "Life transitions (career or personal)",
          "Holistic wellness & balance",
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-teal-400 transition"
          >
            <p className="text-teal-500">{item}</p>
          </motion.div>
        ))}

      </div>
    </section>


    {/* CORPORATES */}
    <section className="bg-white py-24 px-8">

      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-10">
          <Building className="text-teal-500" size={36} />
          <h2 className="text-3xl font-bold text-gray-500">For Corporates</h2>
        </div>

        <p className="text-teal-500 mb-10 text-lg">
          Designed to support leadership excellence and organisational growth:
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Leadership development programs",
            "Behavioural & mindset training",
            "Emotional intelligence at the workplace",
            "Team dynamics & communication enhancement",
            "Change management support",
            "Stress management for high-pressure roles",
            "Organisational culture & performance alignment",
            "Leadership through SCUBA - Signature Program",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-[#f5faf9] p-6 rounded-xl shadow-md border border-gray-100 hover:border-teal-400 transition"
            >
              <p className="text-teal-500">{item}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>


    {/* INSTITUTES */}
    <section className="max-w-6xl mx-auto px-8 py-24">

      <div className="flex items-center gap-4 mb-10">
        <GraduationCap className="text-teal-500" size={36} />
        <h2 className="text-3xl font-bold text-gray-500">
          For Institutes & Educational Organisations
        </h2>
      </div>

      <p className="text-teal-500 mb-10 text-lg">
        Focused on shaping emotionally intelligent, resilient individuals:
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {[
          "Student self-awareness & emotional regulation programs",
          "Leadership foundations for young professionals",
          "Faculty development & behavioural training",
          "Habit building, focus, and discipline workshops",
          "Personal growth bootcamps for students",
          "Emergency First Response (EFR) training",
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-teal-400 transition"
          >
            <p className="text-teal-500">{item}</p>
          </motion.div>
        ))}

      </div>
    </section>


    {/* CTA */}
    <section className="bg-teal-500 text-white py-24 px-8 text-center">

      <h2 className="text-3xl font-bold mb-6">
        Begin Your Growth Journey
      </h2>

      <p className="text-lg mb-8 opacity-90">
        Discover the coaching program that fits your personal or
        professional growth journey.
      </p>

      <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
        Contact to Enroll
      </button>

    </section>

  </main>

  <Footer />
</>
);
}
