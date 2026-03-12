"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-4">
          Join The EMX Family
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Get the latest fight news, event announcements, and exclusive content delivered straight to your inbox.
        </p>

        {submitted ? (
          <p className="text-[#c41e3a] font-heading text-sm tracking-widest uppercase">
            Thank you for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 font-heading text-sm tracking-wider placeholder:text-gray-600 focus:outline-none focus:border-[#c41e3a] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#c41e3a] hover:bg-[#a01830] text-white font-heading font-semibold tracking-[0.2em] text-xs px-8 py-3 uppercase transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
