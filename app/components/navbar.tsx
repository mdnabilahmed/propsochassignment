"use client";

import { useState, useEffect } from "react";
import { Search, Share2, Heart, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export type DropdownItem = {
  title: string;
  description?: string;
  badge?: string;
  href: string;
};

export type DropdownSection = {
  header?: string;
  items: DropdownItem[];
};

export type NavItemConfig = {
  title: string;
  columns?: boolean;
  dropdownAlign?: "left" | "center" | "right";
  sections?: DropdownSection[];
};

const navData: NavItemConfig[] = [
  {
    title: "Properties",
    dropdownAlign: "left",
    sections: [
      {
        header: "Properties",
        items: [
          {
            title: "Search & Filter Properties",
            description:
              "Search, filter and sort from 500+ RERA-approved properties in Bengaluru",
            href: "#",
          },
          {
            title: "Compare Properties",
            description:
              "Compare properties exhaustively on 40+ parameters you won't find elsewhere",
            href: "#",
          },
          {
            title: "Sell Your Property",
            description:
              "Share details & we'll match you with genuine homebuyers from our community",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Services",
    dropdownAlign: "left",
    sections: [
      {
        header: "Services",
        items: [
          {
            title: "Guided Homebuying",
            description:
              "Trusted by 1000+ intelligent buyers who bought their ideal homes confidently.",
            href: "#",
          },
          {
            title: "Peace of Mind Report",
            description:
              "India's most comprehensive report covering 80+ critical data points",
            href: "#",
          },
          {
            title: "Home Loans",
            description:
              "Compare lenders, get best offers & end-to-end guidance",
            href: "#",
          },
          {
            title: "Legal Services",
            description:
              "Get complete title due diligence, agreement reviews & advisory at pre-negotiated prices",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Resources",
    columns: true,
    dropdownAlign: "center",
    sections: [
      {
        header: "Learn",
        items: [
          {
            title: "Blog",
            description:
              "Get in-depth insights, guides & updates on India's real estate every week",
            href: "#",
          },
          {
            title: "Homebuying Guide 101",
            description:
              "New to homebuying? This guide helps you navigate your journey with clarity",
            href: "#",
          },
          {
            title: "Homebuying Checklist",
            description:
              "See if your dream home checks all the boxes with our ultimate checklist",
            href: "#",
          },
          {
            title: "Bangalore Real Estate 2025",
            description:
              "See how the supply, demand & price trends are evolving in 2025",
            href: "#",
          },
        ],
      },
      {
        header: "Tools",
        items: [
          {
            title: "Loyalty Reward Calculator",
            description:
              "See what you'll earn in money, time & sanity when you work with Propsoch",
            href: "#",
          },
          {
            title: "Fair Price Calculator",
            badge: "New",
            description:
              "Instantly check if your property's price is fair and discover its true market value.",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Company",
    dropdownAlign: "right",
    sections: [
      {
        header: "Company",
        items: [
          { title: "About Us", href: "#" },
          { title: "Customer Reviews", href: "#" },
          { title: "Careers", href: "#" },
          { title: "LinkedIn", href: "#" },
          { title: "YouTube", href: "#" },
        ],
      },
    ],
  },
];

function DesktopDropdown({ item }: { item: NavItemConfig }) {
  if (!item.sections) return null;

  const align =
    item.dropdownAlign === "center"
      ? "left-1/2 -translate-x-1/2"
      : item.dropdownAlign === "right"
        ? "right-0"
        : "left-0";

  return (
    <div
      className={`absolute top-full ${align} pt-4 invisible opacity-0 scale-[0.97] translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-50`}
    >
      <div
        className={`absolute top-[9px] ${
          item.dropdownAlign === "right"
            ? "right-6"
            : item.dropdownAlign === "center"
              ? "left-1/2 -translate-x-1/2"
              : "left-8"
        } w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100 rounded-tl-sm`}
      />

      <div
        className={`relative bg-white rounded-2xl shadow-[0_16px_48px_-8px_rgba(0,0,0,0.12),0_4px_16px_-4px_rgba(255,107,53,0.06)] border border-gray-100/80 overflow-hidden ${
          item.columns ? "w-[680px] flex gap-0" : "w-[340px]"
        }`}
      >
        {item.sections.map((section, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${item.columns ? "flex-1 px-6 py-5" : "px-4 py-4"} ${
              item.columns && idx === 0 ? "border-r border-gray-100" : ""
            }`}
          >
            {section.header && (
              <div className="flex items-center gap-2 mb-3 px-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                  {section.header}
                </span>
                <div className="flex-1 h-[1px] bg-gray-100" />
              </div>
            )}

            <div className="flex flex-col gap-0.5">
              {section.items.map((link, lIdx) => (
                <Link
                  key={lIdx}
                  href={link.href}
                  className="group/link flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#fff5f1] hover:to-[#fffaf8] transition-all duration-150"
                >
                  <div className="mt-[6px] w-1.5 h-1.5 rounded-full bg-gray-200 shrink-0 group-hover/link:bg-[#ff6b35] transition-colors duration-150" />
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <div className="flex items-center gap-2 text-[14.5px] font-semibold text-gray-800 group-hover/link:text-[#ff6b35] transition-colors leading-tight">
                      <span>{link.title}</span>
                      {link.badge && (
                        <span className="shrink-0 text-[9px] uppercase font-bold tracking-wide text-white py-[2px] px-[6px] bg-[#ff6b35] rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </div>
                    {link.description && (
                      <p className="text-[12.5px] text-gray-500 leading-snug">
                        {link.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NavLink({ item }: { item: NavItemConfig }) {
  return (
    <div className="relative h-full flex items-center group">
      <div className="h-[40px] flex items-center">
        <Link
          href="#"
          className="flex items-center gap-1.5 text-[15px] font-medium text-gray-700 group-hover:bg-[#fff5f1] group-hover:text-gray-900 transition-colors duration-200 px-4 py-2 rounded-xl"
        >
          {item.title}
          <ChevronDown className="w-[15px] h-[15px] text-gray-400 group-hover:text-[#ff6b35] transition-transform duration-200 group-hover:rotate-180" />
        </Link>
      </div>
      <DesktopDropdown item={item} />
    </div>
  );
}

function MobileMenu({ navData }: { navData: NavItemConfig[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors ml-1"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 border-t border-gray-100 bg-white shadow-lg overflow-y-auto max-h-[85vh] z-40">
          <div className="px-4 py-4 space-y-1">
            {navData.map((item) => (
              <div
                key={item.title}
                className="flex flex-col mb-4 bg-gray-50/50 rounded-xl"
              >
                <div className="flex items-center justify-between px-4 py-3 text-gray-800 font-semibold border-b border-gray-100/50">
                  {item.title}
                </div>
                <div className="flex flex-col gap-1 p-2">
                  {item.sections
                    ?.flatMap((s) => s.items)
                    .map((link, lIdx) => (
                      <Link
                        key={lIdx}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-[14px] font-medium text-gray-600 hover:text-[#ff6b35] hover:bg-orange-50 px-3 py-2.5 rounded-lg flex items-center gap-2"
                      >
                        {link.title}
                        {link.badge && (
                          <span className="text-[10px] uppercase font-bold text-[#ff6b35] py-0.5 px-1 bg-orange-100 rounded">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setScrolled(window.scrollY > 10));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="relative flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="relative w-9 h-9 bg-gradient-to-br from-[#ff6b35] to-[#e85020] rounded-xl flex items-center justify-center shadow-md shadow-orange-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M16 2.5L2 14.5H6V28C6 29.1046 6.89543 30 8 30H24C25.1046 30 26 29.1046 26 28V14.5H30L16 2.5Z"
                  fill="white"
                />
                <path
                  d="M11 12C11 12 12 15 15 15C12 15 11 18 11 18C11 18 10 15 7 15C10 15 11 12 11 12Z"
                  fill="#ff6b35"
                />
              </svg>
            </div>
            <span className="text-[1.4rem] font-bold leading-none tracking-tight">
              <span className="text-[#ff6b35]">Prop</span>
              <span className="text-gray-900">soch</span>
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center h-full gap-2"
            aria-label="Main navigation"
          >
            {navData.map((item) => (
              <NavLink key={item.title} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <div className="hidden sm:flex items-center gap-1 mr-3 border-r border-gray-100 pr-3">
              <button
                aria-label="Search"
                className="flex items-center justify-center w-9 h-9 rounded-xl text-gray-500 hover:text-[#ff6b35] hover:bg-orange-50 transition-colors"
              >
                <Search className="w-[18px] h-[18px]" aria-hidden="true" />
              </button>
              <button
                aria-label="Share"
                className="flex items-center justify-center w-9 h-9 rounded-xl text-gray-500 hover:text-[#ff6b35] hover:bg-orange-50 transition-colors"
              >
                <Share2 className="w-[18px] h-[18px]" aria-hidden="true" />
              </button>
              <button
                aria-label="Wishlist"
                className="flex items-center justify-center w-9 h-9 rounded-xl text-gray-500 hover:text-[#ff6b35] hover:bg-orange-50 transition-colors"
              >
                <Heart className="w-[18px] h-[18px]" aria-hidden="true" />
              </button>
            </div>

            <button className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#ff6b35] to-[#e85020] hover:from-[#e85020] hover:to-[#c94010] text-white px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-200 shadow-md shadow-orange-200">
              Get Started
            </button>

            <MobileMenu navData={navData} />
          </div>
        </div>
      </div>
    </header>
  );
}
