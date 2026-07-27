import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-green-900">
              Tabakly
            </h2>

            <p className="mt-4 text-gray-700 leading-7">
              Helping bakeries, cafés, pastry shops, and restaurants
              reduce food waste while making quality food affordable
              for students and nearby communities.
            </p>
          </div>


          {/* Surveys */}
          <div>
            <h3 className="font-semibold text-lg mb-3">
              Surveys
            </h3>

            <div className="flex flex-col gap-2">

              <a
                href="YOUR_CUSTOMER_SURVEY_LINK"
                target="_blank"
                className="hover:text-green-400"
              >
                Customer Survey
              </a>

              <a
                href="YOUR_MERCHANT_SURVEY_LINK"
                target="_blank"
                className="hover:text-green-400"
              >
                Merchant Survey
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3">
              Contact
            </h3>

            <div className="space-y-3 text-gray-700">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                hello@tabakly.com
              </div>

              <div className="flex items-center gap-3">
                <span>📷</span>
                @tabakly
              </div>

              <div className="flex items-center gap-3">
                <span>🛄</span> 
                Tabakly
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                Ankara, Türkiye
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">

          © {new Date().getFullYear()} Tabakly. All rights reserved.

        </div>

      </div>
    </footer>
  );
}