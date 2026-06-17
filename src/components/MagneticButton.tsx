"use client";

import { useRef, ReactNode } from "react";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const MagneticButton = ({ children, className = "", onClick, href }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0px, 0px)";
    }
  };

  const Comp = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-300 ease-out"
      data-magnetic
      whileTap={{ scale: 0.95 }}
    >
      <Comp
        href={href}
        onClick={onClick}
        className={className}
      >
        {children}
      </Comp>
    </motion.div>
  );
};

export default MagneticButton;
