export default function BoardOfTrusteePage() {
  const members = [
    { name: 'Dr. John Doe', role: 'Chairman', image: '/person1.jpeg' },
    { name: 'Prof. Mary Johnson', role: 'Vice Chairman', image: '/person2.jpeg' },
    { name: 'Aliyu Bello', role: 'Trustee', image: '/person1.jpeg' },
    { name: 'Ngozi Okafor', role: 'Trustee', image: '/person2.jpeg' },
    { name: 'Chinedu Ibe', role: 'Trustee', image: '/person1.jpeg' },
    { name: 'Amina Yusuf', role: 'Trustee', image: '/person2.jpeg' },
    { name: 'Amina Yusuf', role: 'Trustee', image: '/person1.jpeg' },
    { name: 'Amina Yusuf', role: 'Trustee', image: '/person2.jpeg' },

  ];

  const executives = members.slice(0, 2); // Chairman and Vice Chairman
  const trustees = members.slice(2);      // Remaining trustees

  return (
    <main>
      {/* Spacer Section */}
      <section className="h-40 flex items-center justify-center"></section>

      {/* Gradient Banner */}
         <section
  className="pt-4 h-60 flex items-center justify-center"
  style={{
    backgroundImage: `linear-gradient(to right,
      #ADFF2F,  /* light green (Tailwind green-300) */
      #008000,  /* dark green (Tailwind green-900) */
      #d18b11,  /* cream */
      #FEBE10,  /* beige */
      #e86d30   /* brown */
    )`
  }}
>
  <h1 className="text-white text-4xl font-bold">Board of Trustees</h1>
</section>
      {/* <section className=" pt-4 h-60 bg-gradient-to-r from-green-700 to-yellow-900 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Board of Trustees</h1>
      </section> */}

      {/* Executives Section (2-column on large, 1-column on medium and below) */}
      <section className="mx-24 py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {executives.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-100 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trustees Section (3-column on large, 2 on md, 1 on sm) */}
      <section className="mx-24 pb-12 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustees.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-100 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
