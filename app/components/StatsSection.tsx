import React from "react";

const stats = [
  { value: "2750+", label: "Hours of Advice" },
  { value: "520M+", label: "Sq. Feet Analyzed" },
  { value: "210+", label: "Partner Builders" },
  { value: "500+", label: "Projects Across Bangalore" },
];

export default function StatsSection() {
  return (
    <section aria-label="Stats and social proof" className="bg-white pb-12">
      <div className="relative border-t border-b border-gray-100 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-orange-50/30 to-transparent pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-center text-[11.5px] font-semibold uppercase tracking-[0.15em] text-gray-400 pt-10 pb-8">
            Trusted by 1000+ intelligent homebuyers
          </p>

          <dl className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden mb-10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center text-center px-6 py-8 bg-gradient-to-b from-orange-50/60 to-transparent [&:hover]:bg-orange-50/80 transition-colors duration-300"
              >
                <dt className="order-2 mt-2.5 text-[12px] text-gray-500 font-medium leading-snug">
                  {stat.label}
                </dt>
                <dd className="order-1 text-[40px] sm:text-[48px] font-extrabold text-gray-900 leading-none tracking-tight [.group:hover_&]:text-[#ff6b35] transition-colors duration-300">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
