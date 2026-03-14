"use client";

import { motion } from "framer-motion";
import { User, Building, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-28 px-8">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            Coaching Programs
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Tailored coaching programs designed for individuals,
            organisations, and educational institutions.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* INDIVIDUALS */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="group bg-gray-900 p-10 rounded-2xl border border-gray-800 hover:border-teal-400 transition duration-300 relative overflow-hidden"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-teal-400 blur-2xl transition"></div>

            <User className="text-teal-400 mb-6" size={36} />

            <h3 className="text-2xl font-semibold mb-6">
              Individuals
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">

              <li>Career advancement & professional growth</li>
              <li>Stress management & emotional resilience</li>

              {/* Hidden items */}
              <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 space-y-2">

                <li>Mindset shifts & belief reframing</li>
                <li>Relationship building (personal & professional)</li>
                <li>Emotional regulation & self-awareness</li>
                <li>Life transitions</li>
                <li>Holistic wellness & balance</li>

              </div>

            </ul>
          </motion.div>


          {/* CORPORATES */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="group bg-gray-900 p-10 rounded-2xl border border-gray-800 hover:border-teal-400 transition duration-300 relative overflow-hidden"
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-teal-400 blur-2xl transition"></div>

            <Building className="text-teal-400 mb-6" size={36} />

            <h3 className="text-2xl font-semibold mb-6">
              Corporates
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">

              <li>Leadership development programs</li>
              <li>Behavioural & mindset training</li>

              <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 space-y-2">

                <li>Emotional intelligence at the workplace</li>
                <li>Team dynamics & communication</li>
                <li>Change management support</li>
                <li>Stress management</li>
                <li>Organisational culture alignment</li>
                <li>Leadership through SCUBA</li>

              </div>

            </ul>
          </motion.div>


          {/* INSTITUTES */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="group bg-gray-900 p-10 rounded-2xl border border-gray-800 hover:border-teal-400 transition duration-300 relative overflow-hidden"
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-teal-400 blur-2xl transition"></div>

            <GraduationCap className="text-teal-400 mb-6" size={36} />

            <h3 className="text-2xl font-semibold mb-6">
              Institutes
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">

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


        {/* Bottom */}
        <div className="text-center mt-24 text-gray-500 text-sm">
          © {new Date().getFullYear()} Praveen Coaching
        </div>

      </div>
    </footer>
  );
}