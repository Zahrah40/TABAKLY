import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F8FAF7] text-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">

          {/* Logo */}
          <div>
            <h2 className="text-4xl font-bold text-green-900">
              Tabakly
            </h2>

            <p className="mt-5 max-w-md leading-8 text-gray-600">
              Helping bakeries, cafés, pastry shops, and restaurants reduce
              food waste while making quality food affordable for students and
              nearby communities.
            </p>
          </div>

          {/* Surveys */}
          <div
            id="surveys"
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="mb-5 text-xl font-semibold">
              Help us Help You
            </h3>

            <div className="w-full space-y-4">

              <a
                href="CUSTOMER_SURVEY_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-green-100 bg-white px-5 py-4 text-center font-medium transition hover:border-green-600 hover:bg-green-50"
              >
                Customer Survey
              </a>

              <a
                href="MERCHANT_SURVEY_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-green-100 bg-white px-5 py-4 text-center font-medium transition hover:border-green-600 hover:bg-green-50"
              >
                Merchant Survey
              </a>

            </div>
          </div>

          {/* Contact */}
          <div id="contact">
            <h3 className="mb-5 text-xl font-semibold">
              Connect With Us Today
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-green-700" />
                <span>tabakly@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg">📷</span>
                <span>@tabakly</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg">💼</span>
                <span>Tabakly</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-green-700" />
                <span>Ankara, Türkiye</span>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-14 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Tabakly. All rights reserved.
        </div>

      </div>
    </footer>
  );
}