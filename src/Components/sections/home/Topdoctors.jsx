import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";

const Topdoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className="bg-[#060e1d] px-6 md:px-12 lg:px-20 py-20 rounded-2xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">
                Top Rated
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Health Professionals{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Ready to Book
              </span>
            </h2>
            <p className="text-slate-400 text-base max-w-md">
              Browse our verified network of doctors, nurses, pharmacists and
              specialists across Kenya.
            </p>
          </div>

          {/* Desktop "View All" link */}
          <button
            onClick={() => {
              navigate("/healthprofesionals");
              window.scrollTo(0, 0);
            }}
            className="hidden md:inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold text-sm transition-colors flex-shrink-0"
          >
            View all professionals
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

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {doctors.slice(0, 8).map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="group bg-[#0a1628] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-teal-500/40 hover:shadow-[0_0_30px_rgba(45,212,191,0.08)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-[#0d1f3c] h-52">
                <img
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />

                {/* Available badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">
                    Available
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-3">
                <div>
                  <p className="text-white font-semibold text-base">
                    {item.name}
                  </p>
                  <p className="text-teal-400 text-sm mt-0.5">
                    {item.Speciality}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-slate-500 text-xs">
                  {item.experience && (
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {item.experience}
                    </span>
                  )}
                  {item.location && (
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {item.location}
                    </span>
                  )}
                </div>

                {/* Book button */}
                <button className="w-full mt-1 py-2.5 rounded-xl border border-teal-500/30 text-teal-400 text-sm font-semibold hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-200">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile CTA ── */}
        <div className="flex justify-center md:hidden">
          <button
            onClick={() => {
              navigate("/healthprofesionals");
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]"
          >
            View All Professionals
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
    </section>
  );
};

export default Topdoctors;
// we need to make cards clicable to open professinal full profile