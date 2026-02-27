"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, Star, ShieldCheck, Users } from "lucide-react";

const CITIES = ["Bangalore", "Mumbai"] as const;
type City = (typeof CITIES)[number];

export default function HeroSection() {
  const [activeCity, setActiveCity] = useState<City>("Mumbai");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      aria-label="Hero"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,200,170,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,220,180,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col">
            <div
              aria-hidden="true"
              className="inline-flex items-center gap-2 self-start bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold tracking-wide uppercase px-3.5 py-1.5 rounded-full mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Stop wasting weekends on irrelevant visits
            </div>

            <h1 className="text-[40px] sm:text-5xl lg:text-[56px] font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-5">
              Visit curated homes,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">negotiate</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 bottom-1 w-full h-3 bg-orange-200/70 rounded-sm"
                />
              </span>{" "}
              smarter &amp; buy{" "}
              <span className="bg-gradient-to-r from-[#ff6b35] to-[#e8502f] bg-clip-text text-transparent">
                intelligently.
              </span>
            </h1>

            <p className="text-[15px] sm:text-base text-gray-500 leading-relaxed mb-8 max-w-lg">
              Get end-to-end guidance from property wizards who&apos;ve helped
              intelligent homebuyers like you purchase{" "}
              <strong className="font-semibold text-gray-700">
                200+ homes
              </strong>{" "}
              in the last year alone.
            </p>

            <ul
              aria-label="Key stats"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-[13px] text-gray-500 font-medium"
            >
              <li className="flex items-center gap-1.5">
                <Star
                  className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                  aria-hidden="true"
                />
                4.9 / 5 rating
              </li>
              <li aria-hidden="true" className="w-px h-4 bg-gray-200" />
              <li className="flex items-center gap-1.5">
                <Users
                  className="w-3.5 h-3.5 text-orange-400"
                  aria-hidden="true"
                />
                1,000+ homebuyers helped
              </li>
              <li aria-hidden="true" className="w-px h-4 bg-gray-200" />
              <li className="flex items-center gap-1.5">
                <ShieldCheck
                  className="w-3.5 h-3.5 text-emerald-500"
                  aria-hidden="true"
                />
                Zero brokerage
              </li>
            </ul>

            <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-5 max-w-[420px] w-full">
              <p
                id="city-label"
                className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3"
              >
                Select your city
              </p>

              <div
                role="group"
                aria-labelledby="city-label"
                className="flex gap-2 mb-4"
              >
                {CITIES.map((city) => (
                  <button
                    key={city}
                    onClick={() => setActiveCity(city)}
                    aria-pressed={activeCity === city}
                    className={`flex-1 py-2.5 text-sm font-semibold rounded-xl border transition-all duration-200 ${
                      activeCity === city
                        ? "bg-white border-orange-300 text-[#ff6b35] shadow-sm shadow-orange-100"
                        : "bg-transparent border-transparent text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>

              <button
                className="group w-full flex items-center justify-center gap-2 bg-[#ff6b35] hover:bg-[#e85020] active:scale-[0.98] text-white py-3.5 rounded-xl text-[15px] font-bold transition-all duration-200 shadow-lg shadow-orange-200/50 mb-3"
                aria-label={`Book an appointment in ${activeCity}`}
              >
                Book an Appointment
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>

              <p className="text-center text-xs text-gray-400">
                Already a member?{" "}
                <Link
                  href="/login"
                  className="text-[#ff6b35] font-semibold hover:underline underline-offset-2"
                >
                  Login →
                </Link>
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            <div
              aria-hidden="true"
              className="absolute right-4 lg:right-0 top-4 w-[260px] sm:w-[320px] lg:w-[380px] h-[260px] sm:h-[320px] lg:h-[380px] bg-gradient-to-br from-[#fff3ec] to-[#fde8d5] rounded-[60px] -rotate-6"
            />
            <div
              aria-hidden="true"
              className="absolute right-12 lg:right-8 bottom-4 w-[180px] sm:w-[220px] lg:w-[260px] h-[180px] sm:h-[220px] lg:h-[260px] bg-gradient-to-br from-[#fef5e6] to-[#fde8b0] rounded-[50px] rotate-12"
            />

            <div
              role="region"
              aria-label="Propsoch intro video preview"
              className={`relative z-10 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] rounded-[28px] bg-white p-2.5 transition-all duration-500 ease-out cursor-pointer ring-1 ring-gray-100 ${
                isHovered
                  ? "rotate-0 shadow-[0_32px_80px_-12px_rgba(255,107,53,0.2),0_0_0_1px_rgba(255,107,53,0.1)]"
                  : "-rotate-2 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.08)]"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-full aspect-video bg-orange-50 rounded-[20px] overflow-hidden flex items-center justify-center">
                <div
                  className={`absolute inset-0 z-20 transition-opacity duration-300 ${
                    isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#ffeade] via-[#fdd9c5] to-[#f9c7a8]"
                    aria-hidden="true"
                  />

                  <div className="absolute top-5 left-5 z-10 flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 bg-[#ff6b35] rounded-lg flex items-center justify-center shadow-md"
                        aria-hidden="true"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          fill="none"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            d="M16 2.5L2 14.5H6V28C6 29.1 6.9 30 8 30H24C25.1 30 26 29.1 26 28V14.5H30L16 2.5Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <span className="text-[17px] font-extrabold text-gray-900 tracking-tight">
                        Propsoch
                      </span>
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-orange-500 pl-0.5 italic">
                      Guided Homebuying Program
                    </span>
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 right-3 w-3/5 h-[92%] overflow-hidden rounded-b-2xl"
                    style={{
                      maskImage:
                        "linear-gradient(to top, black 75%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to top, black 75%, transparent 100%)",
                    }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                      alt=""
                      fill
                      sizes="(max-width: 640px) 60vw, 30vw"
                      className="object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div
                      className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl"
                      aria-label="Play intro video"
                    >
                      <Play
                        className="w-5 h-5 text-[#ff6b35] ml-1 fill-[#ff6b35]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                {isHovered && (
                  <div className="absolute inset-0 z-10 bg-orange-50">
                    <iframe
                      className="w-[108%] h-[108%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ border: 0 }}
                      src="https://www.youtube.com/embed/RqBYQJRqUXs?autoplay=1&controls=0&modestbranding=1&showinfo=0&rel=0"
                      title="Propsoch Guided Homebuying Program intro video"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between px-3 py-2.5">
                <div>
                  <p className="text-[13px] font-bold text-gray-800">
                    Watch the intro
                  </p>
                  <p className="text-[11px] text-gray-400">
                    2 min · Hover to preview
                  </p>
                </div>
                <div
                  className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Play className="w-3.5 h-3.5 text-[#ff6b35] fill-[#ff6b35] ml-0.5" />
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -top-4 right-6 lg:right-2 z-20 pointer-events-none"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="#ffb03a"
                aria-hidden="true"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
            <div
              aria-hidden="true"
              className="absolute top-6 right-0 lg:-right-4 z-20 pointer-events-none opacity-60"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="#ffb03a"
                aria-hidden="true"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>

            <div
              aria-label="200+ homes sold last year"
              className="absolute -bottom-2 left-2 sm:left-6 lg:-left-4 z-20 bg-white rounded-2xl px-3.5 py-2.5 shadow-lg ring-1 ring-gray-100 flex items-center gap-2.5"
            >
              <div
                className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center"
                aria-hidden="true"
              >
                <Users className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-900">
                  200+ Homes
                </p>
                <p className="text-[10px] text-gray-400">sold last year</p>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-label="Brand highlights"
          className="mt-16 lg:mt-20 flex flex-wrap items-center justify-center gap-6 text-[12.5px] text-gray-400 font-medium border-t border-gray-100 pt-8"
        >
          <span>
            Trusted by <strong className="text-gray-600">1,000+</strong>{" "}
            homebuyers
          </span>
          <span
            aria-hidden="true"
            className="w-px h-4 bg-gray-200 hidden sm:block"
          />
          <span>
            Operating in{" "}
            <strong className="text-gray-600">Mumbai &amp; Bangalore</strong>
          </span>
          <span
            aria-hidden="true"
            className="w-px h-4 bg-gray-200 hidden sm:block"
          />
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-gray-400" aria-hidden="true" />
            Zero brokerage on partner projects
          </span>
        </div>
      </div>
    </section>
  );
}
