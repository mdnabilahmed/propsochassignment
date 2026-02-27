"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const clamped = Math.max(0, Math.min(index, testimonials.length - 1));
    setCurrentIndex(clamped);

    scrollRef.current.scrollTo({
      left: clamped * 484,
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
            left: next * 484,
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
            className={`group relative shrink-0 bg-white border rounded-2xl p-8 pt-14 flex flex-col transition-all duration-500 ease-out border-gray-100 shadow-sm hover:shadow-orange-100/60 hover:-translate-y-1.5 hover:border-orange-100`}
            style={{ width: 460, minWidth: 460 }}
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
              className={`relative z-10 text-[13.5px] text-gray-600 leading-[1.85] mb-6 transition-all duration-300`}
            >
              <span className="text-4xl text-gray-200 font-serif leading-none absolute -top-4 -left-3 select-none">
                &ldquo;
              </span>
              <span className="relative z-10">{t.text}</span>
            </p>

            <div className="relative z-10 mt-auto border-t border-gray-100 pt-5">
              <div
                className={`font-caveat text-[32px] leading-[0.85] mb-1.5 transition-colors duration-300 text-gray-900 group-hover:text-[#ff6b35]`}
              >
                {t.name}
              </div>
              <div className="text-[11px] text-gray-400 font-medium tracking-widest uppercase">
                {t.company}
              </div>
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
