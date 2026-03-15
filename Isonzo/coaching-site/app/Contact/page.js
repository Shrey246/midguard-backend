import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f5faf9]">

        {/* INTRO */}
        <section className="py-24 px-8 max-w-4xl mx-auto text-center">

          <h1 className="text-5xl font-bold mb-6 text-gray-500">
            Get in Touch
          </h1>

          <p className="text-teal-500 text-lg max-w-2xl mx-auto">
            Whether you are looking to grow personally or professionally,
            coaching can help you gain clarity, confidence and direction.
            Reach out to learn more about available coaching programs.
          </p>

        </section>


        {/* CONTACT CARDS */}
        <section className="max-w-5xl mx-auto px-8 pb-24">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-400">
                Email
              </h3>
              <p className="text-teal-500">
                coachpraveenjp@gmail.com
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-400">
                Phone
              </h3>
              <p className="text-teal-500">
                +91 98451 21178
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-400">
                Location
              </h3>
              <p className="text-teal-500">
                India
              </p>
            </div>

          </div>

        </section>


        {/* CONTACT FORM */}
        <section className="bg-white py-24 px-8">

          <div className="max-w-3xl mx-auto">

            <h2 className="text-3xl font-bold text-center mb-12 text-gray-500">
              Send a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text" 
                placeholder="Your Name"
                className="w-full border border-black-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-black-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-black-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              />

              <button
                type="submit"
                className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-gray-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}