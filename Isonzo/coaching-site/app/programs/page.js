import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Programs() {
  return (
    <>
      <Navbar />

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16">
          Coaching Programs
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-8 rounded-2xl shadow-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4">Individual Coaching</h2>
            <p className="text-gray-700">
              Personalised sessions focused on mindset development,
              emotional intelligence, career clarity, and personal growth.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4">Corporate Training</h2>
            <p className="text-gray-700">
              Leadership development programs designed for teams,
              managers, and organisations aiming to improve performance
              and collaboration.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4">Institute Programs</h2>
            <p className="text-gray-700">
              Workshops and programs that help students build confidence,
              leadership skills, and emotional awareness.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}