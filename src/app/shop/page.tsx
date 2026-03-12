"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const products = [
  {
    name: "EMX Training Shorts — Black",
    price: "€40.00",
    image: `${basePath}/images/shop/shorts.png`,
    tag: "New",
  },
  {
    name: "EMX T-Shirt — Black",
    price: "€45.00",
    image: `${basePath}/images/shop/tshirt.png`,
    tag: null,
  },
  {
    name: "EMX Hoodie — Black",
    price: "€75.00",
    image: `${basePath}/images/shop/hoodie.png`,
    tag: null,
  },
  {
    name: "EMX Cap — Black",
    price: "€25.00",
    image: `${basePath}/images/shop/cap.png`,
    tag: null,
  },
];

export default function ShopPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-heading uppercase text-white opacity-[0.03] text-[20vw] leading-none whitespace-nowrap">
            SHOP
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white font-heading text-xs tracking-widest uppercase transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to EMX Sports
          </Link>
          <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl uppercase text-white">
            Shop
          </h1>
          <p className="text-gray-500 font-heading text-sm tracking-wider uppercase mt-4">
            Official EMX Sports Merchandise
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="pb-20 sm:pb-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="group bg-[#111] hover:bg-[#161616] transition-all duration-500 hover:shadow-[0_0_40px_rgba(196,30,58,0.12)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Product image */}
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {product.tag && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#c41e3a] text-white font-heading text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
                          {product.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product info */}
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <h2 className="font-heading font-bold text-xl sm:text-2xl uppercase text-white leading-tight mb-3">
                      {product.name}
                    </h2>
                    <div className="text-gray-400 font-heading text-lg sm:text-xl mb-6">
                      {product.price}
                    </div>

                    {/* Size options placeholder */}
                    <div className="mb-6">
                      <p className="text-gray-600 font-heading text-[10px] tracking-[0.2em] uppercase mb-3">
                        Size
                      </p>
                      <div className="flex gap-2">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                          <button
                            key={size}
                            className="w-10 h-10 border border-gray-700 text-gray-400 font-heading text-xs hover:border-[#c41e3a] hover:text-white transition-colors"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button className="bg-[#c41e3a] hover:bg-[#a01830] text-white font-heading text-[11px] tracking-[0.2em] uppercase px-6 py-3 transition-colors w-full sm:w-auto">
                      Select Options
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
