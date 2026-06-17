import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2.5 cursor-pointer">
      {/* Icon mark — always visible */}
      <div className="relative w-8 h-8 shrink-0">
        <Image
          src="/favicon.png"
          alt="ON Next Web logo icon"
          fill
          sizes="32px"
          className="object-contain rounded-full"
          priority
        />
      </div>

      {/* Full wordmark — hidden on very small screens */}
      <div className="hidden sm:block relative h-7 w-[140px]">
        <Image
          src="/dark logo.png"
          alt="ON Next Web"
          fill
          sizes="140px"
          className="object-contain object-left"
          priority
        />
      </div>
    </div>
  );
};

export default Logo;

