const Logo = () => {
  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Brand icon */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/favicon.png"
        alt="ONW"
        width={36}
        height={36}
        className="rounded-full ring-1 ring-primary/40"
      />
      {/* Brand text */}
      <span className="font-display text-[15px] font-bold tracking-tight text-foreground">
        On<span className="text-primary">Next</span>Web
      </span>
    </div>
  );
};

export default Logo;
