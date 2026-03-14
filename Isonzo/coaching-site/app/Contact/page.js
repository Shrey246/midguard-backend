import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="py-24 px-8 max-w-4xl mx-auto text-center">

        <h1 className="text-5xl font-bold mb-10">
          Contact
        </h1>

        <p className="text-gray-700 mb-10">
          Reach out to start your coaching journey or to learn more
          about available programs.
        </p>

        <div className="space-y-6 text-lg">
          <p>Email: info@praveencoaching.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
          <p>Location: India</p>
        </div>

      </section>

      <Footer />
    </>
  );
}