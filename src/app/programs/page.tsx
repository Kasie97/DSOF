'use client';

import Link from 'next/link';

export default function ProgramPage() {
  return (
    <div className="font-sans">
      {/* Hero Section with Background Image */}
      <section
        className="h-72 flex items-center justify-center bg-center bg-cover relative"
        style={{
          backgroundImage: `url('/image1.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-white text-4xl font-semibold">Programmes</h1>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Health Programme */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 border-2 border-blue-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0v6m-6-6v6m12-6v6"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-blue-700 font-semibold text-lg mb-2">Health Programme</h3>
            <p className="text-sm text-gray-700 mb-4">
              We are committed to ensuring access to quality healthcare among underserved communities
              in Nigeria by supporting interventions that provide comprehensive eye care services
              aimed at reducing preventable blindness; improving maternal and child health care;
              combating Neglected Tropical Diseases (NTDs); and improving community access to
              portable water, with emphasis on proper sanitation and hygiene.
            </p>
            <Link href="/programs/medicals">
              <button className="mt-2 px-4 py-2 border border-blue-600 text-blue-600 text-sm font-semibold rounded">
                READ MORE
              </button>
            </Link>
          </div>

          {/* Education Programme */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 border-2 border-blue-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0v6m-6-6v6m12-6v6"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-blue-700 font-semibold text-lg mb-2">Education Programme</h3>
            <p className="text-sm text-gray-700 mb-4">
              Our focus in Education is to support initiatives focused on enhancing the quality of
              Universal Basic Education through improving teacher quality in curriculum delivery;
              classroom and records management; and also, the provision of instructional resources
              that will facilitate teaching.
            </p>
            <Link href="/programs/scholarship">
              <button className="mt-2 px-4 py-2 border border-blue-600 text-blue-600 text-sm font-semibold rounded">
                READ MORE
              </button>
            </Link>
          </div>

          {/* Projects Supported */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 border-2 border-blue-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0v6m-6-6v6m12-6v6"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-blue-700 font-semibold text-lg mb-2">Sport Scholarships</h3>
            <p className="text-sm text-gray-700 mb-4">
              So far, the Foundation has supported over 200 projects implemented by 150 grantees in
              30 states of Nigeria. In the past, the Foundation’s funding also focused on providing
              skills for people living with disabilities, income generation for people at the
              grassroots and humanitarian support to internally displaced persons.
            </p>
            <Link href="/programs/sports">
              <button className="mt-2 px-4 py-2 border border-blue-600 text-blue-600 text-sm font-semibold rounded">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
