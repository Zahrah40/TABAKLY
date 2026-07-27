export default function Hero() {
  return (
    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
            ♻️ Fighting Food Waste Together
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight text-black">
            Save Good Food.
            <br />
            Save Money.
            <br />
            Reduce Waste.
          </h1>

          <p className="text-gray-600 text-xl mt-8 leading-8">
            Tabakly connects bakeries, cafés, pastry shops, and restaurants
            with students and nearby customers to rescue delicious surplus
            food at discounted prices.
          </p>

          <div className="flex gap-4 mt-10">

            <a
              href="YOUR_CUSTOMER_SURVEY_LINK"
              target="_blank"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition"
            >
              I'm a Customer
            </a>

            <a
              href="MERCHANT_SURVEY_LINK"
              target="_blank"
              className="text-black border border-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-grey-900 transition"
            >
              I'm a Merchant
            </a>

          </div>

        </div>

        {/* Right */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900"
            alt="Bread"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}