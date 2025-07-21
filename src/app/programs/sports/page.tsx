'use client';

import { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';

const newsItems = [
  {
    image: "/image1.jpeg",
    summary: `On June 2, 2025, in a significant move to advance Nigeria’s healthcare system, the TY Danjuma Foundation (TYDF) and the World Health Organization (WHO) signed a multi-year agreement to strengthen healthcare accessibility in underserved communities. The partnership aims to deliver essential medical resources, support training for health workers, and establish mobile clinics across rural areas.On June 2, 2025, in a significant move to advance Nigeria’s healthcare system, the TY Danjuma Foundation (TYDF) and the World Health Organization (WHO) signed a multi-year agreement to strengthen healthcare accessibility in underserved communities. The partnership aims to deliver essential medical resources, support training for health workers, and establish mobile clinics across rural areas.`,
  },
];

const infoItems = [
  {
    label: "Mission",
    content:
      "Our mission is to improve the quality of life for underserved populations by supporting initiatives that enhance access to healthcare, education, and economic opportunities.",
  },
  {
    label: "Vision",
    content:
      "A Nigeria where every individual has access to the basic social services needed to thrive and contribute meaningfully to society.",
  },
  {
    label: "Main Goals",
    content:
      "Enhance community health care by providing free medical services to rural communities which lack adequate medical facilities. Improve the quality of education of children and young people and Alleviate the extreme poverty in communities across the country by providing humanitarian assistance, clean drinking water, and encouraging the empowerment of women",
  },
  {
    label: "Core Values",
    content:
      "Transparency, accountability, inclusiveness, innovation, and impact-driven interventions guide all our efforts.",
  },
  {
    label: "Focus Areas",
    content:
      "Healthcare access, education improvement, food security, gender equity, and youth empowerment.",
  },
  {
    label: "How the Foundation Works",
    content:
      "We partner with local organizations, offer capacity-building support, and provide funding to implement high-impact projects that align with our strategic objectives.",
  },
];

export default function SportsPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (label: string) => {
    setOpenItem((prev) => (prev === label ? null : label));
  };

  return (
    <main className="space-y-2">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/image2.jpeg)` }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      <section id="section3" className="py-6 px-24">
        <div className="grid grid-cols-5 gap-6 max-w-7xl mx-auto">
          <div className="col-span-2">
            {newsItems.map((news, i) => (
              <div key={i}>
                <img
                  src={news.image}
                  alt={`News item ${i + 1}`}
                  className="h-48 w-full object-cover"
                />
                <p className="mt-2 text-lg text-gray-700">{news.summary}</p>
              </div>
            ))}
          </div>

          <div className="col-span-3 space-y-4">
            {infoItems.map(({ label, content }) => (
              <div key={label} className="border border-gray-200 rounded">
                <button
                  onClick={() => toggleItem(label)}
                  className="w-full flex items-center justify-between px-4 py-6 bg-cream shadow-sm hover:bg-footer-brown text-xl font-medium transition-shadow duration-200"
                >
                  <span>{label}</span>
                  <IoIosAddCircle className="text-xl text-gray-600" />
                </button>
                {openItem === label && (
                  <div className="px-4 py-3 text-sm text-gray-700 bg-white border-t border-gray-200 transition-all duration-300">
                    {content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}