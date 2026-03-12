import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const specialities = [
  { label: "All", value: "" },
  { label: "General Physician", value: "General physician" },
  { label: "Gynecologist", value: "Gynecologist" },
  { label: "Pediatrician", value: "Pediatrician" },
  { label: "Nutritionist", value: "Nutritionist" },
  { label: "Pharmacist", value: "Pharmacist" },
  { label: "Clinical Officer", value: "Clinical Officer" },
  { label: "Nurse", value: "Nurse" },
];

const Healthprofessionals = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);

  const [filterDoc, setFilterDoc] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let filtered = doctors;
    if (speciality) {
      filtered = filtered.filter((doc) => doc.Speciality === speciality);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (doc) =>
          doc.name?.toLowerCase().includes(q) ||
          doc.Speciality?.toLowerCase().includes(q),
      );
    }
    setFilterDoc(filtered);
  }, [doctors, speciality, search]);

  const handleSpecialityClick = (value) => {
    if (!value) {
      navigate("/healthprofesionals");
    } else if (speciality === value) {
      navigate("/healthprofesionals");
    } else {
      navigate(`/healthprofesionals/${value}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#060e1d]">
      {/* ── Page Hero ── */}
      <section className="relative overflow-hidden bg-[#0a1628] border-b border-white/10 pt-32 pb-14 px-6 md:px-12 lg:px-20">
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
              Verified Professionals
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Find a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Health Professional
            </span>
          </h1>
          <p className="text-slate-400 text-base max-w-xl">
            Browse Kenya's largest network of verified doctors, nurses,
            pharmacists and specialists. Book your appointment in under 60
            seconds.
          </p>

          {/* Search bar */}
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
              placeholder="Search by name or speciality..."
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
        </div>
      </section>

      {/* ── Body ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── Sidebar Filters ── */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="bg-[#0a1628] border border-white/10 rounded-2xl p-5 lg:sticky lg:top-24">
              <p className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
                Speciality
              </p>
              <div className="flex flex-row lg:flex-col gap-2 flex-wrap">
                {specialities.map(({ label, value }) => {
                  const isActive =
                    value === "" ? !speciality : speciality === value;
                  return (
                    <button
                      key={label}
                      onClick={() => handleSpecialityClick(value)}
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
            </div>
          </aside>

          {/* ── Results ── */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Results count */}
            <div className="flex items-center justify-between">
              <p className="text-slate-400 text-sm">
                <span className="text-white font-semibold">
                  {filterDoc.length}
                </span>{" "}
                professional{filterDoc.length !== 1 ? "s" : ""} found
                {speciality && (
                  <span className="text-teal-400"> · {speciality}</span>
                )}
              </p>
              {(speciality || search) && (
                <button
                  onClick={() => {
                    navigate("/healthprofesionals");
                    setSearch("");
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

            {/* Empty state */}
            {filterDoc.length === 0 && (
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">
                    No professionals found
                  </p>
                  <p className="text-slate-500 text-sm mt-1">
                    Try adjusting your search or filters
                  </p>
                </div>
                <button
                  onClick={() => {
                    navigate("/healthprofesionals");
                    setSearch("");
                  }}
                  className="text-teal-400 text-sm hover:text-teal-300 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filterDoc.map((item, index) => (
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
                    {/* Gradient overlay */}
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

                    {/* Meta row */}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthprofessionals;
