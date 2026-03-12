"use client";

export default function About() {
  return (
    <section id="about" className="relative pt-20 sm:pt-28 pb-10 sm:pb-14 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-x-0 top-20 sm:top-28 flex items-center justify-center pointer-events-none select-none h-16 sm:h-20">
        <span className="font-heading font-bold uppercase text-white opacity-[0.08] text-[6vw] leading-none whitespace-nowrap">ABOUT</span>
      </div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl uppercase text-white leading-[0.9] mb-8 sm:mb-10">
          About<br />
          <span className="text-gray-500">EMX Sports</span>
        </h2>
        <div className="space-y-5 text-gray-400 leading-relaxed text-sm sm:text-base">
          <p>
            EMX Sports is a dynamic professional boxing promotion company
            dedicated to advancing the sport through high-quality events and
            athlete development. We specialize in organizing spectacular fight
            nights that deliver intense, world-class action.
          </p>
          <p>
            We carefully prepare fighters for competitive bouts and provide a
            platform for emerging and established talent to shine on both
            regional and international stages.
          </p>
          <p className="text-gray-300 border-l-2 border-[#c41e3a] pl-5 italic text-base sm:text-lg leading-relaxed text-left">
            &ldquo;Our mission is to elevate professional boxing by creating
            unforgettable experiences for fans, fostering growth in the sport,
            and helping build the next generation of champions.&rdquo;
          </p>
        </div>
      </div>

      <div className="section-divider mt-10 sm:mt-14" />
    </section>
  );
}
