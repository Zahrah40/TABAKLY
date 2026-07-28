import { Store, Search, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "Partner Shops List Surplus Food",
    description:
      "Bakeries, cafés, pastry shops, and restaurants upload quality food that is close to its best-before time at discounted prices.",
  },
  {
    icon: Search,
    title: "Customers Discover Deals",
    description:
      "Students and nearby customers browse available meals and pastries, finding affordable options from trusted local businesses.",
  },
  {
    icon: ShoppingBag,
    title: "Purchase & Reduce Waste",
    description:
      "Reserve your food, pick it up from the shop, save money, and help reduce unnecessary food waste.",
  },
];

export default function TabaklyModel() {
  return (
    <section id="model" className="scroll-mt-28 bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-900 font-semibold uppercase tracking-wider">
            The Tabakly Model
          </p>

          <h2 className="text-4xl md:text-5xl text-green-900 font-bold mt-4">
            Saving Food is Easy
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            Tabakly makes it simple for businesses to reduce waste and for
            customers to enjoy quality food at affordable prices.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition duration-300 p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <Icon className="text-green-600" size={28} />
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-orange-500">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}