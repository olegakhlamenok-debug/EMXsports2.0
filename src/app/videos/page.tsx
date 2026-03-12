"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VideosPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-32 sm:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-heading uppercase text-white opacity-[0.03] text-[15vw] leading-none whitespace-nowrap">VIDEOS</span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl uppercase text-white">
            Videos
          </h1>
        </div>
      </section>

      {/* Video embed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
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
      </section>

      <Footer />
    </main>
  );
}
