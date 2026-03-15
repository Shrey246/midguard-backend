import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f5faf9]">

        {/* PROFILE INTRO */}
        <section className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <Image
              src="/coach.jpg"
              alt="Praveen John Purushotham"
              width={420}
              height={420}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-500">
              Praveen John Purushotham
            </h1>

            <p className="text-lg text-teal-500 leading-relaxed mb-6">
              Praveen John Purushotham is a certified leadership and holistic
              coach dedicated to helping individuals and organizations unlock
              clarity, confidence, and purposeful growth.
            </p>

            <p className="text-lg text-teal-500 leading-relaxed">
              With more than 15 years of experience in leadership training and
              behavioural development, he has guided professionals, leaders,
              and students toward meaningful personal and professional
              transformation.
            </p>
          </div>

        </section>


        {/* EXPERIENCE HIGHLIGHTS */}
        <section className="max-w-6xl mx-auto px-8 pb-24">

          <h2 className="text-3xl font-bold text-center mb-14 text-gray-500">
            Experience & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold mb-2 text-gray-400">15+</h3>
              <p className="text-teal-500">Years of Leadership Training</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold mb-2 text-gray-400">1000+</h3>
              <p className="text-teal-500">Individuals Guided</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold mb-2 text-gray-400">Holistic</h3>
              <p className="text-teal-500">Coaching Approach</p>
            </div>

          </div>

        </section>


        {/* PHILOSOPHY */}
        <section className="bg-white py-24 px-8">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-3xl font-bold mb-8 text-gray-500">
              Coaching Philosophy
            </h2>

            <p className="text-lg text-teal-500 leading-relaxed">
              Praveen believes that meaningful leadership begins with
              self-awareness. His coaching integrates emotional intelligence,
              behavioural insights, and practical strategies that help
              individuals navigate challenges with clarity and confidence.
              Through personalized guidance and structured frameworks,
              participants learn to develop resilience, make better decisions,
              and create lasting positive change in their professional and
              personal lives.
            </p>

          </div>

        </section>


        {/* FOCUS AREAS */}
        <section className="max-w-6xl mx-auto px-8 py-24">

          <h2 className="text-3xl font-bold text-center mb-14 text-gray-500">
            Key Focus Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-md text-teal-500 text-bold">
              Leadership Development
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-teal-500 text-bold">
              Emotional Intelligence
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-teal-500 text-bold">
              Personal Clarity
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-teal-500 text-bold">
              Confidence Building
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-teal-500 text-bold">
              Career Direction
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-teal-500 text-bold">
              Decision Making
            </div>

          </div>

        </section>


        {/* CALL TO ACTION */}
        <section className="bg-[#0f766e] text-white py-20 px-8">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-3xl font-bold mb-6">
              Start Your Growth Journey
            </h2>

            <p className="text-lg mb-8 opacity-90">
              Whether you are a student, professional, or leader,
              coaching can help you unlock new perspectives and
              achieve meaningful progress in your life and career.
            </p>

            <button className="bg-white text-[#0f766e] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Book a Session
            </button>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}