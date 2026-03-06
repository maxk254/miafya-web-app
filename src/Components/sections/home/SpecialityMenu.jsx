import React from "react";
import { SpecialityData } from "../../../assets/data/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <section
      id="speciality"
      className="bg-[#060e1d] border-t border-white/10 px-6 md:px-12 lg:px-20 py-20 mt-20 rounded-2xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">
              Browse by Speciality
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Find a Doctor by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Speciality
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-md">
            Select a speciality below to instantly browse verified professionals
            in that field and book your appointment.
          </p>
        </div>

        {/* ── Speciality Cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SpecialityData.map((item, index) => (
            <Link
              key={index}
              to={`/healthprofesionals/${item.Speciality}`}
              onClick={() => window.scrollTo(0, 0)}
              className="group flex flex-col items-center gap-3 bg-[#0a1628] border border-white/10 rounded-2xl p-5 hover:border-teal-500/40 hover:bg-teal-500/5 hover:shadow-[0_0_25px_rgba(45,212,191,0.08)] transition-all duration-300 cursor-pointer"
            >
              {/* Icon wrapper */}
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-all duration-300 overflow-hidden">
                <img
                  className="w-10 h-10 object-contain"
                  src={item.image}
                  alt={item.Speciality}
                />
              </div>

              {/* Label */}
              <p className="text-slate-300 text-xs font-medium text-center leading-tight group-hover:text-teal-400 transition-colors duration-200">
                {item.Speciality}
              </p>
            </Link>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="flex justify-center">
          <Link
            to="/healthprofesionals"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 text-sm font-medium transition-colors duration-200"
          >
            Browse all professionals
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialityMenu;
