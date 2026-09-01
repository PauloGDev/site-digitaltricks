const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  dark = false,
}) => (
  <div
    className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}
  >
    {eyebrow && (
      <div
        className={`mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${dark ? "text-violet-300" : "text-violet-700"} ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-violet-400" />
        {eyebrow}
      </div>
    )}
    <h2 className={`text-balance text-3xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-5xl lg:text-6xl ${dark ? "text-white" : "text-[#17151d]"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${dark ? "text-white/[0.58]" : "text-[#66606c]"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
