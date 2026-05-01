import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import herogroup from "../../../assets/images/ui/herogroup.png"
import hero from "../../../assets/images/ui/hero.png";

const HeroSec = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#0a1628] min-h-[90vh] flex items-center px-6 md:px-10 lg:px-20 pt-20 rounded-xl">
      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Teal glow top-left */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-teal-500 opacity-10 blur-[120px]" />
        {/* Teal glow bottom-right */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-400 opacity-10 blur-[100px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Content wrapper ── */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-12 py-16 md:py-24">
        {/* ── LEFT: Copy ── */}
        <div className="flex-1 flex flex-col gap-6 max-w-xl">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">
              Kenya's #1 Health Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Your Health,{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Connected.
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 6 Q50 0 100 5 Q150 10 200 4"
                  stroke="url(#underline-grad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="underline-grad"
                    x1="0"
                    y1="0"
                    x2="200"
                    y2="0"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2dd4bf" />
                    <stop offset="1" stopColor="#34d399" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-slate-400 text-lg leading-relaxed">
            Connect with verified doctors, nurses & clinicians.For Health Professionals Find locum
            opportunities across Kenya — all in one platform built for the
            future of African healthcare.
          </p>

          {/* Social proof */}
          <div className="flex items-center gap-3">
            <img
              className="w-14 rounded-full"
              src={herogroup}
              alt="Health professionals"
            />
            <div>
              <p className="text-white text-sm font-semibold">
                Trusted by 200+ health professionals
              </p>
              <p className="text-slate-500 text-xs">
                Across Kenya & East Africa
              </p>
            </div>
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="#speciality"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] text-base">
              Book Appointment
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#locum"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-base"
            >
              Find Locum Jobs
            </a>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 mt-4 pt-6 border-t border-white/10">
            {[
              { value: "24/7", label: "Available" },
              { value: "200+", label: "Professionals" },
              { value: "100k+", label: "Patients" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-teal-400">
                  {stat.value}
                </span>
                <span className="text-slate-500 text-xs uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Hero image ── */}
        <div className="flex-1 relative flex items-end justify-center max-w-lg w-full">
          {/* Glow behind image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-teal-500 opacity-20 blur-[80px] rounded-full" />

          {/* Floating card — top left */}
          <div className="absolute top-8 -left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
            <div className="w-9 h-9 rounded-full bg-teal-500/20 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-teal-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-white text-xs font-semibold">
                Verified Doctors
              </p>
              <p className="text-slate-400 text-xs">All professionals vetted</p>
            </div>
          </div>

          {/* Floating card — bottom right */}
          <div className="absolute bottom-16 -right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-emerald-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-white text-xs font-semibold">
                Locum Opportunities
              </p>
              <p className="text-slate-400 text-xs">New shifts daily</p>
            </div>
          </div>

          {/* Hero image */}
          <img
            className="relative z-10 w-full max-h-[520px] object-cover object-top rounded-2xl shadow-2xl"
            src={hero}
            alt="Health professionals"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
