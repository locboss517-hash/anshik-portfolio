import React from 'react';

export const BackgroundAtmosphere: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Layer 1: Architectural Blueprint Background Image with Blend Mode */}
      <div 
        className="absolute inset-0 bg-[url('/bg-architecture.svg')] bg-cover bg-center bg-no-repeat text-charcoal-500 dark:text-charcoal-400 light:text-charcoal-300 opacity-30 dark:opacity-25 light:opacity-40 mix-blend-screen dark:mix-blend-screen light:mix-blend-multiply transition-opacity duration-300"
      />

      {/* Layer 2: Primary Radial Glow Gradient — Hero Center / Top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-80 dark:opacity-75 light:opacity-45 blur-3xl transition-opacity duration-300"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 20%, rgba(37, 99, 235, 0.28) 0%, rgba(37, 99, 235, 0.10) 45%, rgba(0, 0, 0, 0) 75%)',
        }}
      />

      {/* Layer 3: Secondary Accent Radial Glow — Behind 3D Building Blocks (Upper Right) */}
      <div
        className="absolute top-20 right-[-100px] w-[650px] h-[650px] rounded-full opacity-70 dark:opacity-65 light:opacity-35 blur-3xl transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.22) 0%, rgba(37, 99, 235, 0.08) 50%, rgba(0, 0, 0, 0) 75%)',
        }}
      />

      {/* Layer 4: Ambient Radial Glow — Mid Section / Projects (Left Flank) */}
      <div
        className="absolute top-[45%] left-[-150px] w-[600px] h-[600px] rounded-full opacity-60 dark:opacity-50 light:opacity-30 blur-3xl transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.18) 0%, rgba(37, 99, 235, 0.05) 50%, rgba(0, 0, 0, 0) 75%)',
        }}
      />

      {/* Layer 5: Contact Section Ambient Radial Glow — Bottom Anchor */}
      <div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[550px] rounded-full opacity-70 dark:opacity-65 light:opacity-40 blur-3xl transition-opacity duration-300"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 80%, rgba(37, 99, 235, 0.22) 0%, rgba(37, 99, 235, 0.06) 50%, rgba(0, 0, 0, 0) 80%)',
        }}
      />

      {/* Layer 6: Subtle Vignette Frame for Cinematic Depth */}
      <div
        className="absolute inset-0 bg-transparent dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)] light:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.45)_100%)] pointer-events-none"
      />
    </div>
  );
};
