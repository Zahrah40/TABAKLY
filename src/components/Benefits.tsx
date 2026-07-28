import {
  Store,
  Users,
  CheckCircle,
} from "lucide-react";

const merchantBenefits = [
  "Reduce food waste and spoilage",
  "Recover revenue from surplus products",
  "Reach more students and local customers",
  "Improve your sustainability efforts",
];

const customerBenefits = [
  "Buy quality food at discounted prices",
  "Discover nearby bakeries and cafés",
  "Help reduce food waste",
  "Support local businesses",
];

export default function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-28 bg-[#F8FAF7] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Benefits
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Value for Everyone
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Tabakly creates a win-win solution for both merchants and customers.
          </p>
        </div>

        {/* Two Cards */}
        <div className="mt-16 flex flex-col gap-8">

          {/* Merchant Card */}
          <div className="rounded-3xl bg-white p-10 shadow-sm transition hover:shadow-lg">

            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                <Store className="h-7 w-7 text-green-700" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                  For Merchants
                </p>

                <h3 className="text-2xl font-bold text-gray-900">
                  Grow While Reducing Waste
                </h3>
              </div>
            </div>

            <div className="space-y-5">
              {merchantBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-green-600" />
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Customer Card */}
          <div className="rounded-3xl bg-white p-10 shadow-sm transition hover:shadow-lg">

            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                <Users className="h-7 w-7 text-orange-600" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                  For Customers
                </p>

                <h3 className="text-2xl font-bold text-gray-900">
                  Save More, Waste Less
                </h3>
              </div>
            </div>

            <div className="space-y-5">
              {customerBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-green-600" />
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}