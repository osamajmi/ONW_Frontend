/**
 * Logo component — CSS-only theme switching.
 * dark-logo.png  → shown when <html> has .dark class  (dark mode)
 * light-logo.png → shown when <html> has no .dark class (light mode)
 *
 * The navbar background is fully opaque bg-background so logo backgrounds blend seamlessly.
 */
const Logo = () => {
  return (
    <div className="flex items-center py-1">
      {/* ── Dark mode logo ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/dark-logo.png"
        alt="ON Next Web — Web Development & Custom Software Agency Logo"
        className="dark-logo object-contain"
        width={140}
        height={34}
        loading="eager"
        style={{ height: "34px", width: "auto" }}
      />

      {/* ── Light mode logo ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/light-logo.png"
        alt="ON Next Web — Web Development & Custom Software Agency Logo"
        className="light-logo object-contain"
        width={140}
        height={34}
        loading="eager"
        style={{ height: "34px", width: "auto" }}
      />
    </div>
  );
};

export default Logo;
