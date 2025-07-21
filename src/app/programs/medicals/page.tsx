// app/medical/page.tsx
'use client';

import { useState } from 'react';

const tabs = [
  {
    title: 'Preventable Blindness',
    content: (
      <>
        <p className="text-gray-800 leading-relaxed text-base md:text-lg">
          Blindness remains a major problem of public health significance in Nigeria.
          <a
            href="https://www.who.int/publications-detail-redirect/9789241563556"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-1"
          >
            The National Blindness and Visual Impairment Survey for Nigeria which was conducted in 2008
          </a>
          , estimates that 1.1 million Nigerian adults are blind and an additional 3 million have visual impairment. Overall, 42 out of every 1000 adults aged 40 and above are blind. It is also estimated that 88% of the blindness and visual impairments in Nigeria are due to avoidable causes; most commonly cataract.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed text-base md:text-lg">
          In line with Sustainable Development Goal 3 aimed at promoting good health and wellbeing, the Foundation will support free eye care services as part of its flagship and strategic initiative – <strong>“Vision for a Brighter Future”</strong>. Resources will be channelled into the provision of comprehensive eye care services; including cataract surgeries, improving and correcting refractive errors in underserved communities in high need states as well as screening, treating eye ailments in public schools and early detection of glaucoma, the silent killer.
        </p>
        <div className="mt-6">
          <h3 className="font-semibold text-lg text-gray-800">The key objectives of the “Vision for a Brighter Future” intervention include:</h3>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
            <li>To reduce the prevalence of cataract in targeted states.</li>
            <li>To reduce the burden of preventable blindness by correcting cases of refractive errors in adults in targeted states.</li>
            <li>To screen children in public schools for refractive errors in targeted states.</li>
            <li>To improve the capacity of health workers on primary eye care in targeted states.</li>
            <li>To increase awareness on preventable blindness in targeted states.</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'Maternal and Child Health',
    content: <p className="text-gray-800 text-base">Content for Maternal and Child Health coming soon...</p>,
  },
  {
    title: 'Neglected Tropical Diseases',
    content: <p className="text-gray-800 text-base">Content for Neglected Tropical Diseases coming soon...</p>,
  },
  {
    title: 'Rufkatu Danjuma Maternity',
    content: <p className="text-gray-800 text-base">Content for Rufkatu Danjuma Maternity coming soon...</p>,
  },
];

export default function MedicalPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="space-y-2">
      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/image2.jpeg)` }} />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white bg-white/30 p-6 rounded-md">
            <h1 className="text-4xl font-bold">Health</h1>
            <p className="text-xl mt-4">Providing Access to Quality and Affordable Healthcare</p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-4 md:px-24 pt-6">
        <div className="flex flex-wrap gap-4 border-b border-gray-200">
          {tabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeIndex === idx
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-600 border-transparent hover:text-blue-500'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </section>

      {/* Content + Video */}
      <section className="py-6 px-4 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
          <div className="md:col-span-3">{tabs[activeIndex].content}</div>
          <div className="md:col-span-2">
            <div className="w-full aspect-video">
              <iframe
                width="100%"
                height="100%"
                className="rounded-md"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="TY Danjuma Health Initiative"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
