"use client";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center select-none py-0.5 ${className}`}>
      {/* ── Dark mode original brand logo (mix-blend-screen removes dark background box) ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/dark-logo.png"
        alt="ON Next Web"
        className="dark-logo object-contain h-10 sm:h-11 md:h-12 w-auto mix-blend-screen"
        loading="eager"
      />

      {/* ── Light mode original brand logo (mix-blend-multiply removes light background box) ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/light-logo.png"
        alt="ON Next Web"
        className="light-logo object-contain h-10 sm:h-11 md:h-12 w-auto mix-blend-multiply"
        loading="eager"
      />
    </div>
  );
};

export default Logo;
