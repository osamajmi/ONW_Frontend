"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Before mount, show a placeholder to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="h-10 w-36 rounded-md bg-transparent" aria-label="ON Next Web" />
    );
  }

  const logoSrc =
    resolvedTheme === "light" ? "/light logo.png" : "/dark logo.png";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logoSrc}
      alt="ON Next Web"
      height={40}
      style={{ height: "40px", width: "auto", display: "block" }}
    />
  );
};

export default Logo;
