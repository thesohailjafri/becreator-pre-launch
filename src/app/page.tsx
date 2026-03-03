export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-900 font-sans">
      {/* Gradient mesh background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 -top-1/4 h-[60vh] w-[60vh] rounded-full bg-[oklch(0.65_0.28_330)] opacity-60 blur-[100px]" />
        <div className="absolute -right-1/6 top-1/4 h-[50vh] w-[50vh] rounded-full bg-[oklch(0.7_0.22_250)] opacity-50 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[55vh] w-[55vh] rounded-full bg-[oklch(0.75_0.2_50)] opacity-50 blur-[100px]" />
        <div className="absolute -bottom-1/4 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[oklch(0.6_0.18_160)] opacity-40 blur-[110px]" />
      </div>

      <div
        className="relative z-10 flex w-full max-w-md flex-col items-center gap-4 rounded-[2.5rem] px-10 py-12"
        style={{
          // A slightly stronger base background helps it feel more solid
          background: "rgba(255, 255, 255, 0.15)", // Try swapping to 0.1 or 0.2 depending on background

          // Apple relies heavily on a strong blur
          backdropFilter: "blur(60px) saturate(200%)",
          WebkitBackdropFilter: "blur(60px) saturate(200%)",

          // The border is subtle but crucial for that "edge"
          boxShadow: `
      inset 0 1px 1px rgba(255, 255, 255, 0.5), /* Top highlight */
      inset 0 0 1px rgba(255, 255, 255, 0.3),   /* Soft inner rim */
      0 8px 32px rgba(0, 0, 0, 0.1)             /* Soft outer drop shadow */
    `,
        }}
      >
        <h1 className="text-2xl font-medium tracking-tight text-white drop-shadow-sm">
          Glass Surface
        </h1>
        <p className="text-center text-sm leading-relaxed text-white/80">
          A translucent panel that blurs and tints the world behind it, picking
          up ambient color from the background.
        </p>
      </div>
    </div>
  )
}
