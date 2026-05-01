import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import miafyalogo from "../../assets/images/ui/miafyalogo.png";

const roles = [
  {
    id: "patient",
    title: "Patient",
    subtitle: "I'm looking for healthcare",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
    color: "teal",
  },
  {
    id: "professional",
    title: "Health Professional",
    subtitle: "Doctor, nurse or clinician",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    ),
    color: "emerald",
  },
  {
    id: "facility",
    title: "Health Facility",
    subtitle: "Clinic, hospital or pharmacy",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
    color: "blue",
  },
];

const colorMap = {
  teal: {
    card: "border-teal-500 bg-teal-500/10",
    cardHover: "hover:border-teal-500/50 hover:bg-teal-500/5",
    icon: "bg-teal-500/10 border-teal-500/20 text-teal-400",
    dot: "bg-teal-500",
    btn: "bg-teal-500 hover:bg-teal-400 hover:shadow-[0_0_25px_rgba(45,212,191,0.4)]",
    focus: "focus:border-teal-500/50 focus:bg-teal-500/5",
    text: "text-teal-400",
  },
  emerald: {
    card: "border-emerald-500 bg-emerald-500/10",
    cardHover: "hover:border-emerald-500/50 hover:bg-emerald-500/5",
    icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    dot: "bg-emerald-500",
    btn: "bg-emerald-500 hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(52,211,153,0.4)]",
    focus: "focus:border-emerald-500/50 focus:bg-emerald-500/5",
    text: "text-emerald-400",
  },
  blue: {
    card: "border-blue-500 bg-blue-500/10",
    cardHover: "hover:border-blue-500/50 hover:bg-blue-500/5",
    icon: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    dot: "bg-blue-500",
    btn: "bg-blue-500 hover:bg-blue-400 hover:shadow-[0_0_25px_rgba(96,165,250,0.4)]",
    focus: "focus:border-blue-500/50 focus:bg-blue-500/5",
    text: "text-blue-400",
  },
};

const Signup = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const activeRole = roles.find((r) => r.id === selectedRole);
  const c = activeRole ? colorMap[activeRole.color] : colorMap.teal;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRole) return;
    setLoading(true);
    // TODO: send { ...form, role: selectedRole } to your auth API
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-teal-500 opacity-10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500 opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-lg flex flex-col gap-8">
        {/* ── Logo ── */}
        <div className="flex flex-col items-center gap-3">
          {/* <img
            src={miafyalogo}
            alt="MiAfya"
            width={100}
            className="brightness-0 invert cursor-pointer"
            onClick={() => navigate("/")}
          /> */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">
              Create your account
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Join Kenya's leading health platform
            </p>
          </div>
        </div>

        {/* ── Main Card ── */}
        <div className="bg-[#0a1628] border border-white/10 rounded-3xl p-8 flex flex-col gap-7 shadow-2xl">
          {/* ── Role Selection ── */}
          <div className="flex flex-col gap-3">
            <p className="text-white text-sm font-semibold">
              I am joining as a
              <span className="text-slate-500 font-normal"> — choose one</span>
            </p>
            <div className="grid grid-cols-3 gap-3">
              {roles.map((role) => {
                const rc = colorMap[role.color];
                const isSelected = selectedRole === role.id;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRole(role.id)}
                    className={`relative flex flex-col items-center gap-2.5 p-4 rounded-2xl border transition-all duration-200 text-center ${
                      isSelected
                        ? rc.card
                        : "border-white/10 bg-white/5 " + rc.cardHover
                    }`}
                  >
                    {/* Checkmark */}
                    {isSelected && (
                      <div
                        className={`absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center ${rc.dot}`}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border ${rc.icon}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        viewBox="0 0 24 24"
                      >
                        {role.icon}
                      </svg>
                    </div>
                    {/* Label */}
                    <div>
                      <p
                        className={`text-xs font-semibold leading-tight ${isSelected ? rc.text : "text-white"}`}
                      >
                        {role.title}
                      </p>
                      <p className="text-slate-500 text-[10px] mt-0.5 leading-tight">
                        {role.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-slate-600 text-xs">your details</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* ── Form ── */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-300 text-sm font-medium">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Kamau"
                  required
                  className={`w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none transition-all duration-200 ${c.focus}`}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-300 text-sm font-medium">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className={`w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none transition-all duration-200 ${c.focus}`}
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-300 text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  required
                  minLength={8}
                  className={`w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-12 py-3 text-white placeholder-slate-600 text-sm focus:outline-none transition-all duration-200 ${c.focus}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
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
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                required
                className="mt-0.5 accent-teal-500 w-4 h-4 flex-shrink-0"
              />
              <span className="text-slate-400 text-xs leading-relaxed">
                I agree to MiAfya's{" "}
                <a href="/terms" className="text-teal-400 hover:text-teal-300">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-teal-400 hover:text-teal-300"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Role warning */}
            {!selectedRole && (
              <p className="text-amber-400 text-xs text-center bg-amber-400/10 border border-amber-400/20 rounded-xl py-2 px-3">
                ↑ Please select your role above before creating your account
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !selectedRole}
              className={`w-full py-3.5 rounded-full text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 mt-1 ${
                selectedRole && !loading
                  ? `${c.btn} hover:scale-[1.02]`
                  : "bg-white/10 text-slate-500 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Creating account...
                </>
              ) : selectedRole ? (
                `Create Account as ${activeRole.title}`
              ) : (
                "Select a role to continue"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-slate-600 text-xs">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 text-white text-sm font-medium transition-all duration-200">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Already have account */}
        <p className="text-center text-slate-500 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
