import React from "react";
import banner from "../../../assets/images/ui/banner.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-4 md:mx-10 my-20">
      <div className="relative overflow-hidden bg-[#0a1628] border border-white/10 rounded-3xl px-8 md:px-14 lg:px-20 flex flex-col md:flex-row items-center">
        {/* ── Background glow effects ── */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-500 opacity-10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-emerald-500 opacity-10 blur-[80px] rounded-full pointer-events-none" />

        {/* ── Grid overlay ── */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── LEFT: Copy ── */}
        <div className="relative z-10 flex-1 py-12 md:py-16 lg:py-20 flex flex-col gap-6">
        
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">
              Join MiAfya Today
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight max-w-lg">
            Book Appointments With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              200+ Trusted
            </span>{" "}
            Health Professionals
          </h2>

          {/* Specialities list */}
          <div className="flex flex-wrap gap-2">
            {[
              "Doctors",
              "Pharmacists",
              "Clinical Officers",
              "Nutritionists",
              "Nurses",
            ].map((spec) => (
              <span
                key={spec}
                className="bg-white/5 border border-white/10 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Subtext */}
          <p className="text-slate-400 text-base leading-relaxed max-w-sm">
            Create your free account and get instant access to Kenya's largest
            network of verified health professionals.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              onClick={() => {
                navigate("/login");
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] text-base w-fit"
            >
              Create Free Account
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              onClick={() => navigate("/healthprofesionals")}
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-base w-fit"
            >
              Browse Professionals
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10 mt-2">
            {[
              { value: "200+", label: "Verified Professionals" },
              { value: "Free", label: "To Sign Up" },
              { value: "24/7", label: "Access" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-xl font-bold text-teal-400">
                  {stat.value}
                </span>
                <span className="text-slate-500 text-xs uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Image ── */}
        <div className="relative hidden md:flex md:w-[320px] lg:w-[380px] self-end justify-center flex-shrink-0">
          {/* Glow under image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-teal-500 opacity-20 blur-[60px] rounded-full" />
          <img
            className="relative z-10 w-full max-h-[420px] object-contain object-bottom drop-shadow-2xl"
            src={banner}
            alt="Health professional"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
