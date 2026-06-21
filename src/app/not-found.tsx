import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 py-12 text-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-md w-full flex flex-col items-center">
        {/* Animated 404 Text */}
        <h1 className="text-9xl font-extrabold tracking-widest text-foreground select-none relative animate-pulse">
          404
        </h1>
        
        {/* Overlay Label */}
        <div className="bg-primary text-primary-foreground text-xs uppercase tracking-widest px-3 py-1.5 rounded-full font-bold -mt-4 shadow-lg border border-primary/20">
          Page Not Found
        </div>

        {/* Supporting Message */}
        <h2 className="text-2xl font-bold mt-8 mb-2">Lost in space?</h2>
        <p className="text-muted-foreground mb-8 text-sm leading-relaxed max-w-sm">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/95 active:scale-95 transition-all duration-200 rounded-lg shadow-lg hover:shadow-primary/10"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
