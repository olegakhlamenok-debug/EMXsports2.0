"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const pastEvents = [
  {
    name: "KOK '128 × Dream Boxing",
    date: "February 21, 2026",
    venue: "Xiaomi Arena, Riga, Latvia",
    status: "completed" as const,
    broadcast: "DAZN",
    bouts: [
      {
        fighterA: "Aleksejevs",
        recA: "20-0-0",
        fighterB: "Falcinelli",
        recB: "17-2-2",
        result: "Aleksejevs wins by SD",
        title: "IBF European Middleweight Title",
        image: `${basePath}/images/aleksejevs-article.jpg`,
      },
      {
        fighterA: "Volkovs",
        recA: "12-4-2",
        fighterB: "Christian F. Luis",
        recB: "13-4-0",
        result: "Volkovs wins by UD",
        title: "IBF International Cruiserweight Title",
        image: `${basePath}/images/volkovs-article.jpg`,
      },
    ],
  },
  {
    name: "KOK '127",
    date: "October 11, 2025",
    venue: "Arena Riga, Riga, Latvia",
    status: "completed" as const,
    broadcast: "DAZN",
    bouts: [
      {
        fighterA: "Chukhadzhian",
        recA: "26-3-0",
        fighterB: "Mafauad",
        recB: "13-1-0",
        result: "Chukhadzhian wins by TKO R2",
        title: "IBF International Welterweight Title",
        image: `${basePath}/images/gallery/5.jpg`,
      },
    ],
  },
];

export default function EventsPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Hero — arena style */}
      <section className="relative overflow-hidden">
        <div className="h-[50vh] sm:h-[60vh] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0a0a0a]/80 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(196,30,58,0.15),_transparent_70%)]" />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="font-heading font-bold uppercase text-white opacity-[0.04] text-[20vw] leading-none whitespace-nowrap">
              EVENTS
            </span>
          </div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
            <h1 className="font-heading font-bold text-6xl sm:text-7xl md:text-8xl uppercase text-white text-center">
              Events
            </h1>
            <p className="text-gray-500 font-heading text-xs sm:text-sm tracking-[0.3em] uppercase mt-4">
              Fight Nights · Title Bouts · Live on DAZN
            </p>
          </div>
        </div>
      </section>

      {/* No upcoming events notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="border border-gray-800 p-6 sm:p-8 text-center">
          <p className="text-gray-500 font-heading text-sm tracking-wider uppercase">
            No upcoming events announced yet
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Follow{" "}
            <a
              href="https://www.instagram.com/emx.sports/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c41e3a] hover:text-white transition-colors"
            >
              @emx.sports
            </a>{" "}
            for announcements
          </p>
        </div>
      </section>

      {/* Previous Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-white">
            Previous Events
          </h2>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {pastEvents.map((event, ei) => (
            <div key={ei}>
              {/* Event header */}
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="bg-gray-800 text-gray-400 font-heading text-[9px] tracking-[0.2em] uppercase px-3 py-1">
                    Completed
                  </span>
                  <span className="bg-white/5 text-gray-500 font-heading text-[9px] tracking-[0.2em] uppercase px-3 py-1">
                    {event.broadcast}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl uppercase text-white mb-2">
                  {event.name}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-[#c41e3a] font-heading text-sm tracking-wider">
                    {event.date}
                  </span>
                  <span className="hidden sm:inline text-gray-700">·</span>
                  <span className="text-gray-500 font-heading text-sm tracking-wider">
                    {event.venue}
                  </span>
                </div>
              </div>

              {/* Bout cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
                {event.bouts.map((bout, bi) => (
                  <div
                    key={bi}
                    className="bg-[#111] hover:bg-[#161616] transition-all duration-500 overflow-hidden group"
                  >
                    {/* Fight image */}
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={bout.image}
                        alt={`${bout.fighterA} vs ${bout.fighterB}`}
                        className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/30 to-transparent" />

                      {/* VS overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-heading font-bold text-white/10 text-[8vw] sm:text-[4vw]">
                          VS
                        </span>
                      </div>
                    </div>

                    {/* Fight info */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex-1">
                          <span className="font-heading font-bold text-lg sm:text-xl uppercase text-white">
                            {bout.fighterA}
                          </span>
                          <span className="text-gray-600 text-xs font-heading ml-2">
                            {bout.recA}
                          </span>
                        </div>
                        <span className="text-gray-700 font-heading text-xs">vs</span>
                        <div className="flex-1 text-right">
                          <span className="font-heading font-bold text-lg sm:text-xl uppercase text-gray-400">
                            {bout.fighterB}
                          </span>
                          <span className="text-gray-700 text-xs font-heading ml-2">
                            {bout.recB}
                          </span>
                        </div>
                      </div>

                      {/* Result */}
                      <div className="bg-[#c41e3a]/10 border border-[#c41e3a]/20 px-3 py-2 mb-3">
                        <span className="text-[#c41e3a] font-heading text-[10px] tracking-[0.15em] uppercase">
                          {bout.result}
                        </span>
                      </div>

                      {/* Title */}
                      <span className="text-gray-600 font-heading text-[9px] tracking-[0.15em] uppercase">
                        🏆 {bout.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider between events */}
              {ei < pastEvents.length - 1 && (
                <div className="section-divider mt-12 sm:mt-16" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white font-heading text-xs tracking-widest uppercase transition-colors"
        >
          <ArrowLeft size={14} />
          Back to EMX Sports
        </Link>
      </section>

      <Footer />
    </main>
  );
}
