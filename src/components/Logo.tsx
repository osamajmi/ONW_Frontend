"use client";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

const Logo = ({ className = "", showTagline = true }: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* ── Modern Vector Logo Emblem ── */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary/30 via-purple-500/20 to-cyan-500/20 p-[1px] shadow-[0_0_20px_rgba(var(--primary),0.25)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] shrink-0">
        <div className="w-full h-full rounded-xl bg-background/90 backdrop-blur-md flex items-center justify-center relative overflow-hidden group-hover:bg-background/80 transition-all duration-300">
          {/* Subtle gradient glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/15 to-cyan-500/15 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary relative z-10 transform group-hover:scale-110 transition-transform duration-300"
          >
            {/* ONW Geometric Interlocking Wave Symbol */}
            <path
              d="M9 27L9 13L16.5 25.5L24 13L31.5 27"
              stroke="url(#onw-logo-gradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="13" r="2.2" fill="hsl(var(--primary))" />
            <circle cx="31.5" cy="27" r="2.2" fill="#a855f7" />
            <circle cx="24" cy="13" r="1.8" fill="#38bdf8" />

            <defs>
              <linearGradient id="onw-logo-gradient" x1="9" y1="13" x2="31.5" y2="27" gradientUnits="userSpaceOnUse">
                <stop stopColor="hsl(var(--primary))" />
                <stop offset="0.5" stopColor="#a855f7" />
                <stop offset="1" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* ── Brand Typography ── */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1 text-base sm:text-lg font-bold font-display tracking-tight text-foreground">
          <span>ON</span>
          <span className="text-gradient">NEXT</span>
          <span>WEB</span>
        </div>
        {showTagline && (
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-muted-foreground/75 mt-0.5">
            Think best Think next
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
