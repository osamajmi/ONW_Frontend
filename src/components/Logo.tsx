import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2.5 cursor-pointer group">
      {/* Circular icon — always visible */}
      <div className="relative w-9 h-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/favicon.png"
          alt="ON Next Web icon"
          fill
          sizes="36px"
          className="object-contain rounded-full"
          priority
        />
      </div>

      {/* Brand text */}
      <div className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-tight text-foreground">
          On<span className="text-primary">Next</span>Web
        </span>
        <span className="text-[9px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Think Best Think Next
        </span>
      </div>
    </div>
  );
};

export default Logo;


