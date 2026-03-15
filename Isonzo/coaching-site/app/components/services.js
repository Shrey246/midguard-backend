"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { User, Building, GraduationCap } from "lucide-react";

export default function Programs() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f5faf9]">

        {/* HEADER */}
        <section className="py-24 px-8 max-w-4xl mx-auto text-center">

          <h1 className="text-5xl font-bold mb-6">
            Offerings
          </h1>

          <p className="text-teal-500 text-lg leading-relaxed">
            Explore coaching programs designed to help individuals,
            organizations and institutions unlock clarity, confidence
            and purposeful growth.
          </p>

        </section>


        {/* OFFERING CARDS */}
        <section className="max-w-7xl mx-auto px-8 pb-24">

          <div className="grid md:grid-cols-3 gap-10">

            {/* INDIVIDUALS */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="group bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:border-teal-400 transition relative overflow-hidden"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-teal-400 blur-2xl transition"></div>

              <User className="text-teal-500 mb-6" size={36} />

              <h3 className="text-2xl font-semibold mb-6">
                Individuals
              </h3>

              <ul className="space-y-2 text-teal-500 text-sm">

                <li>Career advancement & professional growth</li>
                <li>Stress management & emotional resilience</li>

                <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 space-y-2">

                  <li>Mindset shifts & belief reframing</li>
                  <li>Relationship building</li>
                  <li>Emotional regulation</li>
                  <li>Life transitions</li>
                  <li>Holistic wellness & balance</li>

                </div>

              </ul>

            </motion.div>


            {/* CORPORATES */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="group bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:border-teal-400 transition relative overflow-hidden"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-teal-400 blur-2xl transition"></div>

              <Building className="text-teal-500 mb-6" size={36} />

              <h3 className="text-2xl font-semibold mb-6">
                Corporates
              </h3>

              <ul className="space-y-2 text-teal-500 text-sm">

                <li>Leadership development programs</li>
                <li>Behavioural & mindset training</li>

                <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 space-y-2">

                  <li>Emotional intelligence at the workplace</li>
                  <li>Team communication</li>
                  <li>Change management support</li>
                  <li>Stress management</li>
                  <li>Organisational culture alignment</li>
                  <li>Leadership through SCUBA</li>

                </div>

              </ul>

            </motion.div>


            {/* INSTITUTES */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="group bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:border-teal-400 transition relative overflow-hidden"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-teal-400 blur-2xl transition"></div>

              <GraduationCap className="text-teal-500 mb-6" size={36} />

              <h3 className="text-2xl font-semibold mb-6">
                Institutes
              </h3>

              <ul className="space-y-2 text-teal-500 text-sm">

                <li>Student self-awareness programs</li>
                <li>Leadership foundations</li>

                <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 space-y-2">

                  <li>Faculty behavioural training</li>
                  <li>Habit building workshops</li>
                  <li>Personal growth bootcamps</li>
                  <li>Emergency First Response training</li>

                </div>

              </ul>

            </motion.div>

          </div>

        </section>


        {/* WHY THESE PROGRAMS */}
        <section className="bg-white py-24 px-8">

          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-3xl font-bold mb-10">
              Why These Programs Work
            </h2>

            <p className="text-teal-500 text-lg leading-relaxed mb-12">
              Each program blends leadership principles, emotional
              intelligence, and practical behavioural insights.
              The focus is not just knowledge, but real transformation
              that creates lasting impact.
            </p>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-[#f5faf9] p-8 rounded-xl shadow-md">
                <h3 className="font-semibold text-xl mb-2">
                  Practical Learning
                </h3>
                <p className="text-teal-500">
                  Strategies that can be applied immediately.
                </p>
              </div>

              <div className="bg-[#f5faf9] p-8 rounded-xl shadow-md">
                <h3 className="font-semibold text-xl mb-2">
                  Personal Transformation
                </h3>
                <p className="text-teal-500">
                  Develop clarity, confidence and resilience.
                </p>
              </div>

              <div className="bg-[#f5faf9] p-8 rounded-xl shadow-md">
                <h3 className="font-semibold text-xl mb-2">
                  Holistic Approach
                </h3>
                <p className="text-teal-500">
                  Mindset, behaviour and emotional intelligence combined.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="py-24 px-8 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Begin Your Growth Journey
          </h2>

          <p className="text-teal-500 text-lg mb-8">
            Take the next step toward personal and professional
            development through structured coaching programs.
          </p>

          <button className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Contact to Enroll
          </button>

        </section>

      </main>

      <Footer />
    </>
  );
}