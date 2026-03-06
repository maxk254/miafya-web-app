import React from "react";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: "patient",
    role: "Patient",
    tagline: "Your health, simplified.",
    color: "teal",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
    description:
      "Finding the right doctor or clinic shouldn't be hard. MiAfya gives you instant access to Kenya's largest network of verified health professionals — book appointments in seconds, from anywhere.",
    features: [
      "Search doctors by speciality or location",
      "Book appointments instantly, 24/7",
      "Access verified & licensed professionals",
      "View facility services before you visit",
      "Manage your appointments in one place",
    ],
    cta: "Get Started as a Patient",
    route: "/signup?role=patient",
  },
  {
    id: "professional",
    role: "Health Professional",
    tagline: "Grow your career. Your way.",
    color: "emerald",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    ),
    description:
      "Whether you're a doctor, nurse, clinical officer or pharmacist — MiAfya connects you with patients who need your expertise and opens doors to locum opportunities at top facilities across Kenya.",
    features: [
      "Build a verified professional profile",
      "Connect with patients seeking your expertise",
      "Discover & apply for locum shifts",
      "Set your own availability & schedule",
      "Grow your practice and income",
    ],
    cta: "Join as a Professional",
    route: "/signup?role=professional",
  },
  {
    id: "facility",
    role: "Health Facility",
    tagline: "Full beds. Right staff. Always.",
    color: "blue",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
    description:
      "List your clinic, hospital or pharmacy on MiAfya to attract patients ready to book. Need qualified staff fast? Post locum opportunities and get matched with verified professionals immediately.",
    features: [
      "Showcase your facility's services",
      "Receive patient bookings directly",
      "Post locum jobs to fill shifts fast",
      "Get matched with qualified staff",
      "Manage listings from one dashboard",
    ],
    cta: "List Your Facility",
    route: "/signup?role=facility",
  },
];

const colorMap = {
  teal: {
    glow: "hover:shadow-[0_0_40px_rgba(45,212,191,0.12)]",
    border: "hover:border-teal-500/40",
    badge: "bg-teal-500/10 border-teal-500/30 text-teal-400",
    icon: "bg-teal-500/10 border-teal-500/20 text-teal-400",
    iconHover: "group-hover:bg-teal-500/20 group-hover:border-teal-500/40",
    check: "text-teal-400",
    btn: "bg-teal-500 hover:bg-teal-400 hover:shadow-[0_0_25px_rgba(45,212,191,0.4)]",
    gradient: "from-teal-400 to-emerald-400",
    topBar: "bg-teal-500",
  },
  emerald: {
    glow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.12)]",
    border: "hover:border-emerald-500/40",
    badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    iconHover:
      "group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40",
    check: "text-emerald-400",
    btn: "bg-emerald-500 hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(52,211,153,0.4)]",
    gradient: "from-emerald-400 to-teal-400",
    topBar: "bg-emerald-500",
  },
  blue: {
    glow: "hover:shadow-[0_0_40px_rgba(96,165,250,0.12)]",
    border: "hover:border-blue-500/40",
    badge: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    icon: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    iconHover: "group-hover:bg-blue-500/20 group-hover:border-blue-500/40",
    check: "text-blue-400",
    btn: "bg-blue-500 hover:bg-blue-400 hover:shadow-[0_0_25px_rgba(96,165,250,0.4)]",
    gradient: "from-blue-400 to-teal-400",
    topBar: "bg-blue-500",
  },
};

const WhoWeServe = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0a1628] border-t border-white/10 mt-30 mb-30 rounded-2xl px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">
              Built for Everyone
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            One Platform.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Three Powerful Tools.
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            Whether you're seeking care, providing care, or running a facility —
            MiAfya is built specifically for you.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const c = colorMap[card.color];
            return (
              <div
                key={card.id}
                className={`group relative bg-[#0a1628] border border-white/10 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 ${c.border} ${c.glow}`}
              >
                {/* Top color bar */}
                <div className={`h-1 w-full ${c.topBar}`} />

                <div className="p-7 flex flex-col gap-6 flex-1">
                  {/* Role badge + icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex items-center gap-2 border rounded-full px-3 py-1 text-xs font-semibold ${c.badge}`}
                    >
                      {card.role}
                    </div>
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-300 ${c.icon} ${c.iconHover}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        viewBox="0 0 24 24"
                      >
                        {card.icon}
                      </svg>
                    </div>
                  </div>

                  {/* Tagline + description */}
                  <div className="flex flex-col gap-2">
                    <h3
                      className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${c.gradient}`}
                    >
                      {card.tagline}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <ul className="flex flex-col gap-2.5">
                    {card.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${c.check}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-slate-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Spacer pushes button to bottom */}
                  <div className="flex-1" />

                  {/* Divider */}
                  <div className="border-t border-white/10" />

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      navigate(card.route);
                      window.scrollTo(0, 0);
                    }}
                    className={`w-full py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 ${c.btn}`}
                  >
                    {card.cta}
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
