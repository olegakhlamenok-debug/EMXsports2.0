"use client";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const news = [
  {
    title: "20-0. Undefeated. Still Champion. Aleksejevs Defends IBF European Title",
    date: "Mar 6, 2026",
    image: `${basePath}/images/instagram/post1.jpg`,
    url: "https://www.instagram.com/emx.sports/p/DVjtPNlgDGY/",
  },
  {
    title: "The Big Bad Wolf Strikes Again. Volkovs Claims IBF International Title",
    date: "Mar 6, 2026",
    image: `${basePath}/images/instagram/post2.jpg`,
    url: "https://www.instagram.com/emx.sports/p/DVjqi-jgKfH/",
  },
  {
    title: "And Still Undefeated! Hurricane Defended His IBF European Middleweight Title",
    date: "Mar 4, 2026",
    image: `${basePath}/images/instagram/post3.jpg`,
    url: "https://www.instagram.com/emx.sports/p/DVd9IlnDJvl/",
  },
];

export default function News() {
  return (
    <section id="news" className="relative pt-20 sm:pt-28 pb-10 sm:pb-14 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-x-0 top-20 sm:top-28 flex items-center justify-center pointer-events-none select-none h-16 sm:h-20">
        <span className="font-heading font-bold uppercase text-white opacity-[0.08] text-[6vw] leading-none whitespace-nowrap">MEDIA</span>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-10 sm:mb-14 text-center">
          Latest Media
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-800/50">
          {news.map((article) => (
            <Link
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a0a0a] group block transition-all duration-500 hover:shadow-[0_0_30px_rgba(196,30,58,0.15)] hover:-translate-y-1"
            >
              <div className="relative overflow-hidden" style={{ minHeight: 280 }}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 absolute inset-0"
                  style={{ minHeight: 280 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="text-gray-600 font-heading text-[10px] tracking-[0.25em] uppercase mb-2.5">
                    {article.date} · @emx.sports
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base uppercase text-white leading-tight line-clamp-3">
                    {article.title}
                  </h3>
                  <div className="mt-3 text-[#c41e3a] font-heading text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View on Instagram →
                  </div>
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
