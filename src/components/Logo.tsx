"use client";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* ── Dark mode original brand logo (mix-blend-screen removes dark background box) ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/dark-logo.png"
        alt="ON Next Web"
        className="dark-logo hidden dark:block object-contain h-[42px] sm:h-[48px] md:h-[54px] w-auto mix-blend-screen transition-all duration-300"
        loading="eager"
      />

      {/* ── Light mode original brand logo (mix-blend-multiply removes light background box) ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/light-logo.png"
        alt="ON Next Web"
        className="light-logo block dark:hidden object-contain h-[42px] sm:h-[48px] md:h-[54px] w-auto mix-blend-multiply transition-all duration-300"
        loading="eager"
      />
    </div>
  );
};

export default Logo;
