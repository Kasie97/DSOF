export default function HomePage() {
  return <>
  <div>This is Home Page</div>
      <main className="space-y-32">
      <section className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/image2.jpeg")' }}>
        {/* Hero Image Section */}
      </section>
      <section id="section2" className="h-screen bg-gray-100 flex items-center justify-center pt-40">
        <h2 className="text-4xl font-semibold">Section 2</h2>
      </section>
      <section id="section3" className="h-screen bg-gray-200 flex items-center justify-center">
        <h2 className="text-4xl font-semibold">Section 3</h2>
      </section>
      <section id="section4" className="h-screen bg-gray-300 flex items-center justify-center">
        <h2 className="text-4xl font-semibold">Section 4</h2>
      </section>
    </main>;
  </>
}
