'use client';

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/image1.jpeg", "/image2.jpeg", "/image3.jpeg"];

const newsItems = [
  {
    image: "/image1.jpeg",
    title: "YOuth accessibility to social care in Ebonyi State",
    date: "Jun 5, 2025",
    summary:
      "On June 2, 2025, in a significant move to advance Nigeria’s healthcare system, the TY Danjuma Foundation (TYDF) and the World Health Organization (WHO) signed a multi...",
  },
  {
    image: "/image2.jpeg",
    title:
      "Promoting the Uptake of Maternal and Child Health Services in Akwa Ibom State",
    date: "May 28, 2025",
    summary:
      "The TY Danjuma Foundation's partnership with the Antorf Rural Resource Development Centre (ARRDEC) promoted the uptake of maternal and child healthcare services...",
  },
  {
    image: "/image3.jpeg",
    title: "Enhancing Food Security and Nutrition in Wassa IDP Camp",
    date: "May 21, 2025",
    summary:
      "In March 2025, the TY Danjuma Foundation (TYDF), in partnership with the Social Welfare Network Initiative (SWNI), distributed food to displaced persons at the Wassa IDP...",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <main className="m-0 p-0">
      <div className="h-10" />
      <section className="relative h-[55vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${images[index]})` }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-1/2 left-0 right-0 px-6 flex justify-between items-center z-20">
          <button
            onClick={handlePrev}
            className="bg-white/50 hover:bg-white/70 rounded-full p-2 transition"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white/50 hover:bg-white/70 rounded-full p-2 transition"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </section>

      {/* Section 2: Our Impact */}
      <section id="section2" className=" bg-footer-brown text-center text-black pt-6 pb-2">
        <h2 className="text-2xl font-bold mb-10">OUR IMPACT</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-4xl">💵</span>
            <p className="text-xl font-bold">$41.5 Million</p>
            <p className="text-md text-black">Awarded in Grants</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-4xl">🖥️</span>
            <p className="text-xl font-bold">Over 340 Projects</p>
            <p className="text-md text-black">Implemented</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-4xl">🗺️</span>
            <p className="text-xl font-bold">Across 36 States</p>
            <p className="text-md text-black">and the FCT</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-4xl">👥</span>
            <p className="text-xl font-bold">More than 10 Million</p>
            <p className="text-md text-black">People reached</p>
          </div>
        </div>
      </section>

      {/* Section 3: Latest News */}
      <section id="section3" className="py-16 border-y border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
          LATEST NEWS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {newsItems.map((news, i) => (
            <div
              key={i}
              className="rounded shadow-md overflow-hidden bg-white hover:shadow-lg transition"
            >
              <img
                src={news.image}
                alt={news.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 space-y-2 text-left">
                <h3 className="font-semibold text-gray-800">{news.title}</h3>
                <p className="text-sm text-gray-500">{news.date}</p>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {news.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-blue-600 text-sm mt-6 text-left max-w-7xl mx-auto">
          <a href="#" className="hover:underline">
            « Older Entries
          </a>
        </div>
      </section>

      {/* Section 4 (optional placeholder) */}
      {/* <section
        id="section4"
        className="h-screen bg-gray-300 flex items-center justify-center"
      >
        <h2 className="text-4xl font-semibold">Section 4</h2>
      </section> */}
    </main>
  );
}
