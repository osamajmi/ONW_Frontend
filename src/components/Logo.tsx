/**
 * Logo component — CSS-only theme switching.
 * dark logo.png  → shown when <html> has .dark class  (dark mode)
 * light logo.png → shown when <html> has no .dark class (light mode)
 *
 * The navbar background is fully opaque bg-background so logo backgrounds blend seamlessly.
 */
const Logo = () => {
  return (
    <div style={{ lineHeight: 0 }}>
      {/* ── Dark mode logo ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/dark logo.png"
        alt="ON Next Web"
        className="dark-logo"
        style={{ height: "38px", width: "auto" }}
      />

      {/* ── Light mode logo ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/light logo.png"
        alt="ON Next Web"
        className="light-logo"
        style={{ height: "38px", width: "auto" }}
      />
    </div>
  );
};

export default Logo;
