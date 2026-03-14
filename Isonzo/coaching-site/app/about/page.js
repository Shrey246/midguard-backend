import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="py-24 px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center">
          About Praveen
        </h1>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Praveen John Purushotham is a certified leadership and holistic
          coach who helps individuals and organizations achieve clarity,
          confidence, and purposeful growth.
        </p>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          With over 15 years of experience in leadership training and
          behavioural development, he works with professionals, leaders,
          and students to unlock their potential.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          His coaching focuses on building self-awareness, emotional
          intelligence, and practical strategies for long-term success.
        </p>
      </section>

      <Footer />
    </>
  );
}