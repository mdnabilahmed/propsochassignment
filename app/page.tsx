"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import {
  Play,
  ArrowRight,
  Star,
  ShieldCheck,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const CITIES = ["Bangalore", "Mumbai"] as const;
type City = (typeof CITIES)[number];

const stats = [
  { value: "2750+", label: "Hours of Advice" },
  { value: "520M+", label: "Sq. Feet Analyzed" },
  { value: "210+", label: "Partner Builders" },
  { value: "500+", label: "Projects Across Bangalore" },
];

const testimonials = [
  {
    text: "Thank you Stuti! It was a pleasure to have engaged with PropSoch. And we really enjoyed working with you as well. Hope to continue this relation beyond this. Thank you so much! And congratulations to you too. We must meet and celebrate.",
    name: "Shikhar Kapoor",
    company: "Engineer @PhonePe",
    bgColor: "bg-[#fad6d6]",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150",
  },
  {
    text: "As a US-based family exploring home buying in India, my lack of expertise and time... Their expertise helped us navigate the financials, various options, and negotiation strategies. People at propsoch are quite professional and structured in their approach. We had sought their help in scouting for villa & land projects. They organized a call to understand our requirements and non-negotiables and then followed us options, from where we drew an initial shortlist. They were flexible enough to include or exclude projects based on our preferences. The site visits were well coordinated and efficient. They protected our contacts saving us from spamming from marketers. Propsoch also offered to help us with negotiations and architectural screening.",
    name: "Karthik Iyer",
    company: "Amazon Web Services",
    bgColor: "bg-[#d3bfff]",
    initial: "K",
  },
  {
    text: "We found out about Propsoch through mutual friends, just as we were about to close on a property. It was such a blessing to find out the numerous red flags we were unaware of. Ashish and his team do an outstanding job of helping prospective homebuyers navigate the tricky market and find the best option. Big shoutout to Akshaya for being with us every step of the way and going above and beyond our expectations!",
    name: "Prashant Jangam",
    company: "@TCS",
    bgColor: "bg-[#d3bfff]",
    initial: "P",
  },
  {
    text: "We know that you guys helping us finding our new home, knowledge of market and properties were impeccable (Which is very rare nowadays). Your unique, out of box attitude made the entire process of finding property stress free and easy. Keep up the good work and pls never change this. To Buyers, I would highly recommend Propsoch to anyone looking for genuine advise on property. I can assure, Ashish's team is dedicated and work tirelessly to achieve real estate goal!!",
    name: "Jiya Narayanan",
    company: "@Deloitte, Dubai",
    bgColor: "bg-[#fad6d6]",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    text: "If you're thinking of buying a house and are daunted by the whole process of searching, setting up visits and deciding which property is worthy of your investment, you should reach out to them. The real-estate market is full of brokers that will spam call you to death, who only want to sell you a property, sometimes even without taking your requirements into consideration. PropSoch takes a refreshing approach with the buyer's requirement at the centre, and the entire home buying journey becomes hassle-free to the point of being enjoyable. From understanding what you want, explaining you what the market looks like, setting up visits to giving detailed analysis that help you take a decision, everything they do will make your home-buying experience a lot easier. Highly recommend them to anyone looking to buy a property.",
    name: "Athipsha Jena",
    company: "Product Management @TATA Communications",
    bgColor: "bg-[#fad6d6]",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
  },
  {
    text: "Had a great experience with them. They were with me throughout the journey, right from the sourcing of the options, going over the pros and cons, site visits and then helping my shortlist based on my requirements. Prashant and Stuti were very prompt in their communications, answered my query with patience and the right details and always helped me move forward with the right facts and details about each project. Would highly recommend them for anyone starting their real estate investment journey.",
    name: "Ankur Anand",
    company: "Intelligent Homebuyer",
    bgColor: "bg-[#d3bfff]",
    initial: "A",
  },
  {
    text: "Propsoch: A name we will remember throughout our life. Despite juggling between busy schedule and aimlessly looking for the flats on weekends along with random brokers and third party, little did we know about checkpoints for our 'dream home' in our not so tiny head. Now we were more clear and focused on what we wanted with their help. Stuti, explored solutions to all my important & silly questions. Prashant, with his unwavering guidance, helped us out during site visits. The whole team helped us visualise our 'under construction property' as it stands today by making reports and answering our endless questions till the D day 22nd July, 2024. Well, how will I ever forget this day when we signed up our first dream home. It stands true to its name.",
    name: "Ankita Srivastava",
    company: "Intelligent Homebuyer",
    bgColor: "bg-[#d3bfff]",
    initial: "A",
  },
  {
    text: "Propsoch team helped a lot in finalizing my property. Rashmi from the team was especially helpful with timely insights and inputs that made my experience really smooth.",
    name: "Arjun Singh",
    company: "Intelligent Homebuyer",
    bgColor: "bg-[#d3bfff]",
    initial: "A",
  },
];

const CARD_WIDTH = 460;
const GAP = 24;

function HeroSection() {
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
                  className="absolute left-0 bottom-1 w-full h-3 bg-orange-200/70 rounded-sm -z-0"
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
              className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-[13px] text-gray-500 font-medium list-none p-0"
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
              className="absolute right-4 lg:right-0 top-4 w-[260px] sm:w-[320px] lg:w-[380px] h-[260px] sm:h-[320px] lg:h-[380px] bg-gradient-to-br from-[#fff3ec] to-[#fde8d5] rounded-[60px] -rotate-6 z-0"
            />
            <div
              aria-hidden="true"
              className="absolute right-12 lg:right-8 bottom-4 w-[180px] sm:w-[220px] lg:w-[260px] h-[180px] sm:h-[220px] lg:h-[260px] bg-gradient-to-br from-[#fef5e6] to-[#fde8b0] rounded-[50px] rotate-12 z-0"
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
                      className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl ring-4 ring-white/40"
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
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                <p className="text-[10px] text-gray-400 leading-none">
                  sold last year
                </p>
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

function StatsSection() {
  return (
    <section
      aria-label="Stats and social proof"
      className="w-full bg-white pb-12"
    >
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
                <dt className="order-2 mt-2.5 text-[12px] text-gray-500 font-medium leading-snug max-w-[130px]">
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

function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
    setIsPaused(true);
  };

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const clamped = Math.max(0, Math.min(index, testimonials.length - 1));
    setCurrentIndex(clamped);

    scrollRef.current.scrollTo({
      left: clamped * (CARD_WIDTH + GAP),
      behavior: "smooth",
    });
  }, []);

  const scrollLeft = () => scrollToIndex(currentIndex - 1);
  const scrollRight = () => scrollToIndex(currentIndex + 1);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev >= testimonials.length - 1 ? 0 : prev + 1;
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            left: next * (CARD_WIDTH + GAP),
            behavior: "smooth",
          });
        }
        return next;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      aria-label="Homeowner Testimonials"
      className="w-full bg-[#f8f9fa] pt-20 lg:pt-28 pb-24 lg:pb-36 border-t-2 border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <div>
          <p className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#ff6b35] tracking-widest uppercase mb-5">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#ff6b35]/40 rounded"
            />
            Hear from your fellow homeowners
          </p>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-extrabold text-gray-900 tracking-tight leading-[1.08] max-w-2xl">
            1000+ intelligent homebuyers <br className="hidden sm:block" />
            trusted us with their{" "}
            <em className="not-italic relative inline-block">
              <span className="relative z-10 text-[#ff6b35] italic">
                biggest
              </span>
              <span
                aria-hidden="true"
                className="absolute -bottom-0.5 left-0 w-full h-2.5 bg-orange-100 rounded-sm -z-0"
              />
            </em>{" "}
            life decision.
          </h2>
          <p className="text-gray-400 mt-5 text-base max-w-lg leading-relaxed">
            Don&apos;t take our word for it &mdash; read how we helped real
            families navigate India&apos;s complex property market with clarity.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={scrollLeft}
            aria-label="Previous testimonial"
            disabled={currentIndex === 0}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-[#ff6b35] hover:border-orange-200 hover:bg-orange-50 hover:shadow-md hover:shadow-orange-100/50 transition-all duration-300 bg-white disabled:opacity-30 disabled:cursor-default"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Next testimonial"
            disabled={currentIndex === testimonials.length - 1}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-[#ff6b35] hover:border-orange-200 hover:bg-orange-50 hover:shadow-md hover:shadow-orange-100/50 transition-all duration-300 bg-white disabled:opacity-30 disabled:cursor-default"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex overflow-x-auto gap-5 px-5 sm:px-8 lg:px-12 pt-10 pb-12"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling:
            "touch" as React.CSSProperties["WebkitOverflowScrolling"],
        }}
      >
        <div
          className="hidden xl:block shrink-0"
          style={{ width: "calc((100vw - 1280px) / 5 - 90px)", minWidth: 0 }}
        />

        {testimonials.map((t, idx) => (
          <div
            key={idx}
            onClick={() => toggleExpand(idx)}
            className={`group relative shrink-0 bg-white border rounded-2xl p-8 pt-14 flex flex-col transition-all duration-500 ease-out cursor-pointer
              ${
                expandedIndex === idx
                  ? "border-orange-200 shadow-[0_20px_60px_-15px_rgba(255,107,53,0.18)] -translate-y-2"
                  : "border-gray-100 shadow-sm hover:shadow-orange-100/60 hover:-translate-y-1.5 hover:border-orange-100"
              }`}
            style={{ width: CARD_WIDTH, minWidth: CARD_WIDTH }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />

            <div
              className={`absolute -top-6 left-6 w-[60px] h-[68px] ${t.bgColor} flex items-center justify-center text-gray-800 font-bold shadow-lg overflow-hidden z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3`}
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)",
              }}
            >
              <div className="absolute inset-0 bg-white/20 mix-blend-overlay" />
              {t.image ? (
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              ) : (
                <span className="text-2xl uppercase tracking-wider relative z-10">
                  {t.initial}
                </span>
              )}
            </div>

            <p
              className={`relative z-10 text-[13.5px] text-gray-600 leading-[1.85] mb-6 transition-all duration-300 ${expandedIndex === idx ? "" : "line-clamp-7"}`}
            >
              <span className="text-4xl text-gray-200 font-serif leading-none absolute -top-4 -left-3 select-none">
                &ldquo;
              </span>
              <span className="relative z-10">{t.text}</span>
            </p>

            <div className="relative z-10 mt-auto border-t border-gray-100 pt-5">
              <div
                className={`${caveat.className} text-[32px] leading-[0.85] mb-1.5 transition-colors duration-300 ${expandedIndex === idx ? "text-[#ff6b35]" : "text-gray-900 group-hover:text-[#ff6b35]"}`}
              >
                {t.name}
              </div>
              <div className="text-[11px] text-gray-400 font-medium tracking-widest uppercase">
                {t.company}
              </div>
              <p
                className={`mt-3 text-[11.5px] font-semibold transition-colors duration-300 ${expandedIndex === idx ? "text-[#ff6b35]" : "text-gray-300"}`}
              >
                {expandedIndex === idx ? "▲ Show less" : "▼ Read full story"}
              </p>
            </div>
          </div>
        ))}

        <div
          className="hidden xl:block shrink-0"
          style={{ width: "calc((100vw - 1280px) / 2 - 20px)", minWidth: 0 }}
        />
      </div>

      <div className="flex items-center justify-center gap-4 px-5 mt-4">
        <button
          onClick={scrollLeft}
          aria-label="Previous testimonial"
          disabled={currentIndex === 0}
          className="sm:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 bg-white disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === currentIndex
                  ? "w-6 h-2 bg-[#ff6b35]"
                  : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollRight}
          aria-label="Next testimonial"
          disabled={currentIndex === testimonials.length - 1}
          className="sm:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 bg-white disabled:opacity-30"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main id="main-content" className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <TestimonialsCarousel />
    </main>
  );
}
