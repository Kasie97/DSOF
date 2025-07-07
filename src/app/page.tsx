export default function HomePage() {
  return (
    <section className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Dr. Solomon Otobo Foundation
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Empowering communities through education, health, and youth development.
        </p>
        <a
          href="/about-us"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Learn More About Us
        </a>
      </div>
    </section>
  );
}
