"use client";

import { useEffect, useRef, useState } from "react";

import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const isMobile = useIsMobile();
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    let raf: number;
    const animate = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.15;
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.15;
      if (followerRef.current) {
        const size = hovering ? 48 : 32;
        followerRef.current.style.transform = `translate(${followerPos.current.x - size / 2}px, ${followerPos.current.y - size / 2}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    document.addEventListener("mousemove", move);
    raf = requestAnimationFrame(animate);

    const interactives = document.querySelectorAll("a, button, [data-magnetic]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [isMobile, hovering]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 rounded-full border border-primary/50 z-[9998] pointer-events-none mix-blend-difference transition-[width,height] duration-300"
        style={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          willChange: "transform",
        }}
      />
    </>
  );
};

export default CustomCursor;
