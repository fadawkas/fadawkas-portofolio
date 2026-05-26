export function GrainOverlay() {
  return (
    <svg
      aria-hidden
      className="grain-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="4"
          stitchTiles="stitch"
        />
        {/* Full desaturate to pure luminance — eliminates any residual sRGB color cast */}
        <feColorMatrix
          type="matrix"
          values="0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0    0    0    1 0"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}
