import { Leaf, Wallet, Store } from "lucide-react";

const stats = [
  {
    icon: Leaf,
    value: "**00+ kg",
    label: "Food Saved",
    
  },
  {
    icon: Wallet,
    value: "$***,000+",
    label: "Customer Savings",
    
  },
  {
    icon: Store,
    value: "*0+",
    label: "Partner Shops",
    
  },
];

export default function Impact() {
  return (
    <section id="impact" className="scroll-mt-28 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-green-900 px-8 py-14 text-white shadow-lg">
          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
            {stats.map(({ icon: Icon, value, label}) => (
              <div key={label}>
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
                  <Icon className="h-8 w-8" />
                </div>

                <h2 className="text-4xl font-bold">{value}</h2>

                <h3 className="mt-2 text-xl font-semibold">{label}</h3>

                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}