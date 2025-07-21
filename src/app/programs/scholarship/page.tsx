'use client';

const summaryText = `On June 2, 2025, the TY Danjuma Foundation (TYDF), in strategic alignment with the World Health Organization (WHO), executed a multi-year collaborative framework agreement aimed at optimizing healthcare delivery infrastructure across marginalized and medically underserved populations in Nigeria. This high-impact partnership is designed to facilitate the deployment of critical medical assets, bolster the capacity-building of frontline health personnel through targeted training interventions, and operationalize mobile health units to enhance service penetration in geographically disadvantaged rural zones. On June 2, 2025, the TY Danjuma Foundation (TYDF), in strategic alignment with the World Health Organization (WHO), executed a multi-year collaborative framework agreement aimed at optimizing healthcare delivery infrastructure across marginalized and medically underserved populations in Nigeria. This high-impact partnership is designed to facilitate the deployment of critical medical assets, bolster the capacity-building of frontline health personnel through targeted training interventions, and operationalize mobile health units to enhance service penetration in geographically disadvantaged rural zones.`;

export default function ScholarshipPage() {
  return (
    <main className="space-y-2">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/image2.jpeg)` }}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white bg-white/30 p-6 rounded-md">
            <h1 className="text-4xl font-bold">Education</h1>
            <p className="text-xl mt-4">Enhancing Access to Quality Education</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-6 px-4 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Summary Text */}
          <div className="md:col-span-3">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              {summaryText}
            </p>
          </div>

          {/* Video Embed */}
          <div className="md:col-span-2">
            <div className="w-full aspect-video">
              <iframe
                width="100%"
                height="100%"
                className="rounded-md"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="TY Danjuma Foundation Dako School"
                frameBorder="0"
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
