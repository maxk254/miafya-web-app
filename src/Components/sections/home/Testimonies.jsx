import React from "react";

const testimonials = [
  {
    name: "Maxwel Mwangi",
    handle: "@max_Mwangi",
    role: "Patient",
    rating: 5,
    text: "MiAfya saved me hours I used to waste in hospital queues. I booked an appointment with a specialist in under a minute and got seen the same day. This is exactly what Kenya needed.",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&h=100&auto=format&fit=crop",
    color: "teal",
  },
  {
    name: "Dr. Otieno Omondi",
    handle: "@dr_otieno",
    role: "Clinical Officer",
    rating: 5,
    text: "As a health professional, MiAfya has completely changed how I manage my practice. I've connected with new patients every week and landed two locum shifts that fit perfectly around my schedule.",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop",
    color: "emerald",
  },
  {
    name: "Jane Nafula",
    handle: "@jane_nafula",
    role: "Facility Manager",
    rating: 5,
    text: "We listed our clinic on MiAfya and started receiving patient bookings within the first week. We also filled two urgent locum positions faster than any other method we'd tried before.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    color: "blue",
  },
];

const colorMap = {
  teal: {
    border: "hover:border-teal-500/40",
    glow: "hover:shadow-[0_0_30px_rgba(45,212,191,0.08)]",
    quote: "text-teal-400",
    role: "bg-teal-500/10 border-teal-500/30 text-teal-400",
    star: "text-teal-400",
  },
  emerald: {
    border: "hover:border-emerald-500/40",
    glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.08)]",
    quote: "text-emerald-400",
    role: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    star: "text-emerald-400",
  },
  blue: {
    border: "hover:border-blue-500/40",
    glow: "hover:shadow-[0_0_30px_rgba(96,165,250,0.08)]",
    quote: "text-blue-400",
    role: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    star: "text-blue-400",
  },
};

const Stars = ({ count, colorClass }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${colorClass}`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const Testimonies = () => {
  return (
    <section className="bg-[#0a1628] border-t border-white/10 px-6 md:px-12 lg:px-20 py-20 mt-32 rounded-2xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">
              Real Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Thousands
            </span>{" "}
            Across Kenya
          </h2>
          <p className="text-slate-400 text-base max-w-lg">
            Patients, professionals and facilities are already transforming how
            they experience healthcare with MiAfya.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => {
            const c = colorMap[t.color];
            return (
              <div
                key={t.handle}
                className={`group bg-[#060e1d] border border-white/10 rounded-3xl p-7 flex flex-col gap-5 transition-all duration-300 ${c.border} ${c.glow}`}
              >
                {/* Quote icon */}
                <svg
                  className={`w-8 h-8 ${c.quote} opacity-60`}
                  fill="currentColor"
                  viewBox="0 0 44 40"
                >
                  <path d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203" />
                </svg>

                {/* Stars */}
                <Stars count={t.rating} colorClass={c.star} />

                {/* Testimonial text */}
                <p className="text-slate-300 text-sm leading-relaxed flex-1">
                  "{t.text}"
                </p>

                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* Author */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-11 h-11 rounded-full object-cover border-2 border-white/10"
                      src={t.avatar}
                      alt={t.name}
                    />
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {t.name}
                      </p>
                      <p className="text-slate-500 text-xs">{t.handle}</p>
                    </div>
                  </div>
                  {/* Role badge */}
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full border flex-shrink-0 ${c.role}`}
                  >
                    {t.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Social proof strip ── */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-8 border-t border-b border-white/10">
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "100k+", label: "Happy Patients" },
            { value: "200+", label: "Professionals" },
            { value: "98%", label: "Satisfaction Rate" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 text-center"
            >
              <span className="text-2xl font-bold text-teal-400">{value}</span>
              <span className="text-slate-500 text-xs uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
