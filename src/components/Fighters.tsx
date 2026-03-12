"use client";
import Link from "next/link";
import { fighters } from "@/data/fighters";

export default function Fighters() {
  return (
    <section id="fighters" className="relative pt-20 sm:pt-28 pb-10 sm:pb-14 bg-white overflow-hidden">
      <div className="absolute inset-x-0 top-20 sm:top-28 flex items-center justify-center pointer-events-none select-none h-16 sm:h-20">
        <span className="font-heading font-bold uppercase text-gray-900 opacity-[0.08] text-[6vw] leading-none whitespace-nowrap">FIGHTERS</span>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl uppercase text-gray-900">
            Our Fighters
          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fighters.map((fighter) => (
            <Link
              key={fighter.slug}
              href={`/fighters/${fighter.slug}/`}
              className="bg-gray-100 group block transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative overflow-hidden" style={{ minHeight: 420 }}>
                <img
                  src={fighter.image}
                  alt={fighter.name}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 absolute inset-0 ${
                    fighter.slug === "milans-volkovs"
                      ? "object-[center_15%] scale-110"
                      : "object-top"
                  }`}
                  style={{ minHeight: 420 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="text-gray-500 font-heading text-[10px] tracking-[0.25em] uppercase mb-1.5">
                    {fighter.weightClass}
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase text-gray-900 leading-tight">
                    {fighter.name}
                  </h3>
                  {fighter.nickname && (
                    <div className="text-gray-500 font-heading text-xs italic mt-1.5">
                      &ldquo;{fighter.nickname}&rdquo;
                    </div>
                  )}
                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-300">
                    <span className="text-gray-900 font-heading font-bold text-base sm:text-lg">
                      {fighter.record.wins}-{fighter.record.losses}-{fighter.record.draws}
                    </span>
                    <span className="text-gray-600 text-xs font-heading tracking-wider">
                      {fighter.kos} KOs
                    </span>
                  </div>
                  {fighter.ranking && (
                    <div className="mt-3">
                      <span className="text-[#c41e3a] font-heading text-[10px] tracking-[0.2em] uppercase">
                        🏆 {fighter.ranking}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="section-divider mt-10 sm:mt-14" />
    </section>
  );
}
