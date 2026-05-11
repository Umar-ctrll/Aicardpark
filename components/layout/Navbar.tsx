"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CLIENT_LOGIN_URL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled
          ? "bg-dark-hero/95 backdrop-blur-[16px] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-purple-primary animate-pulse-dot" />
          <span className="font-display font-bold text-xl text-white tracking-tight">
            AI Car Park
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-body text-text-muted hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-purple-primary after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={CLIENT_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-body font-medium text-white border border-dark-border rounded-[var(--radius-md)] hover:border-purple-primary transition-all duration-200"
          >
            Client Login
          </a>
          <a
            href="#penalty-zone"
            className="group inline-flex items-center gap-2 px-5 py-2 text-sm font-body font-medium text-white bg-alert rounded-full hover:bg-red-600 transition-all duration-200"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-red-pulse" />
            Pay Penalty
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-dark-hero/[0.98] transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 pt-12 px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-body text-text-muted hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 w-full max-w-xs mt-6">
            <a
              href={CLIENT_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-3 text-sm font-body font-medium text-white border border-dark-border rounded-[var(--radius-md)] hover:border-purple-primary transition-all"
            >
              Client Login
            </a>
            <a
              href="#penalty-zone"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-body font-medium text-white bg-alert rounded-full hover:bg-red-600 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-red-pulse" />
              Pay Penalty
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
