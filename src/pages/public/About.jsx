import React from "react";
import atioeno from "../assets/images/doctors/atioeno.png"

const About = () => {
  const values = [
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
      title: "Efficiency",
      desc: "Streamlined appointment scheduling that fits into your busy lifestyle. Book in under 60 seconds.",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      ),
      title: "Convenience",
      desc: "Access Kenya's largest network of verified health professionals and facilities from anywhere.",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      title: "Personalization",
      desc: "Tailored health recommendations, appointment reminders, and care plans built around you.",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
      title: "Trust & Safety",
      desc: "Every professional on MiAfya is verified, licensed, and background-checked before listing.",
    },
  ];

  const stats = [
    { value: "200+", label: "Verified Professionals" },
    { value: "100k+", label: "Patients Served" },
    { value: "50+", label: "Health Facilities" },
    { value: "24/7", label: "Platform Access" },
  ];

  return (
    <div className="bg-[#060e1d] min-h-screen">
      {/* ── Page Hero ── */}
      <section className="relative overflow-hidden bg-[#0a1628] border-b border-white/10 pt-32 pb-20 px-6 md:px-12 lg:px-20">
        {/* Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-teal-500 opacity-10 blur-[120px] pointer-events-none" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">
              Our Story
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              African Healthcare
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            MiAfya was founded on one belief — that every Kenyan deserves fast,
            reliable access to quality healthcare. We're building the
            infrastructure to make that possible.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-b border-white/10 bg-[#0a1628]/50">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-1"
            >
              <span className="text-3xl md:text-4xl font-bold text-teal-400">
                {value}
              </span>
              <span className="text-slate-500 text-xs uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── About Content ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image */}
          <div className="relative md:w-2/5 flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-br from-teal-500/30 to-emerald-500/10 rounded-2xl blur-sm" />
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-teal-500 opacity-10 blur-[60px] rounded-full" />
            <img
              className="relative z-10 w-full rounded-2xl object-cover shadow-2xl border border-white/10"
              src={atioeno}
              alt="MiAfya Health Professional"
            />
            {/* Floating card */}
            <div className="absolute -bottom-5 -left-5 z-20 bg-[#0a1628] border border-white/20 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
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
                <p className="text-white text-sm font-semibold">
                  Verified Platform
                </p>
                <p className="text-slate-400 text-xs">Licensed & regulated</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Who We Are
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Welcome to MiAfya — your trusted partner in managing healthcare
                needs conveniently and efficiently. We understand the challenges
                Kenyans face when scheduling appointments, finding specialists,
                and managing health records.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                MiAfya is committed to excellence in healthcare technology. We
                continuously enhance our platform — integrating the latest
                advancements to improve user experience and deliver superior
                service. Whether you're booking your first appointment or
                managing ongoing care, MiAfya is with you every step of the way.
              </p>
            </div>

            {/* Vision block */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-teal-400 font-bold text-sm uppercase tracking-wider">
                  Our Vision
                </h3>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                To create a seamless healthcare experience for every African. We
                aim to bridge the gap between patients and healthcare providers
                — making quality care accessible, affordable, and immediate for
                everyone, everywhere.
              </p>
            </div>

            {/* Mission block */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-emerald-400 font-bold text-sm uppercase tracking-wider">
                  Our Mission
                </h3>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                To empower patients, health professionals, and facilities
                through technology — enabling faster connections, better locum
                opportunities, and smarter healthcare management across Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="border-t border-white/10 px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">
                Why MiAfya
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Built Different. Built for You.
            </h2>
            <p className="text-slate-400 text-base max-w-xl">
              We didn't build another generic health app. MiAfya is
              purpose-built for Kenya's unique healthcare landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:bg-teal-500/10 hover:border-teal-500/30 transition-all duration-300 cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    {icon}
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-base">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-teal-600/20 to-emerald-600/10 border border-teal-500/20 rounded-3xl px-8 md:px-16 py-14 text-center flex flex-col items-center gap-6">
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white">
              Ready to experience better healthcare?
            </h2>
            <p className="relative z-10 text-slate-400 text-base max-w-lg">
              Join thousands of Kenyans already using MiAfya to connect with
              trusted health professionals.
            </p>
            <a
              href="/authonboard"
              className="relative z-10 inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]"
            >
              Get Started Free
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
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
