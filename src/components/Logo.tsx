"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex items-center gap-2.5 cursor-pointer group">
      {/* Circular icon */}
      <div className="relative w-9 h-9 shrink-0 transition-transform duration-300 group-hover:scale-110">
        <Image
          src="/favicon.png"
          alt="ON Next Web"
          fill
          sizes="36px"
          className="object-contain rounded-full ring-1 ring-primary/30 group-hover:ring-primary/60 transition-all duration-300"
          priority
        />
      </div>

      {/* Brand wordmark — adapts to theme */}
      <div className="flex flex-col leading-tight gap-0">
        <span
          className="font-display text-[15px] font-bold tracking-tight"
          style={{ lineHeight: 1.1 }}
        >
          <span className={mounted && resolvedTheme === "light" ? "text-gray-900" : "text-white"}>
            On
          </span>
          <span className="text-primary">Next</span>
          <span className={mounted && resolvedTheme === "light" ? "text-gray-900" : "text-white"}>
            Web
          </span>
        </span>
        <span className="text-[8.5px] font-semibold tracking-[0.2em] text-primary/70 uppercase">
          Think Best Think Next
        </span>
      </div>
    </div>
  );
};

export default Logo;
