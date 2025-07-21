export default function ContactPage() {
  return (
    <>
      <section
        className="pt-4 h-60 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to right,
            #ADFF2F,
            #008000,
            #d18b11,
            #FEBE10,
            #e86d30
          )`,
        }}
      >
        <h1 className="text-white text-4xl font-bold">Contact Page</h1>
      </section>

      <div className="bg-[#e5e5e5] py-12 px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-semibold text-blue-700">
              📍 Head Office - Abuja
            </h3>
            <p className="mt-2 text-sm text-gray-800">
              35, Fandriana Close, Off Oda Crescent,
              <br />
              off Dar Es Salaam Street, Off Aminu
              <br />
              Kanu Crescent, Wuse II, Abuja.
              <br />
              <strong>+234 906 5447 852</strong>
              <br />
              Email: contact@tydanjumafoundation.org
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-semibold text-blue-700">
              📍 Taraba Office
            </h3>
            <p className="mt-2 text-sm text-gray-800">
              Former Ministry of Poverty
              <br />
              Alleviation Office, Jolly Nyame Street,
              <br />
              after Taraba Hotel, Jalingo, Taraba State.
              <br />
              <strong>+234 811 654 8718</strong>
              <br />
              Email: taraba@tydanjumafoundation.org
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-semibold text-blue-700">
              📍 Edo Office
            </h3>
            <p className="mt-2 text-sm text-gray-800">
              1st Floor, Ighodaro Ehanire House,
              <br />
              34 Akpakpava Road,
              <br />
              Benin City, Edo State
              <br />
              <strong>+234 803 388 2492</strong>
              <br />
              Email: edo@tydanjumafoundation.org
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Contact Us</h2>
          <p className="text-sm text-gray-600 mb-6">
            Thank you for your interest in the work of the Foundation. Please
            fill the short form below.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold">
                Your Organisation
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
