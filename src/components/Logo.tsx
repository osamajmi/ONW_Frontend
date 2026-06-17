const Logo = () => {
  return (
    <div>
      {/* Dark mode logo — shown when .dark class is on <html> */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/dark logo.png"
        alt="ON Next Web"
        style={{ height: "40px", width: "auto", display: "none" }}
        className="dark-logo"
      />
      {/* Light mode logo — shown when no .dark class */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/light logo.png"
        alt="ON Next Web"
        style={{ height: "40px", width: "auto", display: "block" }}
        className="light-logo"
      />
    </div>
  );
};

export default Logo;
