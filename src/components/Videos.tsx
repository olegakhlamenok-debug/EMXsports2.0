"use client";

export default function Videos() {
  return (
    <section id="videos" className="relative pt-20 sm:pt-28 pb-10 sm:pb-14 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-x-0 top-20 sm:top-28 flex items-center justify-center pointer-events-none select-none h-16 sm:h-20">
        <span className="font-heading font-bold uppercase text-white opacity-[0.08] text-[6vw] leading-none whitespace-nowrap">VIDEOS</span>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-10 sm:mb-14 text-center">
          Latest Video
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/jsXe6zZxEpI"
              title="EMX Sports Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="section-divider mt-10 sm:mt-14" />
    </section>
  );
}
