import React, { useState, useMemo } from "react";
import { facilittiesData } from "../../../assets/data/assets";
import { useNavigate } from "react-router-dom";

const facilityTypes = [
  { label: "All", value: "" },
  { label: "Hospital", value: "Hospital" },
  { label: "Clinic", value: "Clinic" },
  { label: "Pharmacy", value: "Pharmacy" },
  { label: "Laboratory", value: "Laboratory" },
  { label: "Dental", value: "Dental" },
  { label: "Maternity", value: "Maternity" },
];

const Facilities = ({ preview = false }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("");

  const filtered = useMemo(() => {
    let data = facilittiesData || [];
    if (activeType) {
      data = data.filter((f) =>
        f.Speciality?.toLowerCase().includes(activeType.toLowerCase()),
      );
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (f) =>
          f.name?.toLowerCase().includes(q) ||
          f.Location?.toLowerCase().includes(q) ||
          f.Speciality?.toLowerCase().includes(q) ||
          f.KeyServices?.toLowerCase().includes(q),
      );
    }
    return preview ? data.slice(0, 6) : data;
  }, [facilittiesData, search, activeType, preview]);

  return (
    <div className="min-h-screen bg-[#060e1d]">
      {/* ── Page Hero ── */}
      <section className="relative overflow-hidden bg-[#0a1628] border-b border-white/10 pt-32 pb-14 px-6 md:px-12 lg:px-20 mb-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-teal-500 opacity-10 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">
              Verified Facilities
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Find a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Health Facility
            </span>
          </h1>
          <p className="text-slate-400 text-base max-w-xl">
            Browse Kenya's top hospitals, clinics, pharmacies and specialist
            centres. Find the right facility and book your visit instantly.
          </p>

          {/* Search */}
          {!preview && (
            <div className="relative max-w-xl mt-2">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, location or service..."
                className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-5 py-3.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/50 focus:bg-teal-500/5 transition-all duration-200"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── Body ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── Sidebar Filters ── */}
          {!preview && (
            <aside className="lg:w-56 flex-shrink-0">
              <div className="bg-[#0a1628] border border-white/10 rounded-2xl p-5 lg:sticky lg:top-24">
                <p className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
                  Facility Type
                </p>
                <div className="flex flex-row lg:flex-col gap-2 flex-wrap">
                  {facilityTypes.map(({ label, value }) => {
                    const isActive = activeType === value;
                    return (
                      <button
                        key={label}
                        onClick={() => setActiveType(value)}
                        className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                          isActive
                            ? "bg-teal-500/20 text-teal-400 border border-teal-500/40"
                            : "text-slate-400 hover:text-white hover:bg-white/10 border border-transparent"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                {/* Stats */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-3">
                  {[
                    { value: "50+", label: "Facilities" },
                    { value: "Nairobi", label: "& Countrywide" },
                    { value: "24/7", label: "Emergency Access" },
                  ].map(({ value, label }) => (
                    <div key={label} className="flex flex-col">
                      <span className="text-teal-400 font-bold text-base">
                        {value}
                      </span>
                      <span className="text-slate-600 text-xs">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          )}

          {/* ── Results ── */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Count + clear */}
            {!preview && (
              <div className="flex items-center justify-between">
                <p className="text-slate-400 text-sm">
                  <span className="text-white font-semibold">
                    {filtered.length}
                  </span>{" "}
                  facilit{filtered.length !== 1 ? "ies" : "y"} found
                  {activeType && (
                    <span className="text-teal-400"> · {activeType}</span>
                  )}
                </p>
                {(activeType || search) && (
                  <button
                    onClick={() => {
                      setSearch("");
                      setActiveType("");
                    }}
                    className="text-xs text-slate-500 hover:text-teal-400 transition-colors flex items-center gap-1"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Clear filters
                  </button>
                )}
              </div>
            )}

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">
                    No facilities found
                  </p>
                  <p className="text-slate-500 text-sm mt-1">
                    Try adjusting your search or filters
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveType("");
                  }}
                  className="text-teal-400 text-sm hover:text-teal-300 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    navigate("/healthfacilities");
                    window.scrollTo(0, 0);
                  }}
                  className="group bg-[#0a1628] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-teal-500/40 hover:shadow-[0_0_30px_rgba(45,212,191,0.08)] transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-[#0d1f3c] h-48">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />

                    {/* Type badge */}
                    {item.Speciality && (
                      <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                        <span className="text-white text-xs font-medium">
                          {item.Speciality}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col gap-3">
                    {/* Name */}
                    <div>
                      <p className="text-white font-semibold text-base leading-tight">
                        {item.name}
                      </p>

                      {/* Location */}
                      {item.Location && (
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <svg
                            className="w-3.5 h-3.5 text-teal-400 flex-shrink-0"
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
                          <span className="text-teal-400 text-xs">
                            {item.Location}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Key services */}
                    {item.KeyServices && (
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                        {item.KeyServices}
                      </p>
                    )}

                    {/* Divider */}
                    <div className="border-t border-white/10" />

                    {/* Footer row */}
                    <div className="flex items-center justify-between gap-3">
                      {item.contact && (
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs min-w-0">
                          <svg
                            className="w-3.5 h-3.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span className="truncate">{item.contact}</span>
                        </div>
                      )}
                      <button className="flex-shrink-0 px-4 py-1.5 rounded-xl border border-teal-500/30 text-teal-400 text-xs font-semibold hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-200">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Preview mode "View all" button */}
            {preview && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    navigate("/healthfacilities");
                    window.scrollTo(0, 0);
                  }}
                  className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]"
                >
                  View All Facilities
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
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
// to add facility serch by service and location