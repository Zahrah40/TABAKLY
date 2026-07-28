"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  // 3. Array of images
  const images = [
    "/hero-images/hero-image-1.jpg",
    "/hero-images/hero-image-3.jpg",
  ];

  // 4. Current image
  const [currentImage, setCurrentImage] = useState(0);

  // 5. Automatically change images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);


      return () => clearInterval(interval);
    }, []);

  return (
    <section id= "about" className="scroll-mt-28 bg-white">

      <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left-Column */}

        <div>

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
            ♻️ Combating Food Waste Together
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight text-black">
            Save Good Food.
            <br />
            <span className="text-green-900">Save Money.</span>
            <br />
            <span className="text-orange-500">Reduce Waste.</span>
          </h1>

          <p className="text-gray-600 text-xl mt-8 leading-8">
            Tabakly connects bakeries, cafés, pastry shops, and restaurants
            with students and nearby customers to rescue delicious surplus
            food at discounted prices.
          </p>

          <div className="flex gap-4 mt-10">

            <a
              href="/signin/customer"
              target="_blank"
              className="bg-green-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Join as a Customer
            </a>

            <a
              href="/signin/merchant"
              target="_blank"
              className="text-black border border-gray-300 px-8 py-4 rounded-full font-semibold hover:orange-500 transition"
            >
              Partner as a Merchant
            </a>

          </div>

        </div>

        {/* Right-Column */}

        <Image
          src={images[currentImage]}
          alt="Tabakly Hero"
          width={700}
          height={700}
          className="rounded-3xl object-cover shadow-2xl transition-opacity duration-1000"
          priority
        />

      </div>

    </section>
  );
}